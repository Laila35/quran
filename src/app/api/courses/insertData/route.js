import { handleCourseInsertion } from "../../../../controllers/coursecontroller";
import connectDB from "@/config/db";

export async function POST(req) {
  await connectDB();
  return handleCourseInsertion(req);
}
