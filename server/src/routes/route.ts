import { Router } from "express";
import { userRouter } from "./user";
import { chatRouter } from "./chat";
import { messageRouter } from "./message";

export const router = Router();

router.use('/user', userRouter);
router.use('/chat', chatRouter);
router.use('/message', messageRouter );

