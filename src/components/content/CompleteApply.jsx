import React from "react";

const CompleteApply = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[60px] pb-[40px] ">
      <div className="text-3xl text-white font-extrabold">
        지원이 완료되었습니다!
      </div>
      <div className="text-[20px] text-[#9FA0AB] font-medium pt-[50px]">
        프로그라피 10기에 지원해주셔서 감사합니다.
      </div>
      <div className="text-[20px] text-[#9FA0AB] font-medium pt-[10px]">
        서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
      </div>
    </div>
  );
};

export default CompleteApply;
