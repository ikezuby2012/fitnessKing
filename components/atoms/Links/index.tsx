import { FC } from "react";
import Link from "next/link";

interface Iprops {
    url: string;
    className?: string;
    children: React.ReactNode | any
}

const Links: FC<Iprops> = ({ url, className, children }) => {
    return (
        <Link href={url} className={className}>
            {children}
        </Link>
    )
}

export default Links;