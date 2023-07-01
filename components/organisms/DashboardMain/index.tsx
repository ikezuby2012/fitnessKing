import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import style from "./style.module.scss";

import DashboardAside from '../DashboardAside';
import DashboardMainHeader from "@/components/molecules/DashboardMainHeader";
import DashCards from '@/components/molecules/DashCards';
import HeadText from '@/components/atoms/HeaderText';
import ProgressBar from '@/components/atoms/ProgressBar';
import { NextImage } from '@/components/atoms/NextImage';
import ConicProgressBar from '@/components/atoms/ConicProgressBar';
import DashboardMainChart from '@/components/molecules/DashboardMainChart';
import DasboardAchievments from '@/components/molecules/DashboardAchievments';
import DashAsideGoal from '@/components/molecules/DashAsideGoal';
import DashAsideSchedule from '@/components/molecules/DashAsideSchedule';

const DashboardMain = () => {
  const [sm, setSm] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:47em)");
    setSm(mq.matches)
  }, [sm]);

  return (
    <div className={clsx(style.main)}>
      <main className={style.main_inner}>
        <DashboardMainHeader />

        <div className={clsx(style.cards)}>
          <DashCards title='steps' imgSrc='/images/mdi_run.svg' className={clsx(style.blue)}>
            <span className='flex items-baseline my-4'>
              <HeadText className={clsx(style.step_h6)} level={6}>5000</HeadText>
              <span className={clsx(style.step_span,)}>steps</span>
            </span>

            <ProgressBar />
          </DashCards>

          <DashCards title='hydration' imgSrc='/images/ic_sharp-water-drop.svg' className={clsx(style.orange)}>
            <ConicProgressBar className={clsx(style.hydration)} width={100} fontColor='#f0eeee' percentage={90} strokeWidth={5} primaryColor={["#FFFFFF", "#FFFFFF"]} secondaryColor="#faf9f968" />
          </DashCards>

          <DashCards title='calories' imgSrc='/images/solar_fire-bold.svg' className={clsx(style.pink)}>
            <div className={clsx(style.calories)}>
              <NextImage src="/images/speedbar.png" alt="calories" className={clsx(style.calories_img)} />
            </div>
          </DashCards>

          <DashCards title='heartbeat' imgSrc='/images/ph_heartbeat-fill.svg' className={clsx(style.purple)}>
            <div className={clsx(style.heart)}>
              <NextImage src="/images/heartwave.svg" alt="heart wave" className={clsx(style.heart_img)} />
              <span className={clsx(style.heart_span)}>
                <span>120</span>
                <span>Bpm</span>
              </span>
            </div>
          </DashCards>
        </div>


        <div className={style.onlyMobile}>
          <DashAsideGoal />
          <DashAsideSchedule />
        </div>


        <DashboardMainChart />

        <DasboardAchievments />
      </main>
      <DashboardAside />
    </div>
  )
}

export default DashboardMain;