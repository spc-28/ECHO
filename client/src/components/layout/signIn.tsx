import { SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignIn({setPage}:{setPage:React.Dispatch<SetStateAction<boolean>>}) {
    const [typePassowrd, setTypePassword] = useState("password");
    const [detail, setDetail] = useState({email:"",password:""});
    const nav = useNavigate();
    const logIn = async () => {
        try{
            const res = await axios.post('https://echo-q70g.onrender.com/api/v1/user/loginUser',detail);

            toast.success("Account Logged In");
            localStorage.setItem('token', res.data.token);
            nav('/dashboard',{
                state: { data: { id: res.data.id }}
              })
            
        }
        catch(e){
            toast.error("Unable to Log In");
        }
    }
    return (
        <div className=" flex flex-col w-[42%] max-sm:w-[95%] min-h-fit max-sm:mx-4 text-white mr-6 h-[80%]">
                <p className=" text-[3.5rem] pt-6 tracking-normal max-sm:leading-[66px]">Continue to chat</p>
                <p className="py-4 pl-4 max-sm:pl-2">Don't have an account?<span className="cursor-pointer" onClick={()=>setPage(false)}>&nbsp;<u>Create new account</u></span></p>
                <Input onChange={(e)=>setDetail((d)=>({...d,email:e.target.value}))} className="bg-[#0d121f] p-2 text-lg h-[3.3rem] border-2 border-slate-400 text-slate-100 mt-6" placeholder="Email"></Input>
                <Input onChange={(e)=>setDetail((d)=>({...d,password:e.target.value}))} type={typePassowrd} onMouseEnter={()=>setTypePassword("text")} onMouseLeave={()=>setTypePassword("password")} className="bg-[#0d121f] p-2 text-lg h-[3.3rem] border-2 border-slate-400 text-slate-100 mt-6" placeholder="Password"></Input>
                <p className="opacity-45 mt-1 ml-1">*Hover to see password</p>
                <Button onClick={logIn} className="mt-12 h-[3.3rem] mx-5 text-lg bg-[#2765ce] hover:bg-[#3889de]">Login In</Button>
                <hr className="my-8"></hr>
                <div className="flex">
                <Button className="w-1/2 mx-4 ">
                    <svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>Google
                </Button>
                <Button className="w-1/2 mx-4 bg-slate-200 text-black hover:bg-slate-200">
                    <svg className="size-14" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                    </svg>
                    Github
                </Button>
                </div>
                <div className="flex flex-col mt-10 ml-4 gap-2 text-lg">
                    <p className="font-bold">Test Users</p>
                    <p>User1 &nbsp; email: jane@example.com &nbsp; password: hashedPassword456</p>
                    <p>User2 &nbsp; email: mike@example.com &nbsp; password: hashedPassword789</p>
                </div>
            </div>
    )
}