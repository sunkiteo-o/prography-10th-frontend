import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import logo from "../assets/logo.png";
import ProgressBar from "../components/content/ProgressBar";
import Agreement from "../components/content/agree/Agreement";
import ApplyInfo from "../components/content/ApplyInfo";
import PersonalInfo from "../components/content/PersonalInfo";
import CompleteApply from "../components/content/CompleteApply";
import Move from "../components/common/Move";
import FunnelLayout from "../layout/FunnelLayout";
import useFunnel from "../hooks/useFunnel";

const Funnel = ({ steps, nextClickHandler }) => {
  const { Funnel, Step } = useFunnel(steps[0]);
  return (
    <FunnelLayout>
      <Funnel>
        <Step name="개인정보 수집 동의">
          <Agreement onNext={() => nextClickHandler(steps[1])} />
        </Step>
        <Step name="기본 정보">
          <PersonalInfo onNext={() => nextClickHandler(steps[2])} />
        </Step>
        <Step name="지원 정보">
          <ApplyInfo onNext={() => nextClickHandler(steps[3])} />
        </Step>
        <Step name="지원 완료">
          <CompleteApply onNext={() => nextClickHandler(steps[4])} />
        </Step>
      </Funnel>
    </FunnelLayout>
  );
};

export default Funnel;
