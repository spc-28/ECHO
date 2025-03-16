import { useEffect, useState } from 'react'
import axios from 'axios';
import Chat from '@/components/layout/chat'
import ChatList from '@/components/layout/chatList'
import NavBar from '@/components/layout/navBar'
import { useSetRecoilState } from 'recoil';
import { chatMobile } from '@/recoil/atoms';
import { io } from 'socket.io-client';
import { ToastContainer } from 'react-toastify';
import Spinner from '@/components/layout/spineer';

export type DataType = {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	chats: [{ id: number }]
}

const socket = io(`https://echo-q70g.onrender.com`);
const roomMap = new Map();

export default function DashBoard() {
	// const [isDarkMode, setIsDarkMode] = useState(true);
	const setMobile = useSetRecoilState(chatMobile);
	const [loading, setloading] = useState(true);
	const [data, setData] = useState<DataType>();

	useEffect(() => {

		if (window.innerWidth <= 600) {
			setMobile((p) => ({ ...p, screen: true }));
		}

		const fetch = async () => {
			const res = await axios.get(`https://echo-q70g.onrender.com/api/v1/user/info`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
			setData(res.data);
			setloading(false);
		}
		fetch();
	}, [])

	if (loading) {
		return <Spinner />
	}
	if (data) {
		return (
			<div className={`flex w-full h-screen dark:bg-black dark:text-gray-300 bg-gray-100 text-gray-800 overflow-hidden`}>
				<NavBar data={data} />
				<ChatList roomMap={roomMap} socket={socket} data={data} />
				<Chat roomMap={roomMap} socket={socket} data={data} />
				<ToastContainer />
			</div>
		)
	}

}