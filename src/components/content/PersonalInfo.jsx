import React from "react";
import Question from "../common/Question";

const PersonalInfo = () => {
  const questions = {
    question: "기본 정보",
    description: "연락 가능한 정보를 입력해주세요.",
  };

  return (
    <div>
      <Question info={questions} />
      <div className="m-[20px]  ">
        <div className="flex flex-col">
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            성함을 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
          <input className=" border border-[#E1E3ED] bg-[#E1E3ED] rounded-2xl text-[20px] py-[10px] px-[20px]" />

          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            이메일 주소를 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
          <input
            className=" border border-[#E1E3ED] bg-[#E1E3ED] rounded-2xl text-[20px]  py-[10px] px-[20px]"
            placeholder="예시: prography@gmail.com"
          />

          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            휴대폰 번호를 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
          <input
            className=" border border-[#E1E3ED] bg-[#E1E3ED] rounded-2xl text-[20px] py-[10px] px-[20px]"
            placeholder="예시: 010-1234-5678"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
