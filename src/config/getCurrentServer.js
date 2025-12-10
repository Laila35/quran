// utils/getCurrentServer.js
import ServerConfig from "@/models/WhatsappServerSchema";
import connectDB from "./db";

export async function getCurrentServer() {
  await connectDB();
  const config = await ServerConfig.findOne();
  return config?.selectedServer || "baileys";
}
