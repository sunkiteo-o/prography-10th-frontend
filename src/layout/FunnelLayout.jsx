import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import PersonalInfo from "../components/content/PersonalInfo";
import Move from "../components/common/Move";
import ProgressBar from "../components/content/ProgressBar";

const FunnelLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="flex flex-col  w-[1140px] h-screen overflow-scroll scrollbar-hide">
        <div className="flex flex-row justify-center">
          <div className="flex py-[100px] justify-center items-center">
            <div className="text-6xl text-white font-extrabold  ml-auto">
              <span className="text-prograpy pr-[20px]"> Prography </span> 10기
              지원서
            </div>
          </div>
        </div>
        <ProgressBar />

        <div className="mx-[120px]">
          {/* <PersonalInfo info={infoQuestion} /> */}
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FunnelLayout;
