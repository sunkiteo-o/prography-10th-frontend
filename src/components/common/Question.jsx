import React from "react";

const Question = ({ info }) => {
  return (
    <div>
      <div className="pt-[60px] pb-[40px] border-b-1 border-[#9FA0AB]">
        <div className="text-3xl text-white font-extrabold">
          {info.question}
        </div>
        <div className="text-[20px] text-[#9FA0AB] font-medium pt-[10px]">
          {info.description}
        </div>
      </div>
    </div>
  );
};

export default Question;
