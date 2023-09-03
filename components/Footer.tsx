import Image from "next/image";

import spaceInvaderIcon from "@/public/assets/6646223_arcade_invaders_pixel_retro_space_icon.png"

import FacebookLink from "@/components/FacebookLink";
import LinkedInLink from "@/components/LinkedInLink";
import InstagramLink from "@/components/InstagramLink";

export default function Footer() {
    const Invaders = () => {
        let invaders = []
        for (let index = 0; index < 100; index++) {
            if (index % 2 == 0) {
                invaders.push(<Image className="py-2 animate-blocky-bounce" src={spaceInvaderIcon} width={24} height={24} alt=""/>)
            } else {
                invaders.push(<Image className="py-2 animate-blocky-bounce-up" src={spaceInvaderIcon} width={24} height={24} alt=""/>)
            }
        }
        return invaders
    }

    return (
        <footer className="bg-gradient-to-t from-slate-400 to-slate-100 pb-4">
            <div className="pb-1 px-1 space-x-2 flex justify-around overflow-x-hidden">
                <Invaders />
            </div>
            <div className='h-px bg-gray-500 mb-4'></div>
            <div className='flex flex-col mx-4 space-y-2 sm:flex sm:flex-row sm:justify-center sm:mx-0 sm:space-y-0'>
                <label htmlFor="subscribeButton" className='mr-2 self-center'>Subscribe for email updates:</label>
                <input type="text" className='rounded-md py-1 px-2 bg-gray-100 border border-solid border-gray-400'/>
                <button id="subscribeButton" className='py-1 sm:px-3 sm:py-2 sm:mx-2 rounded-md bg-green-300 hover:bg-green-200 border border-solid border-green-400'>Subscribe</button>
            </div>
            <div className='flex justify-center py-2 space-x-2'>
                <FacebookLink width={32} height={32} />
                <LinkedInLink width={32} height={32} />
                <InstagramLink width={32} height={32} />
            </div>
            <div className="text-center">
                <p>Max Franklin © 2023</p>
            </div>
        </footer>
    )
}