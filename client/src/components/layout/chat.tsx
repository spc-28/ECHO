import MessageContent from "./Chat/messageContent";
import MessageInput from "./Chat/messageInput";
import MessageHeader from "./Chat/messageHeader";
import { Socket } from "socket.io-client";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatMobile, chatReceiver, chatSection, chatSelected } from "@/recoil/atoms";
import { DataType } from "@/pages/dashboard";
import { useEffect, useRef } from "react";

export default function Chat({ data, socket, roomMap }: { data: DataType, socket: Socket, roomMap: Map<number, string> }) {
	const chat = useRecoilValue(chatSection);
	const selected = useRecoilValue(chatSelected);
	const mobile = useRecoilValue(chatMobile);
	const room = useRef("");
	const [receiver, setReceiver] = useRecoilState(chatReceiver);

	useEffect(() => {
		const fun = async () => {
			const receiver = (chat.users.find((e) => e.id != data.id))?.id;

			if (receiver != -2) {
				socket.emit('self', data.id);

				socket.emit("register", { username: data.id, receiver });

				const waitForRoom = new Promise((resolve) => {
					socket.on('chatCreated', (detail) => {
						room.current = detail.roomName;
						resolve(detail.roomName);
					});
				});
				await waitForRoom;
				roomMap.set(receiver as number, room.current);
				setReceiver(receiver);
			}

		}
		fun();

	}, [selected])


	if (receiver == -2) {
		return (<div className={`${mobile.tab ? "" : "max-sm:hidden"} flex w-[72%]  items-center justify-center dark:bg-gradient-to-br from-gray-900 to-black font-semibold text-4xl`}>
			<div>
				Start Chatting...
			</div>
		</div>)
	}

	return (
		<div
			className={`${mobile.tab ? "" : "max-sm:hidden"} flex-1 w-[calc(100vw-5rem)] flex flex-col dark:bg-gradient-to-br from-gray-900 to-black bg-gray-50"
      }`}
		>
			<MessageHeader />
			<MessageContent receiver={receiver} data={data.id} socket={socket} />
			<MessageInput data={data.id} socket={socket} receiver={receiver} room={room.current} />
		</div>
	);
}
