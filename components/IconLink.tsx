import Image from "next/image";


export default function IconLink({ icon, href, alt = "", width = 26, height = 26 }) {

    return (
        <a href={href} target="_blank" className="hover:cursor-rocket-engaged">
            <Image
                src={icon}
                width={width}
                height={height}
                alt={alt}
                className="hover:opacity-50"
            />
        </a>
    )
}