import React, { useState } from "react";
import DefaultLayout from "../components/common/DefaultLayout";
import logo from "../assets/logo.png";
import ProgressBar from "../components/content/ProgressBar";
import Agreement from "../components/content/Agreement";
import ApplyInfo from "../components/content/ApplyInfo";
import PersonalInfo from "../components/content/PersonalInfo";
import CompleteApply from "../components/content/CompleteApply";

const Funnel = () => {
  const questions = {
    agreement: {
      question: "개인정보 수집 동의",
      description:
        "프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다.",
    },
    applyInfo: {
      question: "기본 정보",
      description: "연락 가능한 정보를 입력해주세요.",
    },
    personalInfo: {
      question: "지원 정보",
      description: "지원하고자 하는 분야를 선택해주세요.",
    },
  };

  const [infoQuestion, setInfoQuestion] = useState(questions.agreement);

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
          <Agreement info={infoQuestion} />

          <div className="flex justify-between my-[100px]">
            <button className="h-[50px] w-[100px] text-[20px] bg-[#E1E3ED] rounded-2xl">
              뒤로
            </button>
            <button className="h-[50px] w-[100px] text-[20px] bg-[#E1E3ED] rounded-2xl">
              다음
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Funnel;
