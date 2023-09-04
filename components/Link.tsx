import { default as NextLink } from "next/link";

export default function Link({ href, children, className }): any {
    return (
        <NextLink href={href} className={className ? className : "hover:cursor-rocket-engaged text-blue-950 hover:text-slate-600 hover:underline"}>
            { children }
        </NextLink>
    )
}