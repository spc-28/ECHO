import express from 'express';;
import 'dotenv/config';
import cors from 'cors';
import { router } from './routes/route';
import { Server } from "socket.io";
import prisma from './scripts/db';
import { Type } from '@prisma/client';

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/v1", router);

const server = app.listen(process.env.PORT, () => console.log(`Listening to Port:${process.env.PORT}`));

const io = new Server(server, {
    connectionStateRecovery: {},
    cors: {
        origin: "http://localhost:5173"
    }
});

const users = new Map();

io.on('connection', (socket) => {
    console.log("user connected");

    //socket.join(`chat${socket.handshake.query.id}`);

    socket.on("self", (username) => {
        users.set(username, socket.id);
    })

    socket.on("register", (data) => {

        const user1 = data.username;
        const user2 = data.receiver;

        const roomName = [user1, user2].sort().join('_');
        socket.join(roomName);
        const otherSocketID = users.get(user2);

        if (otherSocketID) {
            io.sockets.sockets.get(otherSocketID)?.join(roomName);
        }

        socket.emit('chatCreated', { roomName });
    })

    socket.on('message', async (data) => {
        await prisma.message.create({
            data: {
                senderID: data.sender,
                chatID: data.cid,
                dataType: Type.TEXT,
                data: data.message
            }
        });
        socket.to(data.roomName).emit('message', data.message);
    })

    socket.on('disconnect', () => {
        console.log("user disconnected");
    })

    socket.on('leaveRoom', (data) => {
        socket.leave(data.roomName);
    })

})