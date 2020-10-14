import express from "express";
import {
  register,
  findmessages,
  deletemessages,
  updatemessages,
} from "../controllers/messages.js";

const router = express.Router();

router.post("/register", register);
router.get("/findmessages", findmessages);
router.delete("/deletemessages/:userId", deletemessages);
router.patch("/updatemessages/:userId", updatemessages);

export default router;