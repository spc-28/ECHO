import { Router } from "express";
import { getChat } from "../controllers/chat";
import authMiddlware from "../middleware/middleware";

export const chatRouter = Router();

chatRouter.get('/:id',authMiddlware as any, getChat as any)