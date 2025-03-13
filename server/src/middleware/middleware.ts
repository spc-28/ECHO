import { NextFunction, Request, Response } from "express";
import 'dotenv/config'
import jwt from "jsonwebtoken";

export interface CustomeRequest extends Request {
    userID: string
}


const authMiddlware = (req:CustomeRequest,res:Response,next:NextFunction)=>{
    const authToken = req.headers.authorization || req.headers.Authorization;

    if(!authToken || !((authToken as string).startsWith('Bearer '))){
        return res.status(401).json({
            message: "Unauthorised Access"
        })
    }

    const token = (authToken as string).split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.userID = String(decoded);
        next();
    }
    catch(e){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }

}

export default authMiddlware;