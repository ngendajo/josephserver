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

router.get('/test',(req,res)=>{
  res.render("posts/addOrEdit",{
    viewTitle:"Add and updated article"
  });
});
router.post("/comment", registerComments);
router.get("/comments", findComments);
router.delete("/dcomments/:cid", deleteComments);
router.post("/post", post);
router.get("/posts", findposts);
router.delete("/dpost/:postId", deleteposts);
router.patch("/upost/:postId", updateposts);

export default router;