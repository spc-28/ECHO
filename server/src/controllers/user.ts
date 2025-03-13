import { Response } from "express"
import { CustomeRequest } from "../middleware/middleware"
import prisma from "../scripts/db";
import jwt from "jsonwebtoken";

export const userInfo = async (req: CustomeRequest, res:Response) =>{
    const id = Number(req.userID);
    try{
        const user = await prisma.user.findUnique({
            where:{
                id
            },
            include:{
                chats:true
            }
        });
        res.status(200).json(user);
    }
    catch(e){
        res.status(500).json({
            message: e
        });
    }
    
}

export const createUser = async (req: CustomeRequest, res:Response) =>{
    const body = req.body;
    try{
        const user = await prisma.user.create({
        data:{
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password:body.password

        }
    })
    const token = jwt.sign(String(user.id),process.env.JWT_SECRET as string);

    return res.status(200).json({
        token,
        id:user?.id
    })
    }
    catch(e){
        return res.status(500).json({
            message: e
        })
    }

}

export const loginUser = async (req: CustomeRequest, res:Response)=>{
    const {email, password} = req.body;
    try{
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });
        
        if(user?.password !== password){
            throw new Error("Incorrect Credentials");
        }
        const token = jwt.sign(String(user?.id),process.env.JWT_SECRET as string);
    
        return res.status(200).json({
            token,
            id:user?.id
        })
    }
    catch(e){
        return res.status(500).json({
            message:e
        })
    }
}

export const allUsers = async (req: CustomeRequest, res:Response) => {
    try{
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    }
    catch(e){
        return res.status(500).json({
            message:e
        })
    }

}