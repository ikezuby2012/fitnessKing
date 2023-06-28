import React, { FC } from 'react';
import clsx from 'clsx';

import style from "./style.module.scss";
import { PiCaretRightThin } from 'react-icons/pi';
import HeadText from '@/components/atoms/HeaderText';
import DashAsideChart from '../DashAsideChart';

const DashProgressReport = () => {
    return (
        <div className={clsx(style.report)}>
            <div className="flex items_center justify-between mb-4">
                <HeadText level={3} className={clsx(style.report_h3)}>Progress Report</HeadText>
                <div className={clsx(style.report_view, "flex items-center")}>
                    View All
                    <span>
                        <PiCaretRightThin className={clsx(style.report_viewBtn)} />
                    </span>
                </div>
            </div>
            <div className={clsx(style.report_chart)}>
            <HeadText level={5} className={clsx(style.report_h5)}>this month 60%</HeadText>
                <DashAsideChart />
            </div>
        </div>
    )
}

export default DashProgressReport;