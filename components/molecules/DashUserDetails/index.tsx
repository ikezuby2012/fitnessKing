import React, { FC } from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";
import { NextImage } from '@/components/atoms/NextImage';
import HeadText from '@/components/atoms/HeaderText';

interface propTypes {
    name?: string;
}

//icons
import {PiMapPin} from "react-icons/pi";

const DashUserDetails: FC<propTypes> = ({name}) => {
  return (
    <div className={clsx(style.user, "flex items-center")}>
        <NextImage src={"/images/Profil.png"} alt={`${name} photo`} className={clsx(style.user_img)}/>
        <div className={clsx(style.user_nav)}>
            <HeadText className={clsx(style.user_name)} level={4}>{name ?? "Jane Doe"}</HeadText>
            <span className='flex items-center'>
                <PiMapPin />
                <span className={clsx(style.user_loc)}>Abu Dhabi</span>
            </span>
        </div>
    </div>
  )
}

export default DashUserDetails