import React, { FC, useState } from 'react';
import clsx from "clsx";

import style from "./style.module.scss";
import FitnessLogo from '@/components/atoms/FitnessLogo';

//icons 
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useMobileStore } from '@/store/useMobile';

const DashMobileRes: FC = () => {
    const [res, setIsRes] = useState<boolean>(true);
    const updateIsMobile = useMobileStore((state: any) => state.updateIsMobile)

    const onToggle = () => updateIsMobile(res);

    return (
        <div className={clsx(style.mobile, "flex items-center justify-between")}>
            <FitnessLogo />
            <button
                className={clsx(style.mobile_nav)}
                onClick={() => setIsRes(c => !c)}
            >
                {res ? (
                    <HiMenu className={clsx(style.mobile_icon)} onClick={() => onToggle()} />
                ) : (
                    <IoCloseSharp className={clsx(style.mobile_icon)} onClick={() => onToggle()} />
                )}
            </button>
        </div>
    )
}

export default DashMobileRes;