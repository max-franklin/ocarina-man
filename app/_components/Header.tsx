import Link from "next/link";
import Image from "next/image";

import facebookIcon from '../_assets/4102573_applications_facebook_media_social_icon.png'
import linkedInIcon from '../_assets/5296501_linkedin_network_linkedin logo_icon.png'
import instagramIcon from '../_assets/6929237_instagram_icon.png'

export default function Header() {
    return (
        <header className="bg-gradient-to-b from-slate-400 to-slate-100">
            <nav className="text-xl font-medium antialiased">
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-center text-center justify-between pt-2 px-2">
                    <ul className="flex flex-row space-x-3 sm:space-x-4">
                        <li><Link href='/' className='text-slate-800 hover:text-slate-600 hover:underline'>Home</Link></li>
                        <li><Link href='/about' className='text-slate-800 hover:text-slate-600 hover:underline'>About Me</Link></li>
                        <li><Link href='/blog' className='text-slate-800 hover:text-slate-600 hover:underline'>Blog Posts</Link></li>
                    </ul>
                    <ul className='flex flex-row space-x-2'>
                        <li>
                            <Link href='/facebook'>
                                <Image
                                    src={facebookIcon}
                                    width={26}
                                    height={26}
                                    alt="Facebook Icon"
                                    className="hover:opacity-50"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href='/linkedin'>
                                <Image
                                    src={linkedInIcon}
                                    width={26}
                                    height={26}
                                    alt="LinkedIn Icon"
                                    className="hover:opacity-50"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href='/instagram'>
                                <Image
                                    src={instagramIcon}
                                    width={26}
                                    height={26}
                                    alt="Instagram Icon"
                                    className="hover:opacity-50"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='h-px bg-gray-500 mt-4'></div>
        </header>
    );
}