import { Cross, Phone, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { useSetRecoilState } from "recoil";
import { chatMobile, chatSelected } from "@/recoil/atoms";

export default function MessageHeader() {
	const setMobile = useSetRecoilState(chatMobile);
	const setSelected = useSetRecoilState(chatSelected);

	return (
		<div className={`dark:bg-gradient-to-r from-gray-900 to-black bg-white p-4 flex items-center justify-between border-b  dark:border-gray-800 border-gray-200`}>
			<div className="flex items-center gap-3">
				<Avatar className={`ring-2 dark:ring-gray-700 dark:ring-offset-black  ring-gray-300 ring-offset-white ring-offset-2`}>
					<AvatarImage src="https://res.cloudinary.com/dd8vmqvqp/image/upload/v1741770568/profile-default_nhnefp.svg" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<h2 className={`text-lg font-semibold dark:text-gray-200 text-gray-800`}>Current Chat</h2>
					{/* <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>Online</p> */}
				</div>
			</div>
			<div className="flex items-center gap-4">
				{window.innerWidth < 600 ? <Button onClick={() => {setMobile({ screen: true, tab: false }); setSelected(-2)}} variant="ghost" size="icon" className={`dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200`}>
					<Cross className="h-5 w-5 rotate-45" />
				</Button> : ""}
				<Button variant="ghost" size="icon" className={`dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800  text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200`}>
					<Phone className="h-5 w-5" />
				</Button>
				<Button variant="ghost" size="icon" className={`dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors duration-200`}>
					<Video className="h-5 w-5" />
				</Button>
				{/* <Button variant="ghost" size="icon" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'} rounded-xl transition-colors duration-200`}>
              <MoreVertical className="h-5 w-5" />
            </Button> */}
			</div>
		</div>
	)
}