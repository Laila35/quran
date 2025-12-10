import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Webhook from "@/models/whatsappWebhookSchema";
import axios from "axios";

const formatDateInTimeZone = (date, timeZone = "Asia/Karachi") => {
  return new Date(date).toLocaleString("en-US", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

export async function POST(req) {
  try {
    // Connect to MongoDB using Mongoose
    await connectDB();

    try {
      // Fetch unsynced logs from the database
      const logs = await Webhook.find({});

      // Loop through each log
      for (const log of logs) {
        // Check if the log has a conversation array
        if (!log.conversation || log.conversation.length === 0) {
          console.error("No conversation data available for log:", log._id);
          continue;
        }

        // Loop through each message in the conversation array
        for (const message of log.conversation) {
          const data = {
            CONVERSATION_ID: log.conversationId,
            LEAD_ID: log.leadId,
            FAMILY_ID: log.familyId,
            TEXT: message.text,
            IS_REPLY: message.isReply ? "yes" : "no",
            SENDER: message.isReply ? message.sender : "********",
            RECEIVER: message.isReply ? "*******" : message.receiver,
            CREATED_AT: formatDateInTimeZone(log.createdAt),
            SENDER_TIMESTAMP: message.senderTimestamp,
            RECIPIENT_TIMESTAMP: message.recipientTimestamp,
            SENDER_KEY_HASH: message.senderKeyHash,
            RECIPIENT_KEY_HASH: message.recipientKeyHash,
            MESSAGE_SECRET: message.messageSecret,
            CONVERSATION_CREATED_AT: formatDateInTimeZone(message.createdAt),
            CONVERSATION_UPDATED_AT: formatDateInTimeZone(
              log.updatedAt || message.createdAt
            ),
            C_ID: log._id,
          };
          console.log("the data is", data);

          try {
            // Send the data to the Oracle API
            const response = await axios.post(
              "https://sss.yourfuturecampus.com:8443/apeks/apps/erp/whatsapp/insert/",
              data
            );

            // If the request was successful, mark the log as synced
            if (response.status === 200) {
              log.syncedToOracle = true; // Update the synced status
              await log.save(); // Save the updated status to the database
              console.log(
                `Message from log with LEAD_ID ${log.leadId} successfully synced to Oracle.`
              );
            } else {
              console.log(
                `Failed to sync message from log with LEAD_ID ${log.leadId}.`
              );
            }
          } catch (error) {
            console.error(
              `Error syncing message from log with LEAD_ID ${log.leadId}:`,
              error.message
            );
          }
        }
      }

      // Return the result of the operation
      return NextResponse.json({
        success: true,
        message: "Logs processed and synced where applicable",
      });
    } catch (error) {
      console.error("Error processing unsynced logs:", error.message);
      return NextResponse.json({
        success: false,
        message: "Error processing unsynced logs",
      });
    }
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    return NextResponse.json({
      success: false,
      message: "Error connecting to the database",
    });
  }
}
