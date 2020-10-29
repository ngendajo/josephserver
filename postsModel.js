import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt:{ type: String, required: true },
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comments' }],
});


export default mongoose.model("posts", postsSchema);