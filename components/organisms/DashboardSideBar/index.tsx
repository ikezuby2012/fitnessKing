'use client'
import React from 'react'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'

import style from "./style.module.scss";
import { Navlinks } from './links';
import Links from '@/components/atoms/Links';
import { NextImage } from '@/components/atoms/NextImage';
import FitnessLogo from '@/components/atoms/FitnessLogo';

const DashboardSideBar = () => {
    const pathname = usePathname()

    return (
        <div className={clsx(style.side)}>
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