// src/app/api/leadsform/route.js
import connectDB from "../../../config/db";
import { handleLeadsSubmit } from "@/controllers/leadsController";

export async function POST(req) {
  await connectDB();
  const response = await handleLeadsSubmit(req);

  // Add CORS headers to the response
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export async function OPTIONS() {
  // Handle preflight requests
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
