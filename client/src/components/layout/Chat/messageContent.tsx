import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { chatSection } from "@/recoil/atoms";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Socket } from "socket.io-client";

export default function MessageContent({ socket, data, receiver }: { socket: Socket, data: number, receiver: number | undefined }) {

    const [chats, setChats] = useRecoilState(chatSection);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMessage = (mes: string) => {
            setChats((p: any) => {
                const hi = {
                    ...p,
                    messages: [...p.messages, { data: mes, senderID: receiver }]
                }
                return hi;
            });
        }
        socket.on('message', handleMessage);
        return () => {
            socket.off('message', handleMessage);
        };
    });

    useEffect(() => {
        if (divRef.current) {
            const value = divRef.current.scrollHeight;
            divRef.current.scrollTop = value;
        }
    },);

    return (
        <div ref={divRef} className=" overflow-y-scroll overflow-x-hidden  flex-1 px-4 py-1">
            {(chats.messages).map((c, i) => (
                <React.Fragment key={i}>
                    {c.senderID != data ?
                        <div className="flex items-end gap-2 mb-4">
                            <Avatar
                                className={`ring-2
                    dark:ring-gray-700 dark:ring-offset-black
                    ring-gray-300 ring-offset-white
                  ring-offset-2`}
                            >
                                <AvatarImage src={`https://res.cloudinary.com/dd8vmqvqp/image/upload/v1741770568/profile-default_nhnefp.svg`} />
                                <AvatarFallback>YOU</AvatarFallback>
                            </Avatar>
                            <div
                                className={`
                    dark:bg-gradient-to-br from-gray-800 to-gray-900
                    bg-white
                    rounded-2xl p-3 max-w-[70%] shadow flex flex-col min-h-fit`}
                            >
                                <p className={"dark:text-gray-300 text-gray-800"}>
                                    {c.data}
                                </p>
                                {/* <span
                                    className={`text-xs dark:text-gray-500 text-gray-600
                     mt-1 block`}
                                >
                                    {new Date().toISOString().substring(11, 16)}
                                </span> */}
                            </div>
                        </div> :
                        <div className="flex items-end gap-2 mb-4 justify-end">
                            <div
                                className={`
                    dark:bg-gradient-to-br from-gray-700 to-gray-800
                    bg-[#5c75b3] rounded-2xl p-3 max-w-[70%] shadow flex flex-col min-h-fit`}
                            >
                                <p className={"dark:text-gray-200 text-white"}>
                                    {c.data}
                                </p>
                                {/* <span
                                    className={`text-xs dark:text-gray-500 text-blue-100 mt-1 block`}
                                >
                                    {new Date().toISOString().substring(11, 16)}
                                </span> */}
                            </div>
                            <Avatar
                                className={`ring-2
                    dark:ring-gray-700 dark:ring-offset-black
                    ring-gray-300 ring-offset-white
                   ring-offset-2`}
                            >
                                <AvatarImage src="" />
                                <AvatarFallback>ME</AvatarFallback>
                            </Avatar>
                        </div>

                    }


                </React.Fragment>
            ))}
        </div>
    );
}
