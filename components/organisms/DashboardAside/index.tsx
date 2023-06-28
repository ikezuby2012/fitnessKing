import React from 'react'
import clsx from 'clsx';

import style from "./style.module.scss";
import DashUserDetails from '@/components/molecules/DashUserDetails';
import DashAsideWeight from '@/components/molecules/DashAsideWeight';
import DashAsideGoal from '@/components/molecules/DashAsideGoal';
import DashProgressReport from '@/components/molecules/DashProgressReport';
import DashAsideSchedule from '@/components/molecules/DashAsideSchedule';

const DashboardAside = () => {
    return (
        <aside className={clsx(style.aside)}>
            <DashUserDetails />
            <DashAsideWeight />
            <DashAsideGoal />
            <DashProgressReport />
            <DashAsideSchedule />
        </aside>
    )
}

export default DashboardAside;
