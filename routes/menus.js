import express from "express";
import {
  post,
  findposts,
  getOnePost,
  deleteposts,
  updateposts,
} from "../controllers/posts.js";
import {
  createComment,
  getAllCommentsOnPost,
  like,
  deleteComments,
} from "../controllers/comments.js";



const router = express.Router();

router.route('/:postId/comment').post(createComment);
router.route('/:postId/allComments').get(getAllCommentsOnPost);
router.delete("/dcomments/:cid", deleteComments);
router.post("/post", post);
router.get("/posts", findposts);
router.get("/post1/:postId", getOnePost);
router.delete("/dpost/:postId", deleteposts);
router.patch("/upost/:postId", updateposts);
router.put("/like/:postId",like);

export default router;