import DashboardMain from '@/components/organisms/DashboardMain'
import DashboardSideBar from '@/components/organisms/DashboardSideBar'
import React from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";

const Dashboard = () => {
  return (
    <section className={clsx(style.section, "flex")}>
      <DashboardSideBar />
      <DashboardMain />
    </section>
  )
}

export default Dashboard