import express from "express";
import {
  post,
  findposts,
  deleteposts,
  updateposts,
} from "../controllers/posts.js";
import {
  registerComments,
  findComments,
  deleteComments,
} from "../controllers/comments.js";


const router = express.Router();

router.post("/registercomments", registerComments);
router.get("/findcomments", findComments);
router.delete("/deletecomments/:userId", deleteComments);
router.post("/post", post);
router.get("/posts", findposts);
router.delete("/dpost/:postId", deleteposts);
router.patch("/upost/:postId", updateposts);

export default router;