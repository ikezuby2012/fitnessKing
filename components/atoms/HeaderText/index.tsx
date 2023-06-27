import { FC } from "react";
import clsx from "clsx";

import style from "./style.module.scss";

interface Iprops {
  children?: React.ReactNode;
  className?: string;
  level: number;
  dangerouslySetInnerHTML?: {
    __html: string | any;
  };
}

const HeadText: FC<Iprops> = ({ children, className, level, dangerouslySetInnerHTML }) => {
  switch (level) {
    case 1:
      return (
        <>
          {dangerouslySetInnerHTML ? <h1 className={clsx(style.levelOne, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h1 className={clsx(style.levelOne, className)}>{children}</h1>}
        </>
      );
    case 2:
      return (
        <>
          {dangerouslySetInnerHTML ? <h2 className={clsx(style.levelTwo, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h2 className={clsx(style.levelTwo, className)}>{children}</h2>}
        </>
      )
    case 3:
      return (
        <>
          {dangerouslySetInnerHTML ? <h3 className={clsx(style.levelThree, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h3 className={clsx(style.levelThree, className)}>{children}</h3>}
        </>
      )
    case 4:
      return (
        <>
          {dangerouslySetInnerHTML ? <h4 className={clsx(style.levelFour, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h4 className={clsx(style.levelFour, className)}>{children}</h4>}
        </>
      )
    case 5:
      return (
        <>
          {dangerouslySetInnerHTML ? <h5 className={clsx(style.levelFive, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h5 className={clsx(style.levelFive, className)}>{children}</h5>}
        </>
      )
    case 6:
      return (
        <>
          {dangerouslySetInnerHTML ? <h6 className={clsx(style.levelSix, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h6 className={clsx(style.levelSix, className)}>{children}</h6>}
        </>
      )
    default:
      return (
        <>
          {dangerouslySetInnerHTML ? <h6 className={clsx(style.levelSix, className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} /> : <h6 className={clsx(style.levelSix, className)}>{children}</h6>}
        </>
      )
      break;
  }
}

export default HeadText;