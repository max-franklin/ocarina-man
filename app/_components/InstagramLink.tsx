import IconLink from "./IconLink";

import instagramIcon from '@/public/assets/6929237_instagram_icon.png'

export default function InstagramLink({ width = 26, height = 26 }) {
    return <IconLink icon={instagramIcon} href={'https://instagram.com/akstackclimber?igshid=OGQ5ZDc2ODk2ZA=='} height={height} width={width} />
}