import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import style from "./style.module.scss";
import DashboardMain from '@/components/organisms/DashboardMain'
import DashboardSideBar from '@/components/organisms/DashboardSideBar'
import { useMobileStore } from '@/store/useMobile';

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const updateIsMobile = useMobileStore((state: any) => state.updateIsMobile)

  return (
    <section className={clsx(style.section, "flex")}>
      <DashboardSideBar />
      <DashboardMain />
    </section>
  )
}

export default Dashboard