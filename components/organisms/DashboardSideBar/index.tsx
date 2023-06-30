'use client'
import React, { useRef, FC, useEffect } from 'react'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'

import style from "./style.module.scss";
import { Navlinks } from './links';
import Links from '@/components/atoms/Links';
import { NextImage } from '@/components/atoms/NextImage';
import FitnessLogo from '@/components/atoms/FitnessLogo';
import { useMobileStore } from '@/store/useMobile';

interface propTypes {
    isMobile?: boolean;
}

const DashboardSideBar: FC<propTypes> = ({ isMobile }) => {
    const IsMobile = useMobileStore((state: any) => state.isMobile)

    const mobileRef = useRef<any>(null);
    const pathname = usePathname();

    useEffect(() => {
        console.log(IsMobile, "is mobile view");
        if (IsMobile) mobileRef.current?.classList.toggle("open");
        else mobileRef.current?.classList.remove("open");

        return () => {
            if (!IsMobile) {
                mobileRef.current?.classList.remove("open");
            }
        }
    }, [IsMobile])

    return (
        <div className={clsx(style.side)} ref={mobileRef}>
            <FitnessLogo className={clsx(style.side_headerlogo)} />
            <nav className={clsx(style.sidebar)}>
                <ul className={clsx(style.side_nav)}>
                    {Navlinks.map((el, i) => (
                        <Links className={clsx(style.side_link, pathname === el.url && style.side_linkActive)} key={i} url={el.url}>
                            <NextImage src={el.svg} alt={el.name} className={clsx(style.side_img)} />
                            <span className={clsx(style.side_link_text)}>{el.name}</span>
                        </Links>
                    ))}
                </ul>
            </nav>

            <nav className={clsx(style.side_footer)}>
                <div className={clsx(style.side_div, style.side_div_1, "flex items-center")}>
                    <NextImage src="/images/Help.svg" alt='help' className={clsx(style.img)} />
                    <span className='font-medium capitalize'>help</span>
                </div>
                <br />
                <div className={clsx(style.side_div, "flex items-center")}>
                    <NextImage src="/images/Logout.svg" alt='logout' className={clsx(style.img)} />
                    <span className='font-medium capitalize'>logout</span>
                </div>
            </nav>
        </div>
    )
}

export default DashboardSideBar