import Link from "next/link";
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({
    subsets: ['latin'],
  })


export default function Nav(){
    return(
        <div className="flex flex-row justify-between p-3 text-white">
            <Link href={'/'} className={`text-4xl logo font-bold px-3 ${dancing_script.className}`}>SchInfo</Link>
            <nav className="flex text-lg items-center">
                <Link href={'/teachers'} className="flex items-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Teachers
                </Link>
                <Link href={'/students'} className=" flex items-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Students
                </Link>
            </nav>
        </div>
    )
}