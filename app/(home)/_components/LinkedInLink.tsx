import IconLink from "./IconLink";

import linkedInIcon from '@/public/assets/5296501_linkedin_network_linkedin logo_icon.png'

export default function LinkedInLink({ width = 26, height = 26 }) {
    return <IconLink icon={linkedInIcon} href={'https://www.linkedin.com/in/mfranklin49'} height={height} width={width} />
}