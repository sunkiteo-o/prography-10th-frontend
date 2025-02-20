import React, { useState } from "react";
import Agreement from "../content/agree/Agreement";
import PersonalInfo from "../content/PersonalInfo";
import ApplyInfo from "../content/ApplyInfo";
import CompleteApply from "../content/CompleteApply";

const useFunnel = () => {
  const [registerData, setRegisterData] = useState();
  const [step, setStep] =
    (useState < "개인정보 수집 동의") |
    "기본 정보" |
    "지원 정보" |
    ("지원 완료" > "개인정보 수집 동의");

  return (
    <div>
      {step === "개인정보 수집 동의" && (
        <Agreement onNext={(data) => setStep("기본 정보")} />
      )}
      {step === "기본 정보" && (
        <PersonalInfo onNext={() => setStep("지원 정보")} />
      )}
      {step === "지원 정보" && (
        <ApplyInfo onNext={() => setStep("지원 완료")} />
      )}
      {step === "지원 완료" && <CompleteApply />}
    </div>
  );
};

export default useFunnel;
