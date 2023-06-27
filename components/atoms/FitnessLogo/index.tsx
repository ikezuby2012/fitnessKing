import React, { FC } from 'react'
import clsx from 'clsx';

import style from "./style.module.scss";
import { NextImage } from '../NextImage';

interface IpropsTypes {
    className?: string
}
const FitnessLogo: FC<IpropsTypes> = ({className}) => {
    return (
        <div className={clsx(style.fitnessLogo, className)}>
            <NextImage src={"/images/FitnessKing.svg"} alt="fitness king" className={clsx(style.fitnessKing)} />
            <NextImage src={"/images/crown-logo.svg"} alt="crown" className={clsx(style.fitnessCrown)} />
        </div>
    )
}

export default FitnessLogo;