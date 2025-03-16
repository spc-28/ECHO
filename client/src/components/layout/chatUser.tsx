import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import axios from 'axios';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { chatID, chatMobile, chatReceiver, chatSection, chatSelected, fetchLoader, menuSelect } from "@/recoil/atoms";
import { Socket } from "socket.io-client";

export default function ChatUser({
    i,
    id,
    userId,
    socket,
    roomMap,
    users

}: {
    i: number;
    id: number;
    userId: number;
    socket: Socket;
    roomMap: Map<number, string>;
    users?: { firstName: string, lastName: string, id: number }

}) {

    const [data, setData] = useState<object>();
    const [loading, setloading] = useState(true);
    const setChats = useSetRecoilState(chatSection);
    const userRef = useRef<[{ firstName: string, lastName: string, id: number }] | []>();
    const setMobile = useSetRecoilState(chatMobile);
    const [selected, setSelected] = useRecoilState(chatSelected);
    const receiver = useRecoilValue(chatReceiver);
    const setCid = useSetRecoilState(chatID);
    const select = useRecoilValue(menuSelect);
    const setFetch = useSetRecoilState(fetchLoader);

    useEffect(() => {
        const fetch = async () => {
            setFetch(true);
            const res = await axios.get(`https://echo-q70g.onrender.com/api/v1/chat/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCid(id);
            setData(res.data);
            userRef.current = (res.data.users).filter((e: { id: number }) => e.id !== userId);
            setloading(false);
            setFetch(false);
        }
        if (select != 2 && select != 3) {
            fetch();
        }
        if (select === 2 && users?.id !== userId) {
            userRef.current = users ? [users] : [];
        }
        setloading(false);

    }, [selected])


    useEffect(() => {
        if (selected != i) {
            const r = roomMap.get(receiver as number);
            socket.emit('leaveRoom', { roomName: r })
        }
    }, [selected])


    if (loading) {
        return (<div className=" flex h-full">Loading...</div>)
    }

    if (userRef.current) {
        return (
            <div
                onClick={async () => {
                    setSelected(i);
                    const waitChats = new Promise((resolve, reject) => {
                        try {

                            setChats(data);
                            resolve("Done");
                        } catch (error) {
                            reject(error);
                        }
                    });
                    await waitChats;
                    if (window.innerWidth < 600) {
                        setMobile({ screen: false, tab: true });
                    }
                }}
                className={`flex items-center gap-3 p-4
          hover:bg-gray-100
          dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-gray-900
          cursor-pointer transition-colors duration-200 ${i == selected ? "dark:pointer-events-none dark:bg-gradient-to-r from-gray-800 to-gray-900 bg-gray-100 pointer-events-none" : ""}`}
            >
                <Avatar
                    className={`ring-2 dark:ring-gray-700 dark:ring-offset-black
            ring-gray-300 ring-offset-white
        ring-offset-2`}
                >
                    <AvatarImage src={`https://res.cloudinary.com/dd8vmqvqp/image/upload/v1741770568/profile-default_nhnefp.svg`} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                    <p
                        className={`text-sm font-medium dark:text-gray-300 text-gray-800 truncate`}
                    >
                        {userRef.current[0]?.firstName + " " + userRef.current[0]?.lastName}
                    </p>
                    {/* <p
                        className={`text-xs dark:text-gray-500 text-gray-600
          truncate`}
                    >
                        Last message...
                    </p> */}
                </div>
                {/* <span
        className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}
      >
        2m
      </span> */}
            </div>
        );
    }
}
