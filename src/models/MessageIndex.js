import mongoose from "mongoose";

const MessageIndexSchema = new mongoose.Schema(
  {
    index: {
      type: Number,
      required: true, // Ensures `index` is always provided
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.MessageIndex ||
  mongoose.model("MessageIndex", MessageIndexSchema);
