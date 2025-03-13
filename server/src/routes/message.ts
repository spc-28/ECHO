import { Router } from "express";
import { getMessage } from "../controllers/message";

export const messageRouter = Router();

messageRouter.get('/:id',getMessage);