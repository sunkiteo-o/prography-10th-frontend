import React from "react";
import Question from "../common/Question";
import CheckBox from "./agree/CheckBox";

const Agreement = ({ info }) => {
  return (
    <div>
      <Question info={info} />
      <div className="m-[20px] mt-[60px] ">
        <div className="flex flex-col">
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[10px]">
            수집 목적: Prography 10rl 리크루팅 과정 및 결과 안내
          </div>
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[10px]">
            수집 항목: 이름, 이메일, 핸드폰 번호, 학교 정보 및 직장 정보
          </div>
          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[10px]">
            보유 및 이용 기간: 리쿠르팅 과정 종료일 (3월 7일) 이후 파기
          </div>

          <div className="text-[20px] text-[#E1E3ED] font-medium pt-[50px] pb-[30px]">
            개인정보 수집 동의 여부를 체크해주세요.
            <span className="text-red-500"> *</span>
          </div>

          <CheckBox />
        </div>
      </div>
    </div>
  );
};

export default Agreement;
