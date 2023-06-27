import React from 'react'
import clsx from "clsx"

import style from "./style.module.scss";
import HeadText from '@/components/atoms/HeaderText';

import { PiCaretDownThin, PiCaretRightThin } from 'react-icons/pi';
import DashAsideGoalBox from '../DashAsideGoalBox';

const DashAsideGoal = () => {
    return (
        <div className={clsx(style.goal)}>
            <div className="flex items_center justify-between">
                <HeadText level={3} className={clsx(style.goal_h3)}>My Goals</HeadText>
                <div className={clsx(style.goal_view, "flex items-center")}>
                    View All
                    <span>
                        <PiCaretRightThin className={clsx(style.goal_viewBtn)} />
                    </span>
                </div>
            </div>
            <div className={clsx(style.goal_boxes)}>
                <DashAsideGoalBox title="workout" imgSrc='/images/gym-hand.svg' colors={["#FE7342", "#FE7342"]} desc="Everyday at 08:00am 70hrs/200hrs" percentage={68} />
                <DashAsideGoalBox title="sleep" imgSrc='/images/sleepy-face.svg' colors={["#1AB0B1", "#15a0a0e6"]} desc="Everyday at 10:00pm 70hrs/200hrs" percentage={60} />
            </div>
        </div>
    )
}

export default DashAsideGoal;