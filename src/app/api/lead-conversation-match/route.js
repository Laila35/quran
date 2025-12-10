import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import LeadsForm from "@/models/LeadsForm";
import Webhook from "@/models/whatsappWebhookSchema";

export async function POST(req) {
  try {
    // Connect to MongoDB using Mongoose
    await connectDB();

    // Fetch all leads
    const leads = await LeadsForm.find({});

    // Fetch all WhatsApp chats
    const whatsappChats = await Webhook.find({});

    for (const lead of leads) {
      const { PHONE_NO, LEAD_ID } = lead;

      for (const chat of whatsappChats) {
        const { conversation } = chat;

        // Check only the first message in the conversation array
        if (conversation.length > 0) {
          const firstMessage = conversation[0];
          const { isReply, sender, receiver } = firstMessage;

          // Match PHONE_NO with sender or receiver based on isReply
          if (
            (isReply && receiver === PHONE_NO) ||
            (!isReply && sender === PHONE_NO)
          ) {
            // Update the leadId field in the WhatsappChat document
            chat.leadId = LEAD_ID;

            // Save the updated document
            const response = await chat.save();
            // console.log("response is", response);

            break; // Move to the next chat after the first match
          }
        }
      }
    }

    return NextResponse.json(
      { message: "Lead IDs updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating lead IDs:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
