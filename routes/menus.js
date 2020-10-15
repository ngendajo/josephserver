import express from "express";
import {
  register,
  findmessages,
  deletemessages,
  updatemessages,
} from "../controllers/messages.js";
import {
  registerposts,
  findposts,
  deleteposts,
  updateposts,
} from "../controllers/posts.js";
import {
  registerComments,
  findComments,
  deleteComments,
} from "../controllers/comments.js";
import {
  registeradmin,
  findadmin,
  deleteadmin,
  updateadmin,
} from "../controllers/admins.js";

const router = express.Router();

router.post("/register", register);
router.get("/findmessages", findmessages);
router.delete("/deletemessages/:userId", deletemessages);
router.patch("/updatemessages/:userId", updatemessages);
router.post("/registercomments", registerComments);
router.get("/findcomments", findComments);
router.delete("/deletecomments/:userId", deleteComments);
router.post("/registerposts", registerposts);
router.get("/findposts", findposts);
router.delete("/deleteposts/:userId", deleteposts);
router.patch("/updateposts/:userId", updateposts);
router.post("/registeradmin", registeradmin);
router.get("/findadmin", findadmin);
router.delete("/deleteadmin/:userId", deleteadmin);
router.patch("/updateadmin/:userId", updateadmin);

export default router;