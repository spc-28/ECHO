import { Response } from "express";
import prisma from "../scripts/db";
import { CustomeRequest } from "../middleware/middleware";

export const getChat = async (req:CustomeRequest, res:Response)=>{
    const id = req.params.id;

    try{
        const chat = await prisma.chat.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            messages:true,
            users:true
        }
    })

    return res.status(200).json(chat);
    }
    catch(e){
        return res.status(500).json({
            message: e
        });
    }
    
}