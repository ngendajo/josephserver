import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
  comment: { type: String, required: true },
});

export default mongoose.model("comments", commentsSchema);