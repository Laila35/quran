import { NextResponse } from "next/server";
import LeadsForm from "@/models/LeadsForm";
import User from "@/models/User";
import { transporter } from "../config/nodemailer";
import axios from "axios";
import Webhook from "@/models/whatsappWebhookSchema";
import DuplicateLeads from "@/models/DuplicateLeads";
import LeadsStatus from "@/models/LeadsStatus";
import MessageIndex from "@/models/MessageIndex";
import Email from "@/models/EmailSchema";
import { getCurrentServer } from "@/config/getCurrentServer";
import Student from "@/models/Student";
export const handleLeadsSubmit = async (req) => {
  const {
    LEAD_IP,
    FULL_NAME,
    PHONE_NO,
    EMAIL,
    REMARKS,
    COUNTRY,
    TIME_ZONE,
    CURRENCY,
    STATE,
    REQUEST_FORM,
    P_ASSIGNED,
    P_STATUS,
  } = await req.json();

  let DEVICE = 4;
  if (PHONE_NO) {
    if (PHONE_NO.startsWith("+1")) {
      DEVICE = 5; // For "+1", set device value to 5
    } else if (PHONE_NO.startsWith("+61")) {
      DEVICE = 2; // For "+61", set device value to 2
    } else if (PHONE_NO.startsWith("+92")) {
      DEVICE = 1; // For "+92", set device value to 1
    }
  }
  console.log("DEvice is", DEVICE);

  try {
    // Check for existing lead by EMAIL or PHONE_NO
    const existingLead = await LeadsForm.findOne({
      $or: [{ EMAIL }, { PHONE_NO }],
    });

    if (existingLead) {
      // If lead already exists, store in DuplicateLeadForm table
      const duplicateLeadData = {
        LEAD_ID: existingLead.LEAD_ID,
        FULL_NAME,
        EMAIL,
        PHONE_NO,
        REMARKS,
        COUNTRY,
        TIME_ZONE,
        CURRENCY,
        STATE,
        LEAD_IP,
        DEVICE,
        REQUEST_FORM,
        DATE_CREATED: new Date(),
        P_ASSIGNED,
        P_STATUS,
      };

      // Store in DuplicateLeadForm collection
      const newDuplicateLead = await DuplicateLeads.create(duplicateLeadData);
      if (!newDuplicateLead._id) throw new Error("Form creation failed.");

      // Increment the 'New_Messages' field by 1 in the existing lead
      await LeadsForm.updateOne(
        { LEAD_ID: existingLead.LEAD_ID },
        { $inc: { New_Messages: 1 } }
      );

      // Find conversation
      const chat = await Webhook.findOne({
        conversation: {
          $elemMatch: {
            $or: [
              { isReply: false, receiver: PHONE_NO }, // If it's a reply, match receiver
              { isReply: true, sender: PHONE_NO }, // Otherwise, match sender
            ],
          },
        },
      });

      // If a conversation is found, update its LEAD_ID
      if (chat) {
        await Webhook.updateOne(
          { _id: chat._id },
          { $set: { leadId: existingLead.LEAD_ID } }
        );
      }

      // Attempt to sync with Oracle
      try {
        const response = await newDuplicateLead.syncWithOracle();
        console.log("Data successfully synced with Oracle.");
      } catch (oracleError) {
        console.error("Oracle sync failed:", oracleError.message);
        // The cron job will handle resyncing unsynced leads later
      }

      // Return duplicate lead response with the same format as new form submission
      return NextResponse.json(
        {
          message: "Your form has been successfully submitted.",
          success: true,
          data: {
            id: existingLead._id,
            LEAD_ID: existingLead.LEAD_ID,
            FULL_NAME,
            EMAIL,
            PHONE_NO,
            REMARKS,
            COUNTRY,
            DEVICE,
            TIME_ZONE,
            CURRENCY,
            STATE,
            LEAD_IP,
            REQUEST_FORM,
            STUDENTS: existingLead.STUDENTS,
          },
        },
        { status: 201 }
      );
    }
    // Create new LeadForm if no duplicate is found
    const newFormData = await LeadsForm.create({
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      TIME_ZONE,
      CURRENCY,
      DEVICE,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      WHATSAPP_STATUS: "no response",
      DATE_CREATED: new Date(),
      P_ASSIGNED,
      P_STATUS,
    });

    if (!newFormData) throw new Error("Form creation failed.");
    const chat = await Webhook.findOne({
      conversation: {
        $elemMatch: {
          $or: [
            { isReply: false, receiver: PHONE_NO }, // If it's a reply, match receiver
            { isReply: true, sender: PHONE_NO }, // Otherwise, match sender
          ],
        },
      },
    });

    // If a conversation is found, update its LEAD_ID
    if (chat) {
      await Webhook.updateOne(
        { _id: chat._id },
        { $set: { leadId: newFormData.LEAD_ID } }
      );
      console.log(
        "Updated conversation with new LEAD_ID:",
        existingLead.LEAD_ID
      );
    }

    // Send success response immediately (before sync)
    const responseData = {
      message: "Your form has been successfully submitted.",
      success: true,
      data: {
        id: newFormData._id,
        LEAD_ID: newFormData.LEAD_ID,
        FULL_NAME,
        EMAIL,
        PHONE_NO,
        REMARKS,
        COUNTRY,
        DEVICE,
        TIME_ZONE,
        CURRENCY,
        STATE,
        LEAD_IP,
        REQUEST_FORM,
        STUDENTS: existingLead?.STUDENTS || [], // Avoids crash if `existingLead` is undefined
      },
    };

    // **Perform Oracle Sync in the background (non-blocking)**
    newFormData
      .syncWithOracle()
      .then(() => console.log("Data successfully synced with Oracle."))
      .catch((oracleError) =>
        console.error(
          "Oracle sync failed, will retry via cron job:",
          oracleError.message
        )
      );

    // **Return success response (independent of sync)**
    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Something went wrong while submitting your form. Please try again later.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

// handle message and email sending
const sendWhatsAppMessage = async (phone, appKey, message) => {
  return await axios
    .post("https://waserver.pro/api/create-message", {
      appkey: appKey,
      authkey: "nFMsTFQPQedVPNOtCrjjGvk5xREsJq2ClbU79vFNk8NlgEb9oG",
      to: phone,
      message,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`WhatsApp message failed: ${error.message}`);
    });
};

const getAppKey = (phone) => {
  const countryCode = phone.slice(0, 2);
  if (countryCode === "+1") return "044d31bc-1666-4f72-8cc2-32be88c8a6d7";
  if (countryCode === "+6") return "3fa548ce-ec9b-4906-8c5a-f48b0ef69cc8";
  return "be4f69af-d825-4e7f-a029-2a68c5f732c9";
};

// Function to send email notifications
const sendEmail = async (mailOptions) => {
  try {
    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};

export const handleMessageSending = async (req) => {
  const server = await getCurrentServer();

  const body = await req.json();
  const {
    id,
    LEAD_ID,
    FULL_NAME,
    TIME_ZONE,
    EMAIL,
    PHONE_NO,
    COUNTRY,
    STATE,
    CURRENCY,
    REMARKS,
    LEAD_IP,
    REQUEST_FORM,
  } = body;
  const errors = [];

  try {
    const appKey = getAppKey(PHONE_NO);

    // Define message templates
    const messages = [
      {
        message_type: "welcome",
        template: `Assalamu Alaikum {{name}},
    
    Welcome to *ilmulQuran.com* – your journey of learning Quran and Islamic knowledge starts here .
    
    Kindly let us know your preferred time for a quick call to schedule your first class.
    
    _JazakAllah Khair_`,
      },
      {
        message_type: "welcome",
        template: `Wa Alaikum Assalam {{name}},
    
    Thank you for joining *ilmulQuran.com* ✨.
    
    We offer:
    • One-on-one Quran classes
    • Certified male & female teachers
    • Flexible timings
    
    Please reply with:
    1. Your best time for callback
    2. Preferred contact method (WhatsApp/Call)`,
      },
      {
        message_type: "welcome",
        template: `Assalamu Alaikum {{name}},
    
    You're warmly welcomed to *ilmulQuran.com* – where learning Quran is made easy and flexible 📖.
    
    Let us know your suitable time to connect and help you schedule your class.`,
      },
      {
        message_type: "welcome",
        template: `Assalamu Alaikum wa Rahmatullah {{name}},
    
    Welcome to our online *Quran Academy* .
    
    We're honored to help you/your child learn:
    ✔ Quran Recitation
    ✔ Tajweed Rules
    ✔ Islamic studies
    
    Kindly share:
    • Preferred time
    • Contact method (Call/WhatsApp)`,
      },
      {
        message_type: "welcome",
        template: `Dear {{name}}, Assalamu Alaikum,
    
    Welcome to *ilmulQuran.com* – an online platform for Islamic learning with dedication and sincerity .
    
    Please share:
    1. Suitable time to talk
    2. Preferred contact (WhatsApp/Direct Call)`,
      },
      {
        message_type: "welcome",
        template: `Assalamu Alaikum {{name}},
    
    It's a pleasure to have you at *ilmulQuran.com* .
    
    We're committed to helping you excel in Quranic studies. 
    
    Let us know:
    • Best time to connect
    • Any specific requirements`,
      },
    ];

    // Fetch the last used message index
    let messageIndex = await MessageIndex.findOne();

    if (!messageIndex) {
      // If no index exists, create one with 0
      messageIndex = new MessageIndex({ index: 0 });
      await messageIndex.save();
    }

    // Select message based on index
    const lastMessageIndex = messageIndex.index;
    let messageTemplate = messages[lastMessageIndex].template;

    // Replace placeholder {{name}} dynamically with FULL_NAME
    messageTemplate = messageTemplate.replace(/{{name}}/g, FULL_NAME);

    // Append scheduling details at the end of each message
    const additionalMessage = `
      
To schedule your free trial class, simply reply with:
  - Your Full Name  
  - Preferred Date & Time according to the time zone ${TIME_ZONE}  

📧 Contact us at admin@ilmulQuran.com  
If you'd like to provide further details to confirm your class, click the link below:  
👉 https://ilmulQuran.com/thank-you?id=${id}  

IlmulQuran Team`;

    messageTemplate += additionalMessage; // Append the details to the message

    // Send WhatsApp message
    let response;
    if (server === "baileys") {
      const baileysPayload = {
        number: PHONE_NO,
        account: appKey,
        message: messageTemplate,
      };

      // Updated to use the Vercel proxy endpoint
      response = await axios.post(
        "http://45.76.132.90:3001/send-message",
        baileysPayload
      );
    } else {
      response = await sendWhatsAppMessage(PHONE_NO, appKey, messageTemplate);
    }

    if (response?.status_code === 200 || response?.status === 200) {
      const newMessage = {
        text: messageTemplate,
        isReply: true,
        sender: appKey,
        receiver: response.to,
        createdAt: new Date(),
      };

      // Store message in Webhook collection
      let conversation = await Webhook.findOne({ leadId: LEAD_ID });

      if (conversation) {
        await Webhook.updateOne(
          { leadId: LEAD_ID },
          { $push: { conversation: newMessage } }
        );
      } else {
        conversation = new Webhook({
          leadId: LEAD_ID,
          receiver: response.to,
          conversation: [newMessage],
          appkey: appKey,
        });

        await conversation.save();
      }

      // Update MessageIndex for the next message
      const nextMessageIndex = (lastMessageIndex + 1) % messages.length;
      await MessageIndex.updateOne({}, { index: nextMessageIndex });

      // Update lead status
      await LeadsForm.updateOne(
        { LEAD_ID: LEAD_ID },
        { $set: { WHATSAPP_STATUS: "Message sent successfully" } }
      );
    }
  } catch (error) {
    console.error("WhatsApp sending failed:", error.message);
    await LeadsForm.updateOne(
      { LEAD_ID: LEAD_ID },
      { $set: { WHATSAPP_STATUS: error.message } }
    );
    errors.push(`WhatsApp message failed: ${error.message}`);
  }

  const trackingId = Math.random().toString(36).substring(7); // Unique ID

  // Email Notifications
  const MailOptions = {
    from: "admin@ilmulQuran.com",
    to: "dafiyahilmulquran@gmail.com",
    replyTo: EMAIL,
    subject: "New Form Submission",
    html: `<h1>New Form Submission</h1>
          <p><strong>Full Name:</strong> ${FULL_NAME}</p>
          <p><strong>Email:</strong> ${EMAIL}</p>
          <p><strong>Phone Number:</strong> ${PHONE_NO}</p>
          <p><strong>Country:</strong> ${COUNTRY}</p>
          <p><strong>State:</strong> ${STATE}</p>
          <p><strong>Time Zone:</strong> ${TIME_ZONE}</p>
          <p><strong>Currency:</strong> ${CURRENCY}</p>
          <p><strong>Remarks:</strong> ${REMARKS}</p>
          <p><strong>IP Address:</strong> ${LEAD_IP}</p>
          <p><strong>Request Form:</strong> ${REQUEST_FORM}</p>
          <img src="https://www.ilmulQuran.com/api/emails/track?trackingId=${trackingId}" width="10" height="10" />

          `,
  };
  const ReplyMailOptions = {
    from: "admin@ilmulQuran.com",
    to: EMAIL,
    subject: "Schedule for Online Quran Classes - ilmulQuran.com",
    html: `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IlmulQuran - Free Trial Class</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <p>Assalam o Alaikum, <strong>${FULL_NAME}</strong>,</p>
            <p>JazakAllah Khair for reaching out to us at <strong>ilmulQuran.com</strong>. We're thrilled to help you begin your Quran learning journey.</p>
            <p>To schedule your free trial class, kindly let us know when you're available for a call so we can set up your appointment. You can let us know your preferred time and whether you'd like us to contact you via phone or WhatsApp. Just reply to this email with the best time and date (and your timezone) for a call.</p>
            <p>Our highly qualified male and female teachers are available 24/7, offering courses such as:</p>
            <ul>
                <li><strong>Quran Classes with Tajweed</strong></li>
                <li><strong>Translation and Memorization</strong></li>
                <li><strong>Taleem ul Islam (Islamic Education)</strong></li>
            </ul>
            <p>Courses are available in multiple languages, and all classes are conducted via Zoom or Teams for your convenience.</p>
            
            <p><strong>To confirm your class, please provide further details by clicking the link below:</strong></p>
            <p><a href="https://ilmulQuran.com/thank-you?id=${id}" style="font-weight: bold; color: #007bff;">Confirm Your Class</a></p>

            <p>Feel free to reply to this email or contact us directly through any of the following:</p>
            <p><strong>Contact Information:</strong></p>
            <ul>
                <li>UK: +44 7862 067920</li>
                <li>AU: +61 480 050048</li>
                <li>US: +1 914 2791693</li>
                <li><strong>Email:</strong> <a href="mailto:admin@ilmulQuran.com">admin@ilmulQuran.com</a></li>
            </ul>
            <p>We look forward to speaking with you and helping you on this blessed path of learning the Quran, InshaAllah.</p>
            <p>Best Regards,<br>
            Zulqarnain Basher<br>
            <strong>ilmulQuran.com Team</strong><br>
            <a href="mailto:admin@ilmulQuran.com">admin@ilmulQuran.com</a>
            </p>
            <img src="https://www.ilmulQuran.com/api/emails/track?trackingId=${trackingId}" width="10" height="10" />
        </body>
        </html>`,
  };

  try {
    const response = await sendEmail(MailOptions);
    // Store admin email in Email collection after successful send
    const adminEmailData = {
      subject: MailOptions.subject,
      text: MailOptions.html,
      isReply: false,
      sender: MailOptions.from,
      receiver: MailOptions.to,
      createdAt: new Date(),
    };

    const FirstResponseEntry = await Email.findOneAndUpdate(
      { leadId: LEAD_ID },
      { $push: { emails: adminEmailData } },
      { upsert: true, new: true }
    );
  } catch (error) {
    console.error("Email to admin failed:", error.message);
    errors.push(`Email to admin failed: ${error.message}`);
  }

  try {
    const response = await sendEmail(ReplyMailOptions);
    // Store reply email in Email collection after successful send
    const replyEmailData = {
      subject: ReplyMailOptions.subject,
      text: ReplyMailOptions.html,
      isReply: true,
      sender: ReplyMailOptions.from,
      receiver: ReplyMailOptions.to,
      createdAt: new Date(),
    };

    const SecondResponseEntry = await Email.findOneAndUpdate(
      { leadId: LEAD_ID },
      { $push: { emails: replyEmailData } },
      { upsert: true, new: true }
    );
  } catch (error) {
    console.error("Reply email failed:", error.message);
    errors.push(`Reply email failed: ${error.message}`);
  }

  const responseMessage =
    errors.length > 0
      ? `Data saved, but there were some issues: ${errors.join(", ")}`
      : "Data saved successfully, and messages sent!";

  return NextResponse.json(
    { message: responseMessage },
    { status: errors.length > 0 ? 400 : 201 }
  );
};

export const handleLeadsAdditionalData = async (req) => {
  try {
    const {
      id,
      LEAD_ID,
      CONTACT_TIME,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
      EMAIL,
      PHONE_NO,
    } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    // Extract P_DAYS and P_TIME_SESSION from CONTACT_TIME
    const extractTimeDetails = (contactTime) => {
      if (!contactTime) return { P_DAYS: "", P_TIME_SESSION: "" };

      const dateObj = new Date(contactTime);
      return {
        P_DAYS: dateObj.toLocaleDateString("en-US", { weekday: "short" }),
        P_TIME_SESSION: dateObj.toTimeString().split(" ")[0],
      };
    };

    const { P_DAYS, P_TIME_SESSION } = extractTimeDetails(CONTACT_TIME);

    const formatDate = (dateString) => {
      if (!dateString) return null;
      const dateObj = new Date(dateString);
      return `${String(dateObj.getDate()).padStart(2, "0")}-${dateObj
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase()}-${dateObj.getFullYear()}`;
    };

    const studentData = {
      CONTACT_TIME,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
    };

    const updateData = {
      $push: { STUDENTS: studentData },
    };

    if (EMAIL) {
      updateData.$set = { ...updateData.$set, EMAIL };
    }
    if (PHONE_NO) {
      updateData.$set = { ...updateData.$set, PHONE_NO };
    }

    let leadsTable = await LeadsForm.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!leadsTable) {
      return NextResponse.json(
        { message: "Lead not found or update failed" },
        { status: 404 }
      );
    }

    const leadInfo = await LeadsForm.findOne({ LEAD_ID });

    if (!leadInfo) {
      return NextResponse.json(
        { message: "Lead information not found" },
        { status: 404 }
      );
    }

    const postData = {
      P_LEAD_ID: LEAD_ID,
      P_STUDENT_NAME: STUDENT_NAME,
      P_COURSE: Array.isArray(PREFERRED_COURSES)
        ? PREFERRED_COURSES.join(",")
        : PREFERRED_COURSES,
      P_CLASS_START_DATE: formatDate(CONTACT_TIME),
      P_CLASS_DURATION: parseInt(CLASS_TIMING),
      P_DESCRIPTION: SPECIAL_REQUIREMENTS,
      P_DAYS,
      P_TIME_SESSION,
    };

    const apiPayload = {
      P_SYNC_ID: leadInfo._id.toString(),
      LEAD_ID: leadInfo.LEAD_ID || "",
      FULL_NAME: leadInfo.FULL_NAME || "",
      EMAIL: leadInfo.EMAIL || "",
      PHONE_NO: leadInfo.PHONE_NO || "",
      REMARKS: `${leadInfo.REMARKS}  Additional student data: ${JSON.stringify(
        postData
      )}`,
      COUNTRY: leadInfo.COUNTRY || "",
      TIME_ZONE: leadInfo.TIME_ZONE || "",
      CURRENCY: leadInfo.CURRENCY || "",
      STATE: leadInfo.STATE || "",
      LEAD_IP: leadInfo.LEAD_IP || "",
      REQUEST_FORM: leadInfo.REQUEST_FORM || "",
      WHATSAPP_STATUS: leadInfo.WHATSAPP_STATUS || "",
      DEVICE: leadInfo.DEVICE || "",
      P_STATUS: leadInfo.P_STATUS || "",
      P_LASTCONTACT: leadInfo.P_LASTCONTACT || "",
      P_DATEASSIGNED: leadInfo.P_DATEASSIGNED || "",
      P_LAST_STATUS_CHANGE: leadInfo.P_LAST_STATUS_CHANGE || "",
      P_DATE_CONVERTED: leadInfo.P_DATE_CONVERTED || "",
      P_LAST_LEAD_STATUS: leadInfo.P_LAST_LEAD_STATUS || "",
      P_ASSIGNED: leadInfo.P_ASSIGNED || "",
    };

    // Non-blocking API call - fire and forget
    const sendToExternalApi = async () => {
      try {
        const response = await axios.post(
          "https://sss.yourfuturecampus.com:8443/apeks/apps/erp/YfcLeads/insertleads",
          apiPayload,
          {
            headers: { "Content-Type": "application/json" },
            timeout: 5000, // 5 seconds timeout
          }
        );
      } catch (error) {
        console.error("Error sending data to external API:", error.message);
        // You can log this error to a monitoring service if needed
      }
    };

    // Start the API call but don't wait for it
    sendToExternalApi();

    // Continue with the rest of the process
    leadsTable = await LeadsForm.findById(id);
    if (!leadsTable || !leadsTable.STUDENTS.length) {
      return NextResponse.json(
        { message: "Lead not found or no students available" },
        { status: 404 }
      );
    }

    const lastStudent = leadsTable.STUDENTS[leadsTable.STUDENTS.length - 1];

    leadsTable = await LeadsForm.findOneAndUpdate(
      { _id: id, "STUDENTS._id": lastStudent._id },
      { $set: { "STUDENTS.$.SYNCED": true } },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Student processed successfully (API call in background)",
        updatedData: leadsTable,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Error in processing your request" },
      { status: 500 }
    );
  }
};

export const handleSecondMessageSending = async (req) => {
  const server = await getCurrentServer();
  let leadId;
  let familyId;
  let response;

  try {
    // Parse the request data
    const { PHONE_NO, STUDENTS } = await req.json();

    // Check if STUDENTS is an array and has elements
    if (!Array.isArray(STUDENTS) || STUDENTS.length === 0) {
      return NextResponse.json(
        { error: "STUDENTS array is empty or not defined." },
        { status: 400 }
      );
    }

    // Extract the last student from the STUDENTS array
    const lastStudent = STUDENTS[STUDENTS.length - 1];

    // Destructure the values from the last student object
    const {
      CONTACT_TIME,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
    } = lastStudent;

    // Check if PHONE_NO and STUDENT_NAME are provided
    if (!PHONE_NO || !STUDENT_NAME) {
      return NextResponse.json(
        { error: "PHONE_NO and STUDENT_NAME are required." },
        { status: 400 }
      );
    }

    // Find familyId and leadId
    const student = await Student.findOne({ phonenumber: PHONE_NO });
    familyId = student?.userid;

    const lead = await LeadsForm.findOne({ PHONE_NO: PHONE_NO });
    leadId = lead?.LEAD_ID;

    // Get appKey using PHONE_NO
    const appKey = getAppKey(PHONE_NO);

    // Create the message content
    const message = `
Assalam o Alaikum ${STUDENT_NAME},

Thank you for providing the additional information to ilmulQuran.com. We appreciate the opportunity to support you in your Quranic education journey.

*Registration Details:*
- *Preferred Contact Time:* ${CONTACT_TIME}
- *Contact Method:* ${CONTACT_METHOD}
- *Student's Name:* ${STUDENT_NAME}
- *Gender:* ${STUDENT_GENDER}
- *Age:* ${STUDENT_AGE}
- *Preferred Course:* ${PREFERRED_COURSES}
- *Class Timing:* ${CLASS_TIMING}
- *Special Requirements:* ${SPECIAL_REQUIREMENTS || "None provided"}

Our certified teachers are available around the clock via Zoom or Microsoft Teams to accommodate your schedule.

Should you need to make any adjustments to your registration details or have additional questions, please don't hesitate to contact us.

We look forward to guiding you in your Quranic studies, InshaAllah.

*Best Regards,*
IlmulQuran Team
[Contact: admin@ilmulQuran.com]
`;

    if (server === "baileys") {
      const baileysPayload = {
        number: PHONE_NO,
        account: appKey,
        message,
      };

      // Updated to use the Vercel proxy endpoint
      response = await axios.post(
        "http://45.76.132.90:3001/send-message",
        baileysPayload
      );
    } else {
      response = await sendWhatsAppMessage(PHONE_NO, appKey, message);
    }

    if (response?.status_code === 200 || response?.status === 200) {
      const newMessage = {
        text: message,
        isReply: true,
        sender: appKey,
        receiver: response.to,
        createdAt: new Date(),
      };

      let conversation;
      if (familyId) {
        conversation = await Webhook.findOne({ familyId });
        if (conversation) {
          await Webhook.updateOne(
            { familyId },
            { $push: { conversation: newMessage } }
          );
        }
      } else if (leadId) {
        conversation = await Webhook.findOne({ leadId });
        if (conversation) {
          await Webhook.updateOne(
            { leadId },
            { $push: { conversation: newMessage } }
          );
        }
      } else {
        conversation = new Webhook({
          familyId,
          leadId,
          receiver: response.to,
          conversation: [newMessage],
          appkey: appKey,
        });

        await conversation.save();
      }

      // Update lead status
      if (leadId) {
        await LeadsForm.updateOne(
          { LEAD_ID: leadId },
          { $set: { WHATSAPP_STATUS: "Message sent successfully" } }
        );
      }
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "WhatsApp message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    // Handle errors and return error response
    console.error("Error in handleSecondMessageSending:", error);
    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
};

// fetch leadsdata
export const fetchLeadsData = async (req) => {
  try {
    // Fetch all leads from the database
    const leads = await LeadsForm.find().sort({ _id: -1 });
    // No filters, just return all leads

    if (leads.length === 0) {
      return NextResponse.json({ message: "No leads found" }, { status: 404 });
    }
    // Return the fetched leads data
    return NextResponse.json(
      {
        message: "Leads fetched successfully",
        data: leads,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { message: "Error fetching leads. Please try again later." },
      { status: 500 }
    );
  }
};

// fetch single leadsdata
export const fetchSingleLeadData = async (req) => {
  try {
    const { id, leadId } = await req.json();

    // Try to find the lead by LEAD_ID first
    let lead = await LeadsForm.findOne({ LEAD_ID: leadId }).lean();
    if (lead?.P_STATUS) {
      const status = await LeadsStatus.findOne({ ID: lead.P_STATUS }).lean();
      lead.P_STATUS = status.NAME || "N/A"; // If no status found, return null
    }
    // If not found, then try to find by _id
    if (!lead) {
      lead = await LeadsForm.findById(id);
    }

    // If no lead is found by either method, return an error
    if (!lead) {
      return NextResponse.json({ message: "No lead found" }, { status: 404 });
    }
    // Manually populate P_STATUS from LeadsStatus based on ID

    // Return the fetched lead data
    return NextResponse.json(
      {
        message: "Leads fetched successfully",
        data: lead,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching lead:", error);
    return NextResponse.json(
      { message: "Error fetching leads. Please try again later." },
      { status: 500 }
    );
  }
};
// fetch single leadsdata
export const fetchSingleLeadProfileData = async (req) => {
  try {
    const { id, leadId } = await req.json();

    // Try to find the lead by LEAD_ID first
    let lead = await LeadsForm.findOne({ LEAD_ID: leadId }).lean();
    if (lead?.P_STATUS) {
      const status = await LeadsStatus.findOne({ ID: lead.P_STATUS }).lean();
      lead.P_STATUS = status.NAME || "N/A"; // If no status found, return null
    }
    // If not found, then try to find by _id
    if (!lead) {
      lead = await LeadsForm.findById(id);
    }

    // If no lead is found by either method, return an error
    if (!lead) {
      return NextResponse.json({ message: "No lead found" }, { status: 404 });
    }
    // Manually populate P_STATUS from LeadsStatus based on ID
    // Mask sensitive fields before sending response
    lead.EMAIL = "***************";
    lead.PHONE_NO = "***************";
    // Return the fetched lead data
    return NextResponse.json(
      {
        message: "Leads fetched successfully",
        data: lead,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching lead:", error);
    return NextResponse.json(
      { message: "Error fetching leads. Please try again later." },
      { status: 500 }
    );
  }
};

export const deleteLead = async (req) => {
  try {
    const { id } = await req.json(); // Parse the incoming request JSON

    if (!id) {
      return new Response(JSON.stringify({ message: "Lead ID is required" }), {
        status: 400,
      });
    }

    // Attempt to find and delete the lead by ID
    const lead = await LeadsForm.findByIdAndDelete(id);

    if (!lead) {
      return new Response(JSON.stringify({ message: "Lead not found" }), {
        status: 404,
      });
    }

    // If lead is deleted, return success message
    return new Response(
      JSON.stringify({ message: "Lead deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting lead:", error);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};

// update leads

export const updateLead = async (req) => {
  try {
    // Parse the incoming JSON body
    const {
      P_SYNC_ID,
      LEAD_ID,
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      TIME_ZONE,
      CURRENCY,
      STATE,
      DEVICE,
      P_STATUS,
      P_LASTCONTACT,
      P_DATEASSIGNED,
      P_LAST_STATUS_CHANGE,
      P_DATE_CONVERTED,
      P_LAST_LEAD_STATUS,
      P_ASSIGNED,
      SOURCE,
    } = await req.json();

    // Ensure P_SYNC_ID is provided
    if (!P_SYNC_ID) {
      return NextResponse.json(
        { message: "P_SYNC_ID is required" },
        { status: 400 }
      );
    }

    // Find the existing lead
    const existingLead = await LeadsForm.findById(P_SYNC_ID);
    if (!existingLead) {
      return NextResponse.json({ message: "Lead not found" }, { status: 404 });
    }

    // Update only fields that are provided in the request
    const updatedFields = {
      LEAD_ID: LEAD_ID || existingLead.LEAD_ID,
      FULL_NAME: FULL_NAME || existingLead.FULL_NAME,
      EMAIL: EMAIL || existingLead.EMAIL,
      PHONE_NO: PHONE_NO || existingLead.PHONE_NO,
      REMARKS: REMARKS || existingLead.REMARKS,
      COUNTRY: COUNTRY || existingLead.COUNTRY,
      TIME_ZONE: TIME_ZONE || existingLead.TIME_ZONE,
      CURRENCY: CURRENCY || existingLead.CURRENCY,
      STATE: STATE || existingLead.STATE,
      DEVICE: DEVICE || existingLead.DEVICE,
      P_STATUS: P_STATUS || existingLead.P_STATUS,
      P_LASTCONTACT: P_LASTCONTACT || existingLead.P_LASTCONTACT,
      P_DATEASSIGNED: P_DATEASSIGNED || existingLead.P_DATEASSIGNED,
      P_LAST_STATUS_CHANGE:
        P_LAST_STATUS_CHANGE || existingLead.P_LAST_STATUS_CHANGE,
      P_DATE_CONVERTED: P_DATE_CONVERTED || existingLead.P_DATE_CONVERTED,
      P_LAST_LEAD_STATUS: P_LAST_LEAD_STATUS || existingLead.P_LAST_LEAD_STATUS,
      P_ASSIGNED: P_ASSIGNED || existingLead.P_ASSIGNED,
      REQUEST_FORM: SOURCE || existingLead.REQUEST_FORM,
    };

    // Perform the update
    const updatedLead = await LeadsForm.findByIdAndUpdate(
      P_SYNC_ID,
      updatedFields,
      { new: true }
    );

    if (!updatedLead) {
      return NextResponse.json({ message: "Update failed" }, { status: 500 });
    }

    // Attempt to sync with Oracle
    if (typeof updatedLead.syncWithOracle === "function") {
      try {
        await updatedLead.syncWithOracle();
      } catch (oracleError) {
        console.error("Oracle sync failed:", oracleError.message);
      }
    } else {
      console.warn("syncWithOracle method is not defined in LeadsForm model.");
    }

    return NextResponse.json(
      { message: "Lead updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { message: "Error in processing your request" },
      { status: 500 }
    );
  }
};

// oracle for submission
export const handleoracleleads = async (req) => {
  const {
    FULL_NAME,
    EMAIL,
    PHONE_NO,
    REMARKS,
    COUNTRY,
    STATE,
    TIME_ZONE,
    CURRENCY,
    LEAD_IP,
    REQUEST_FORM,
    CONTACT_TIME,
    CONTACT_METHOD,
    STUDENT_NAME,
    STUDENT_GENDER,
    STUDENT_AGE,
    PREFERRED_COURSES,
    CLASS_TIMING,
    SPECIAL_REQUIREMENTS,
  } = await req.json();

  // Check for empty fields
  if ([EMAIL, PHONE_NO].some((field) => !field)) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Create new form submission
  let newFormData;
  try {
    newFormData = await LeadsForm.create({
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      TIME_ZONE,
      CURRENCY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      WHATSAPP_STATUS: "no response",
      CONTACT_TIME,
      CONTACT_METHOD,
      STUDENT_NAME,
      STUDENT_GENDER,
      STUDENT_AGE,
      PREFERRED_COURSES,
      CLASS_TIMING,
      SPECIAL_REQUIREMENTS,
    });

    if (!newFormData) throw new Error("Form creation failed.");

    try {
      const response = await newFormData.syncWithOracle();
    } catch (oracleError) {
      console.error("Oracle sync failed:", oracleError.message);
      // The cron job will handle resyncing unsynced leads later
    }
    // Send success response to frontend
    return NextResponse.json(
      {
        message: "Your form has been successfully submitted.",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Something went wrong while submitting your form. Please try again later.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

// search leads

export const searchLeads = async function handler(req) {
  const { query, field } = req.query; // Extract 'query' and 'field' from query params

  if (!query || !field) {
    return res.status(400).json({ message: "Query and field are required" });
  }

  try {
    let searchQuery;

    // Determine the field to search based on the 'field' parameter
    if (field === "LEAD_ID") {
      searchQuery = { LEAD_ID: Number(query) }; // Convert query to a number for LEAD_ID
    } else if (field === "EMAIL" || field === "PHONE_NO") {
      // Use $text search for EMAIL or PHONE_NO
      searchQuery = { $text: { $search: query } };
    } else {
      return res.status(400).json({ message: "Invalid field" });
    }

    // Find the leads based on the search query
    const leads = await LeadsForm.find(searchQuery);

    if (leads.length === 0) {
      return res.status(404).json({ message: "No leads found" });
    }

    // Return the found leads
    res.status(200).json({ leads });
  } catch (error) {
    console.error("Error searching leads:", error);
    res.status(500).json({ message: "Error searching the database" });
  }
};

// handle webhook leads

export const handleWebhookLeads = async (req) => {
  try {
    const {
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      TIME_ZONE,
      CURRENCY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      conversationId,
    } = await req.json();

    // Create new form submission
    const newFormData = await LeadsForm.create({
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      TIME_ZONE,
      CURRENCY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
      WHATSAPP_STATUS: "no response",
    });

    if (!newFormData) throw new Error("Form creation failed.");

    // Update conversation if conversationId exists
    if (conversationId) {
      const conversation = await Webhook.findOne({ conversationId });

      if (conversation) {
        conversation.isVerified = true;
        conversation.leadId = newFormData.LEAD_ID;
        await conversation.save();

        console.log(`Conversation ID ${conversation._id} updated to verified.`);
      } else {
        console.log(`No conversations found for ID: ${conversationId}`);
      }
    }

    // Sync data with Oracle
    try {
      await newFormData.syncWithOracle();
      console.log("Data successfully synced with Oracle.");
    } catch (oracleError) {
      console.error("Oracle sync failed:", oracleError.message);
      // Optionally handle failed syncs here
    }

    // Send success response
    return NextResponse.json(
      {
        message: "Your form has been successfully submitted.",
        success: true,
        data: {
          id: newFormData._id,
          LEAD_ID: newFormData.LEAD_ID,
          FULL_NAME,
          EMAIL,
          PHONE_NO,
          REMARKS,
          COUNTRY,
          TIME_ZONE,
          CURRENCY,
          STATE,
          LEAD_IP,
          REQUEST_FORM,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling webhook leads:", error.message);

    return NextResponse.json(
      {
        message:
          "An error occurred while submitting your form. Please try again.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

export const groupLeads = async () => {
  try {
    // Fetch all leads
    const allLeads = await LeadsForm.find(
      {},
      { EMAIL: 1, PHONE_NO: 1, LEAD_ID: 1 }
    );

    // Create a map to group leads by EMAIL and PHONE_NO
    const leadGroups = new Map();

    for (const lead of allLeads) {
      const key = `${lead.EMAIL}_${lead.PHONE_NO}`;
      if (!leadGroups.has(key)) {
        leadGroups.set(key, { count: 0, leadIds: [] });
      }
      leadGroups.get(key).count += 1;
      leadGroups.get(key).leadIds.push(lead.LEAD_ID);
    }

    // Process each group and update duplicates
    for (const [key, value] of leadGroups) {
      if (value.count > 1) {
        const [email, phone] = key.split("_");

        await LeadsForm.updateMany(
          { EMAIL: email, PHONE_NO: phone },
          {
            $set: {
              duplicate_count: value.count,
              duplicate_lead_ids: value.leadIds,
            },
          }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Duplicate leads grouped and updated successfully.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error grouping duplicate leads.",
        error: error.message,
      },
      { status: 500 }
    );
  }
};

export const fetchRoleBasedLeads = async (req) => {
  try {
    const { page, pageSize, secreteCode } = await req.json();
    // Check if the user is authenticated
    // NOTE: You need to implement proper authentication middleware to populate `req.user`
    if (!req.user) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Find the user in the database
    const user = await User.findById(req.user._id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const role_id = user.role_id;

    const skip = (page - 1) * pageSize;
    if (role_id == 12 || role_id == 13) {
      // Fetch leads with pagination
      const leads = await LeadsForm.find()
        .sort({
          updatedAt: -1,
          _id: -1,
        }) // Sort by updated_at first, then by _id
        .skip(skip)
        .limit(pageSize);

      if (!leads || leads.length === 0) {
        // Return empty data and total leads count if no leads found
        return NextResponse.json({ data: [], total: 0 }, { status: 200 });
      }
      let maskedLeads;
      if (Boolean(user.canViewSensitiveData)) {
        maskedLeads = leads.map((lead) => ({
          ...lead.toObject(),
          VISIBLE: true,
        }));
      } else {
        // Mask the EMAIL and PHONE_NO fields
        maskedLeads = leads.map((lead) => ({
          ...lead.toObject(),
          EMAIL: "***********",
          PHONE_NO: "***********",
          VISIBLE: false,
        }));
      }

      // Get the total count of leads to calculate total pages
      const totalLeads = await LeadsForm.countDocuments();

      // Return the masked leads and total count
      return NextResponse.json(
        { data: maskedLeads, total: totalLeads },
        { status: 200 }
      );
    } else {
      const staffid = user.staffid;

      // Fetch leads with pagination
      const leads = await LeadsForm.find({
        P_ASSIGNED: staffid,
      })
        .sort({
          updatedAt: -1,
          _id: -1,
        }) // Sort by updated_at first, then by _id
        .skip(skip)
        .limit(pageSize);

      if (!leads || leads.length === 0) {
        // Return empty data and total leads count if no leads found
        return NextResponse.json({ data: [], total: 0 }, { status: 200 });
      }

      // Mask the EMAIL and PHONE_NO fields

      if (Boolean(user.canViewSensitiveData)) {
        maskedLeads = leads.map((lead) => ({
          ...lead.toObject(),
          VISIBLE: true,
        }));
      } else {
        // Mask the EMAIL and PHONE_NO fields
        maskedLeads = leads.map((lead) => ({
          ...lead.toObject(),
          EMAIL: "***********",
          PHONE_NO: "***********",
          VISIBLE: false,
        }));
      }

      // Get the total count of leads to calculate total pages

      const totalLeads = LeadsForm.countDocuments({ P_ASSIGNED: staffid });

      // Return the masked leads and total count
      return NextResponse.json(
        { data: maskedLeads, total: totalLeads },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching leads" },
      { status: 500 }
    );
  }
};

export const searchRoleBasedLeads = async (req) => {
  try {
    // Extract data from the request body

    const { query, field, skip = 0, pageSize = 10 } = await req.json();

    // Check if query and field are provided
    if (!query || !field) {
      return NextResponse.json(
        { message: "Query and field are required" },
        { status: 400 }
      );
    }

    // Check if the user is authenticated
    if (!req.user) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Find the user in the database
    const user = await User.findById(req.user._id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const role_id = user.role_id;

    let searchQuery = {};

    // Build the search query
    if (field === "LEAD_ID" || field === "REQUEST_FORM") {
      searchQuery = { [field]: Number(query) }; // Convert query to number
    } else if (
      [
        "FULL_NAME",
        "EMAIL",
        "PHONE_NO",
        "COUNTRY",
        "STATE",
        "LEAD_IP",
      ].includes(field)
    ) {
      searchQuery = {
        [field]: { $regex: query, $options: "i" }, // Case-insensitive search
      };
    } else {
      return NextResponse.json({ message: "Invalid field" }, { status: 400 });
    }

    let leads;
    let maskedLeads;

    if (role_id === 12 || role_id === 13) {
      // Fetch leads with pagination for admin roles
      leads = await LeadsForm.find(searchQuery)
        .sort({ updatedAt: -1, _id: -1 })
        .skip(Number(skip))
        .limit(Number(pageSize));

      if (!leads || leads.length === 0) {
        return NextResponse.json({ data: [], total: 0 }, { status: 200 });
      }

      maskedLeads = leads; // Add masking logic here if needed
    } else {
      const staffid = user.staffid;

      // Fetch leads for staff users with pagination
      leads = await LeadsForm.find({
        ...searchQuery,
        P_ASSIGNED: staffid,
      })
        .sort({ updatedAt: -1, _id: -1 })
        .skip(Number(skip))
        .limit(Number(pageSize));

      if (!leads || leads.length === 0) {
        return NextResponse.json({ data: [], total: 0 }, { status: 200 });
      }

      maskedLeads = leads; // Add masking logic here if needed
    }

    // Get the total count of leads to calculate total pages
    const totalLeads = await LeadsForm.countDocuments(searchQuery);

    // Return the masked leads and total count
    return NextResponse.json(
      { data: maskedLeads, total: totalLeads },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error searching leads:", error);
    return NextResponse.json(
      { message: "Error searching the database" },
      { status: 500 }
    );
  }
};
