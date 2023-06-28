import React, { FC } from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";
import { NextImage } from '@/components/atoms/NextImage'
import HeadText from '@/components/atoms/HeaderText';

interface propTypes {
    title: string
    imgSrc: string
    desc: string
    day: string
    para: string;
}

const DashScheduleBox:FC<propTypes> = ({imgSrc, title, desc, day, para}) => {
    return (
        <div className={clsx(style.block)}>
            <HeadText level={3} className={clsx(style.block_h3)}>{day ?? "monday"}</HeadText>
            <div className={clsx(style.block_flex)}>
                <NextImage src={imgSrc} alt="" className={clsx(style.block_img)} />
                <div className="flex flex-col">
                    <span className={clsx(style.block_title)}>
                        {title}
                    </span>
                    <span className={clsx(style.block_desc)}>
                        {desc}
                    </span>
                </div>
                <span className={clsx(style.block_para)}>
                    {para}
                </span>
            </div>
        </div>
    )
}

export default DashScheduleBox