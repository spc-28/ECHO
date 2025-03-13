import { Router } from "express";
import authMiddlware from "../middleware/middleware";
import { allUsers, createUser, loginUser, userInfo } from "../controllers/user";

export const userRouter = Router();



userRouter.get('/info',authMiddlware as any, userInfo as any); // see for this any
userRouter.post('/createUser', createUser as any );
userRouter.post('/loginUser', loginUser as any );
userRouter.get('/allUsers',authMiddlware as any, allUsers as any);
