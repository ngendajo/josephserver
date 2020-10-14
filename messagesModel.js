import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  likes: { type: Number, required: true },
  subscribes: { type: Number, required: true },
});

export default mongoose.model("messages", userSchema);