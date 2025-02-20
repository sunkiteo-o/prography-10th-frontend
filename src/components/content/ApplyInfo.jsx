import React from "react";
import Question from "../common/Question";
import CheckBox from "../common/CheckBox";

const ApplyInfo = () => {
  const position = {
    frontend: "프론트엔드",
    backend: "백엔드",
    design: "디자인",
    ios: "iOS",
    android: "안드로이드",
    po: "Product Owner",
  };

  const questions = {
    question: "지원 정보",
    description: "지원하고자 하는 분야를 선택해주세요.",
  };

  return (
    <div>
      <Question info={questions} />
      <div className="m-[20px]">
        <div className=" text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
          지원 분야를 선택해주세요.
          <span className="text-red-500"> *</span>
        </div>
        <CheckBox content={position.frontend} />
        <CheckBox content={position.backend} />
        <CheckBox content={position.design} />
        <CheckBox content={position.ios} />
        <CheckBox content={position.android} />
        <CheckBox content={position.po} />
      </div>
    </div>
  );
};

export default ApplyInfo;
