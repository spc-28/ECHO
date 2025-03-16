import { MessageSquare, Moon, Settings, Sun, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png";
import { useSetRecoilState } from "recoil";
import { menuSelect } from "@/recoil/atoms";
import { useEffect, useState } from "react";

export default function NavBar({ data }: { data: object; }) {

    const setSelect = useSetRecoilState(menuSelect);
    const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme") || 'dark');

    useEffect(() => {

        if (theme == 'dark') {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add("dark");
        }
        else if (theme == "light") {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove("dark");
        }

    }, [theme])

    const toggleTheme = () => {
        if (localStorage.getItem("theme") == 'dark') {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }

    return (
        <div
            className={`w-20 dark:bg-gradient-to-b from-gray-900 to-black bg-white flex flex-col justify-between items-center border-r dark:border-gray-800 border-gray-200`}
        >
            <div className="flex flex-col gap-20 mt-1">
                <div className="size-14 mt-1">
                    <img className="object-fill" src={logo}></img>
                </div>
                <Tabs defaultValue="chats" className="flex">
                    <TabsList className="flex flex-col bg-transparent space-y-4">
                        <TabsTrigger
                            onClick={() => setSelect(1)}
                            value="chats"
                            className={`w-12 h-12 p-2.5 data-[state=active]:bg-gradient-to-br 
                  dark:data-[state=active]:from-gray-500 dark:data-[state=active]:to-gray-700
                  data-[state=active]:from-gray-200 data-[state=active]:to-gray-300
                  rounded-xl transition-all duration-200`}
                        >
                            <MessageSquare className="w-full h-full" />
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSelect(2)}
                            value="contacts"
                            className={`w-12 h-12 p-2.5 data-[state=active]:bg-gradient-to-br 
                  dark:data-[state=active]:from-gray-500 dark:data-[state=active]:to-gray-700
                  data-[state=active]:from-gray-200 data-[state=active]:to-gray-300
                  rounded-xl transition-all duration-200`}
                        >
                            <Users className="w-full h-full" />
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSelect(3)}
                            value="settings"
                            className={`w-12 h-12 p-2.5 data-[state=active]:bg-gradient-to-br 
                  dark:data-[state=active]:from-gray-500 dark:data-[state=active]:to-gray-700
                  data-[state=active]:from-gray-200 data-[state=active]:to-gray-300
                  rounded-xl transition-all duration-200`}
                        >
                            <Settings className="w-full h-full" />
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="flex flex-col gap-7">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="mt-auto ml-1"
                >
                    {theme=='dark' ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                </Button>
                <Avatar
                    className={`w-12 h-12 mb-6 ring-2 
                        dark:ring-gray-700 dark:ring-offset-black
                        ring-gray-300 ring-offset-white
                        ring-offset-2`}
                >
                    <AvatarImage src="" />
                    <AvatarFallback>ME</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}
