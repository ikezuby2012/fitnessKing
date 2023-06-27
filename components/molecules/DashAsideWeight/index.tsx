import React from 'react'
import clsx from "clsx";

import style from "./style.module.scss";

const DashAsideWeight = () => {
    const data = [
        {
            id: 83,
            unit: "kg",
            label: "weight"
        },
        {
            id: 1.7,
            unit: "m",
            label: "height"
        },
        {
            id: 2,
            unit: "yrs",
            label: "height"
        }
    ]
    return (
        <div className={clsx(style.block, "flex items-center justify-between")}>
            {data.map((el, i) => (
                <div className="flex flex-col items-center" key={i}>
                    <span>
                        <span className='text-lg font-semibold'>{el.id}</span>
                        <span>{el.unit}</span>
                    </span>
                    <span className='capitalize text-sm'>{el.label}</span>
                </div>
            ))}
        </div>
    )
}

export default DashAsideWeight
