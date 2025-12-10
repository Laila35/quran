// models/ServerConfig.js
import mongoose from "mongoose";

const dynamicSchema = new mongoose.Schema({}, { strict: false });

const ServerConfig =
  mongoose.models.serverconfigs ||
  mongoose.model("serverconfigs", dynamicSchema);

export default ServerConfig;
