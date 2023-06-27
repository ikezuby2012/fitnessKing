import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./style.module.scss";

interface Iprops {
    src: string | StaticImageData;
    alt: string,
    priority?: boolean,
    css?: string;
    className: string
}

export const NextImage: FC<Iprops> = ({ 
    src,
    alt,
    priority = false,
    className }) => {
    return (
        <div className={`${className} ${styles.nextImage}`}>
            <Image src={src} alt={alt} fill priority={priority} />
        </div>
    )
}