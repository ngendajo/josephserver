import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
  postid: { type: String, required: true },
  comment: { type: String, required: true },
});

export default mongoose.model("comments", commentsSchema);