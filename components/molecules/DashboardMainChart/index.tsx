import React from 'react'
import clsx from 'clsx';

import style from "./style.module.scss";
import HeadText from '@/components/atoms/HeaderText';

//icons
import { GoDotFill } from "react-icons/go";
import { NextImage } from '@/components/atoms/NextImage';

const days = [
  "Monday", "tuesday", "wednesday", "Thursday", "friday", "Saturday", "Sunday"
]

const DashboardMainChart = () => {
  return (
    <div className={clsx(style.section)}>
      <HeadText level={3} className={clsx(style.section_h3)}>Activity</HeadText>
      <div className={clsx(style.section_label, "flex justify-end")}>
        <span className='flex items-center capitalize'>
          <GoDotFill className={clsx(style.blue)}/>
          <span>workout</span>
        </span>
        <span className='flex items-center capitalize'>
          <GoDotFill className={clsx(style.pink)} />
          <span>calories</span>
        </span>
        <span className='flex items-center capitalize'>
          <GoDotFill className={clsx(style.darkPink)}/>
          <span>steps</span>
        </span>
      </div>
      <div className="">

        <NextImage src="/images/Charts.svg" alt="charts" className={style.section_chart} />

        <div className={clsx(style.section_days, "flex items-center justify-between")}>
          {days.map((el, i) => (
            <span className='capitalize' key={i}>{el}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardMainChart;