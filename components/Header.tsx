import Link from "next/link";

import FacebookLink from "@/components/FacebookLink";
import LinkedInLink from "@/components/LinkedInLink";
import InstagramLink from "@/components/InstagramLink";


export default function Header() {
    return (
        <header className="bg-gradient-to-b from-slate-400 to-slate-100">
            <nav className="text-xl font-medium antialiased">
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-center text-center justify-between pt-2 px-2">
                    <ul className="flex flex-row space-x-3 sm:space-x-4">
                        <li><Link href='/' className='text-blue-950 hover:text-slate-600 hover:underline'>Home</Link></li>
                        <li><Link href='/about' className='text-blue-950 hover:text-slate-600 hover:underline'>About Me</Link></li>
                        <li><Link href='/blog' className='text-blue-950 hover:text-slate-600 hover:underline'>Blog Posts</Link></li>
                    </ul>
                    <ul className='flex flex-row space-x-2'>
                        <li>
                            <FacebookLink />
                        </li>
                        <li>
                            <LinkedInLink />
                        </li>
                        <li>
                            <InstagramLink />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='h-px bg-gray-500 mt-4'></div>
        </header>
    );
}