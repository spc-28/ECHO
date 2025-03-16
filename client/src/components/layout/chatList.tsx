import { Search } from "lucide-react";
import { Input } from "../ui/input";
import ChatUser from "./chatUser";
import { DataType } from "@/pages/dashboard";
import { useRecoilValue } from "recoil";
import { chatMobile, menuSelect } from "@/recoil/atoms";
import { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatList({ data, socket, roomMap }: { data: DataType, socket: Socket, roomMap: Map<number, string> }) {
    const mobile = useRecoilValue(chatMobile);
    const select = useRecoilValue(menuSelect);
    const [users, setUsers] = useState<[{ firstName: string, lastName: string, id: number }]>();

    const UsersList = () => (
        <div className="h-[calc(100vh-80px)] overflow-scroll">
            {(data.chats).map((e, i) => (
                <ChatUser
                    socket={socket}
                    key={i}
                    id={e.id}
                    userId={data.id}
                    i={i}
                    roomMap={roomMap}
                />))}
        </div>
    );

    // const UsersList1 = () => (
    //     <div className="h-[calc(100vh-80px)] overflow-scroll">
    //         {(users)?.map((e, i) => (
    //             <ChatUser
    //                 socket={socket}
    //                 key={i}
    //                 id={e.id}
    //                 userId={data.id}
    //                 i={i}
    //                 roomMap={roomMap}
    //                 users={e}
    //             />
    //         ))}
    //     </div>
    // );
    
    useEffect(() => {
        async function allUsers() {
            const res = await axios.get('https://echo-q70g.onrender.com/api/v1/user/allUsers', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setUsers(res.data);
        }
        if (select == 2) {
            allUsers();
        }

    }, [select])

    return (
        <div
            className={`w-[22rem] ${mobile.screen ? "" : "max-sm:hidden"}
        dark:bg-gradient-to-b from-gray-900 to-black  bg-white
       border-r dark:border-gray-800 border-gray-200`}
        >
            <div className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search chats"
                        className={`pl-10
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300
                bg-gray-100 border-gray-300 text-gray-800
                rounded-xl`}
                    ></Input>
                </div>
            </div>
            {select == 1 ? <UsersList /> : <div className="flex items-center h-full pb-12 justify-center">Comming Soon!</div>}
        </div>
    );
}

