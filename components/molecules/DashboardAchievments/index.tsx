import React, { FC } from 'react'
import clsx from "clsx";

import style from "./style.module.scss";
import HeadText from '@/components/atoms/HeaderText';

//icons
import { PiCaretDownThin } from "react-icons/pi";
import { NextImage } from '@/components/atoms/NextImage';

interface cardsProps {
    className?: string;
    imgSrc: string;
    label: string;
    size: string;
}

const Card: FC<cardsProps> = ({ className, imgSrc, label, size }) => {
    return (
        <div className={clsx(className, style.card, "flex items-center flex-col justify-between")}>
            <NextImage src={imgSrc} className={clsx(style.card_img)} alt={label} />
            <span className={clsx(style.card_label)}>{label}</span>
            <span className={clsx(style.card_size)}>{size}</span>
        </div>
    )
}

const DasboardAchievments = () => {
    return (
        <div className={clsx(style.section)}>
            <div className="flex items-center justify-between">
                <span>
                    <HeadText level={3} className={clsx(style.section_h3)}>Achievments</HeadText>
                    <p>You are on fire!!! <span role='img'>🔥</span></p>
                </span>
                <div className={clsx(style.section_view, "flex items-center")}>
                    View All
                    <span>
                        <PiCaretDownThin />
                    </span>
                </div>
            </div>

            <div className={clsx(style.card_blocks)}>
                <Card className={clsx(style.card_orange)} imgSrc="/images/time.svg" label="hours" size="135"/>
                <Card className={clsx(style.card_pink)} imgSrc="/images/calorie.svg" label="Kcal" size="550"/>
                <Card className={clsx(style.card_blue)} imgSrc="/images/pose.svg" label="Poses" size="25"/>
                <Card className={clsx(style.card_cyan)} imgSrc="/images/sets.svg" label="sets" size="500"/>
                <Card className={clsx(style.card_purple)} imgSrc="/images/feets.svg" label="Kcal" size="50000"/>
            </div>
        </div>
    )
}

export default DasboardAchievments