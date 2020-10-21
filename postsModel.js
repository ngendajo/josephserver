import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt:{ type: String, required: true },
});


export default mongoose.model("posts", postsSchema);