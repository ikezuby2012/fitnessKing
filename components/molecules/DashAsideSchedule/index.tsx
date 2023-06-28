import React from 'react'
import HeadText from '@/components/atoms/HeaderText'
import clsx from 'clsx'

import style from "./style.module.scss";
import DashScheduleBox from '../DashScheduleBox';

//icons
import { PiCaretRightThin } from 'react-icons/pi'


const DashAsideSchedule = () => {
    return (
        <div className={clsx(style.block)}>
            <div className="flex items_center justify-between mb-4">
                <HeadText level={3} className={clsx(style.block_h3)}>my schedule</HeadText>
                <div className={clsx(style.block_view, "flex items-center")}>
                    View All
                    <span>
                        <PiCaretRightThin className={clsx(style.block_viewBtn)} />
                    </span>
                </div>
            </div>
            <div className={clsx(style.block_cards)}>
                <DashScheduleBox title="stretch" day="Monday" desc='at 08:00am' para="20 sets" imgSrc='/images/strench.png' />
                <DashScheduleBox title="yoga" day="wednesday" desc='at 08:00am' para="1hr30mins" imgSrc='/images/yoga.png' />
            </div>
        </div>
    )
}

export default DashAsideSchedule