import React, { FC } from 'react'
import styled from '@emotion/styled'
import clsx from "clsx";

const CircleContainer = styled.div`
  display: inline-block;
  border-radius: 100%;
  position: relative;`

const PercentageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center,`

const StyledCircle = styled.circle`
  transform: rotate(-90deg);
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(0, 0);
  `

interface propTypes {
    percentage: number,
    width?: number,
    strokeWidth: number,
    primaryColor: string[] | string,
    secondaryColor?: string,
    fontColor?: string
    showPercentage?: boolean;
    fontSize?: string;
    className?: string;
    fill?: string;
    forceWidth?: string;
    innerClass?: string;
    strokeLinecap?: "inherit" | "butt" | "round" | "square";
}

const ConicProgressBar: FC<propTypes> = ({ percentage, forceWidth, showPercentage, className, width = 200, innerClass, strokeWidth = 5, primaryColor, secondaryColor, fill = "transparent", strokeLinecap = "round", fontColor = "inherit", fontSize = "inherit" }) => {
    const PI = 3.14
    const R = (width / 2) - (strokeWidth * 2)

    let circumference = 2 * PI * R
    let offset = circumference - percentage / 100 * circumference
    let gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, '')

    return (
        <CircleContainer
            className={className}
            style={{
                height: `${width}px`,
                width: `${forceWidth ?? `${width}px`}`,
            }}
        >
            <PercentageContainer className="react-super-progressbar__percentage-container">
                <span
                    className={clsx(innerClass, "flex flex-col items-center text-white")}
                    style={{
                        // fontSize,
                        color: fontColor,
                    }}
                >
                    {/* {percentage}% */}
                    {
                        !showPercentage ? (
                            <>
                                <span>2.3</span>
                                <span>litres</span>
                            </>) : <>{percentage}%</>
                    }

                </span>
            </PercentageContainer>

            <svg
                width='100%'
                height='100%'
                version='1.1'
                style={{ transform: "rotate(-40deg)" }}
                xmlns='http://www.w3.org/2000/svg'
            >
                <linearGradient
                    id={gradientId}
                    x1='0%'
                    y1='0%'
                    x2='100%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor={primaryColor[0]} />
                    <stop offset='100%' stopColor={primaryColor[1]} />
                </linearGradient>
                <circle
                    strokeWidth={strokeWidth}
                    fill='transparent'
                    r={R}
                    cx={width / 2}
                    cy={width / 2}
                    stroke={secondaryColor}
                    strokeDasharray={`${circumference} ${circumference}`}
                />
                <StyledCircle
                    strokeWidth={strokeWidth}
                    fill={fill}
                    r={R}
                    cx={width / 2}
                    cy={width / 2}
                    stroke={`url(#${gradientId})`}
                    strokeLinecap={strokeLinecap}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                />
            </svg>
        </CircleContainer>
    )
}

export default ConicProgressBar