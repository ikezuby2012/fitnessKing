import React, { FC } from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";
import { NextImage } from '@/components/atoms/NextImage'
import ConicProgressBar from '@/components/atoms/ConicProgressBar'
import MdConicProBar from '@/components/atoms/MdConicProBar';

interface propTypes {
    title: string
    imgSrc: string
    desc: string
    percentage: number;
    colors: string[];
}

const DashAsideGoalBox: FC<propTypes> = ({ title, imgSrc, desc, percentage, colors }) => {
    return (
        <div className={clsx(style.block)}>
            <NextImage src={imgSrc} alt="" className={clsx(style.block_img)} />
            <div className="flex flex-col">
                <span className={clsx(style.block_title)}>
                    {title}
                </span>
                <span className={clsx(style.block_desc)}>
                    {desc}
                </span>
            </div>
            {/* <ConicProgressBar className={style.mg} fontColor='#11263C' innerClass={clsx(style.block_bar)} width={61} forceWidth={"30%"} percentage={percentage} strokeWidth={5} primaryColor={colors ?? ["#FFFFFF", "#FFFFFF"]} secondaryColor="#faf9f968" showPercentage={true} /> */}
            <div className={clsx(style.block_progress)}>
                <MdConicProBar progressColor={colors[0]} progressAmount={percentage.toString()} fontSize='14px' />
            </div>
        </div>
    )
}

export default DashAsideGoalBox