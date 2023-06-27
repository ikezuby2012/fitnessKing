import React, { FC } from 'react';
import clsx from 'clsx';

import style from "./style.module.scss";
import { PiCaretRightThin } from 'react-icons/pi';
import HeadText from '@/components/atoms/HeaderText';

const DashProgressReport = () => {
    return (
        <div className={clsx(style.report)}>
            <div className="flex items_center justify-between">
                <HeadText level={3} className={clsx(style.report_h3)}>Progress Reports</HeadText>
                <div className={clsx(style.report_view, "flex items-center")}>
                    View All
                    <span>
                        <PiCaretRightThin className={clsx(style.report_viewBtn)} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashProgressReport;