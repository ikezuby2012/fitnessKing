import React, { FC } from 'react'
import clsx from "clsx";

import style from "./style.module.scss";

interface propTypes {
  progressAmount: string;
  progressColor: string;
  fontSize: string;
}

const MdConicProBar: FC<propTypes> = ({ progressAmount, progressColor, fontSize }) => {
  return (
    <div
      style={{
        background: `conic-gradient(${progressColor} ${progressAmount}%, 0, #ecf0f1 ${(
          100 - parseInt(progressAmount)
        ).toString()}%)`
      }}
      className={clsx(style.conic)}
    >
      <div className={clsx(style.conic_inner)}>
        <span
          style={{
            fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
            fontWeight: `lighter`,
            // transform: "rotate(214deg)",
            fontSize,
          }}
        >
          {progressAmount}%
        </span>
      </div>
    </div>
  )
}

export default MdConicProBar