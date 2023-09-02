import IconLink from "./IconLink";

import facebookIcon from '@/public/assets/4102573_applications_facebook_media_social_icon.png'

export default function FacebookLink({ width = 26, height = 26 }) {
    return <IconLink icon={facebookIcon} href={'https://www.facebook.com/Maximillian.Meyer/'} height={height} width={width} />
}