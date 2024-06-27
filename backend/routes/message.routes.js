import protectRoute from "../middleware/protectRoute.js";
import {getMessages, sendMessage} from "../controllers/messageController.js"
import express from "express";

const router = express.Router()

router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)

export default router