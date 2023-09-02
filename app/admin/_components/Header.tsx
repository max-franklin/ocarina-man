import Link from "next/link";
import Image from "next/image";

import FacebookLink from "@/components/FacebookLink";
import LinkedInLink from "@/components/LinkedInLink";
import InstagramLink from "@/components/InstagramLink";

import spaceInvaderIcon from "@/public/assets/6646223_arcade_invaders_pixel_retro_space_icon.png"


export default function Header() {
    return (
        <header className="bg-gradient-to-b from-slate-400 to-slate-100">
            <nav className="text-xl font-medium antialiased">
                <div className="flex flex-col md:space-x-12 space-y-2 md:space-y-0 md:flex-row items-center text-center justify-between pt-2 px-2">
                    <ul className="flex-1 flex flex-row space-x-3 md:space-x-4">
                        <li><Link href='/' className='text-blue-950 hover:text-slate-600 hover:underline'>Home</Link></li>
                        <li><Link href='/about' className='text-blue-950 hover:text-slate-600 hover:underline'>About Me</Link></li>
                        <li><Link href='/blog' className='text-blue-950 hover:text-slate-600 hover:underline'>Blog Posts</Link></li>
                    </ul>
                    <div className="flex-2 flex flex-row space-x-4 justify-center">
                        <Image src={spaceInvaderIcon} width={24} height={24} alt=""/>
                        <h1>AKStackclimber Admin Portal</h1>
                        <Image src={spaceInvaderIcon} width={24} height={24} alt=""/>
                    </div>
                    <ul className='flex-1 flex flex-row space-x-2 justify-end'>
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