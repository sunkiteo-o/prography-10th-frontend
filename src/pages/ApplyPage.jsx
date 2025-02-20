import React from "react";
import useFunnel from "../hooks/useFunnel";
import FunnelLayout from "../layout/FunnelLayout";
import Agreement from "../components/content/agree/Agreement";
import Move from "../components/common/Move";
import PersonalInfo from "../components/content/PersonalInfo";
import ApplyInfo from "../components/content/ApplyInfo";

const steps = ["개인정보 수집 동의", "기본 정보", "지원 정보"];

const ApplyPage = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0], steps);

  return (
    <FunnelLayout>
      <Funnel>
        {/* 현재 Step만 렌더링되도록 필터링 */}
        {currentStep === "개인정보 수집 동의" && (
          <Step name="개인정보 수집 동의">
            <Agreement />
          </Step>
        )}
        {currentStep === "기본 정보" && (
          <Step name="기본 정보">
            <PersonalInfo />
          </Step>
        )}
        {currentStep === "지원 정보" && (
          <Step name="지원 정보">
            <ApplyInfo />
          </Step>
        )}
      </Funnel>
    </FunnelLayout>
  );
};

export default ApplyPage;
