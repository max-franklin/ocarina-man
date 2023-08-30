import Image from 'next/image'

import facebookIcon from '../_assets/4102573_applications_facebook_media_social_icon.png'
import linkedInIcon from '../_assets/5296501_linkedin_network_linkedin logo_icon.png'
import instagramIcon from '../_assets/6929237_instagram_icon.png'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-300 to-slate-100">
            <div className='h-px bg-gray-400 mb-4'></div>
            <div className='flex justify-center'>
                <label htmlFor="subscribeButton" className='mr-2 self-center'>Subscribe for email updates:</label>
                <input type="text" className='rounded-md px-2 bg-gray-100 border border-solid border-gray-400'/>
                <button id="subscribeButton" className='px-3 py-2 mx-2 rounded-md bg-green-300 border border-solid border-green-400'>Subscribe</button>
            </div>
            <div className='flex justify-center py-4 space-x-2'>
                <Image
                    src={facebookIcon}
                    width={32}
                    height={32}
                    alt="Facebook Icon"
                />
                <Image
                    src={linkedInIcon}
                    width={32}
                    height={32}
                    alt="LinkedIn Icon"
                />
                <Image
                    src={instagramIcon}
                    width={32}
                    height={32}
                    alt="Instagram Icon"
                />
            </div>
        </footer>
    )
}