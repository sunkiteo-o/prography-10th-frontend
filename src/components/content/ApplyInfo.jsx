import React from "react";
import Question from "../common/Question";
import CheckBox from "../common/CheckBox";

const ApplyInfo = ({ info }) => {
  const position = {
    frontend: "프론트엔드",
    backend: "백엔드",
    design: "디자인",
    ios: "iOS",
    android: "안드로이드",
    po: "Product Owner",
  };
  return (
    <div>
      <Question info={info} />
      <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
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
  );
};

export default ApplyInfo;
