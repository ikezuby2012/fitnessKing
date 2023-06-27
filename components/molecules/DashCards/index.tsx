import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";
import { NextImage } from '@/components/atoms/NextImage';

interface IPropsTypes {
  title: string;
  className?: string;
  imgSrc: string;
  children: ReactNode
}

const DashCards: FC<IPropsTypes> = ({ title, imgSrc, children, className }) => {
  return (
    <div className={clsx(style.card, "flex flex-col", className)}>
      <div className={clsx(style.card_block, "flex items-center")}>
        <NextImage src={imgSrc} alt={title} className={clsx(style.card_titleImg, "mr-1")} />
        <span className='capitalize text-gray-50'>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default DashCards