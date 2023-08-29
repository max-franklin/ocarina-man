import Image from 'next/image'

import facebookIcon from '../_assets/4102573_applications_facebook_media_social_icon.png'
import linkedInIcon from '../_assets/5296501_linkedin_network_linkedin logo_icon.png'
import instagramIcon from '../_assets/6929237_instagram_icon.png'

export default function Footer() {
    return (
        <footer className="bg-green-100">
            <p>Maxwell Franklin</p>
            <label htmlFor="subscribeButton">Subscribe for email updates:</label>
            <input type="text" />
            <button id="subscribeButton">Subscribe</button>
            <Image
                src={facebookIcon}
                width={24}
                height={24}
                alt="Facebook Icon"
            />
            <Image
                src={linkedInIcon}
                width={24}
                height={24}
                alt="LinkedIn Icon"
            />
            <Image
                src={instagramIcon}
                width={24}
                height={24}
                alt="Instagram Icon"
            />
        </footer>
    )
}