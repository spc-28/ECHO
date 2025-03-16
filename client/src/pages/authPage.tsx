import SignUp from '@/components/layout/signUp';
import pic1 from '../assets/pic1.jpeg';
import SignIn from '@/components/layout/signIn';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
    const [page, setPage] = useState(true);
    const nav = useNavigate();

    return(
        <div className=" flex min-h-fit h-screen justify-between items-center w-full bg-gradient-to-br from-gray-900 to-black">
            <div className=" max-sm:hidden overflow-hidden border-white h-[90%] w-[42%] ml-12 rounded-2xl">
                <Button onClick={()=>nav('/')} className=' border-0 absolute left-[34%] top-14 rounded-3xl h-8'>Go to website<ArrowBigRight></ArrowBigRight></Button>
                <img src={pic1} className=" object-fill"></img>
            </div>
            {page?<SignIn setPage={setPage}/>:<SignUp setPage={setPage}/>}
            <ToastContainer />
        </div>
    )
}