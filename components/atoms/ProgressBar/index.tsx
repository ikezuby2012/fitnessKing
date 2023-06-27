import React from 'react'
import styled from '@emotion/styled';
import clsx from "clsx";

import style from "./style.module.scss";

const ProgressBar = () => {
  return (
    <div className={clsx(style.progress)}>
      <div className={clsx(style.progress_value)}></div>
    </div>
  )
}

export default ProgressBar