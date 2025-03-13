import { Request, Response } from "express";
import prisma from "../scripts/db";

export const getMessage = async (req:Request,res:Response)=>{
    const id = Number(req.params.id); 
    
    const message = await prisma.message.findUnique({
        where:{
            id
        },
        include:{
            chat:true
        }
    })
    
    res.json(message);
}
