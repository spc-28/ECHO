import { Contact, FileText, Film, Paperclip, Send, Smile } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Image } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { Socket } from "socket.io-client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatID, chatSection } from "@/recoil/atoms";



export default function MessageInput({ socket, room, data, receiver }: { socket: Socket, room: string, data: number, receiver: number | undefined }) {
  const [message, setMessage] = useState("");
  const setChats = useSetRecoilState(chatSection);
  const cid = useRecoilValue(chatID);

  const handleSend = () => {
    if (message) {
      socket.emit('message', { roomName: room, message: message, sender: data, receiver, cid })
      setChats((p: any) => {
        const hi = {
          ...p,
          messages: [...p.messages, { data: message, senderID: data }]
        }
        return hi;
      });

      setMessage("");
    }
  }

  return (
    <div className={`p-4 dark:bg-gradient-to-r from-gray-900 to-black bg-white border-t  dark:border-gray-800 border-gray-200`}>
      <form className="flex items-center gap-2">
        <DropdownMenu >
          <DropdownMenuTrigger>
            <Button type="button" variant="ghost" size="icon" className={`dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200`}>
              <Paperclip className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`ml-20 dark:bg-gray-900 dark:text-zinc-100 bg-white text-zinc-900`}>
            <DropdownMenuItem className="text-lg"><Image />Photo</DropdownMenuItem>
            <DropdownMenuItem className="text-lg" ><Film />Video</DropdownMenuItem>
            <DropdownMenuItem className="text-lg"><FileText />Document</DropdownMenuItem>
            <DropdownMenuItem className="text-lg"><Contact />Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Type a message..." className={`flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 bg-gray-100 border-gray-300 text-gray-800 rounded-xl`} />
        <DropdownMenu >
          <DropdownMenuTrigger>
            <Button type="button" variant="ghost" size="icon" className={`dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200`}>
              <Smile className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`min-w-0 dark:bg-gray-900 dark:text-zinc-100 bg-white text-zinc-900`}>
            {["\u{1F601}", "\u{1F602}", "\u{1F60D}", "\u{1F604}", "\u{1F612}", "\u{1F621}", "\u{1F605}", "\u{1F61C}"].map((i, index)=><DropdownMenuItem key={index} onClick={()=>setMessage((p)=>p+=i)} className="text-xl">{i}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={handleSend} type="button" className={`dark:bg-gradient-to-r from-gray-700 to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:text-gray-200 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200`}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}