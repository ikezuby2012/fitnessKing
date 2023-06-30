import React from "react";
import clsx from "clsx";

import style from "./style.module.scss";

import { NextImage } from "@/components/atoms/NextImage";
import HeadText from "@/components/atoms/HeaderText";
import DashMobileRes from "../DashMobileRes";

const DashboardMainHeader = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className={clsx(style.header)}>
      <DashMobileRes />
      
      <div className="flex flex-col">
        <span className={clsx(style.header_span)}>Good Morning</span>
        <HeadText level={3} className={clsx(style.header_h3)}>Welcome back</HeadText>
      </div>

      <form noValidate onSubmit={(e) => onSubmit(e)} className={clsx(style.header_form, "flex items-center")}>
        <button className={clsx(style.header_btn)}>
          <NextImage src="/images/searchnormal.svg" alt="search icon" className={clsx(style.header_searchIcon)} />
        </button>
        <input type="text" placeholder="Search" className={clsx(style.header_input)} />
      </form>
    </header>
  );
};

export default DashboardMainHeader;
