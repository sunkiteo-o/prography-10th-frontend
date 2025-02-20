import React from "react";
import Question from "../common/Question";

const PersonalInfo = ({ info }) => {
  return (
    <div>
      <Question info={info} />
      <div className="m-[20px] mt-[60px] ">
        <div className="flex flex-col">
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            성함을 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
          <input />
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            이메일 주소를 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            휴대폰 번호를 입력해주세요
            <span className="text-red-500"> *</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
