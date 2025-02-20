import React from "react";

const Move = ({ onPrev, onNext }) => {
  return (
    <div>
      <div className="flex justify-between my-[100px]">
        <button
          className="h-[50px] w-[100px] text-[20px] bg-[#E1E3ED] rounded-2xl"
          onClick={() => {
            onPrev();
          }}
        >
          뒤로
        </button>
        <button
          className="h-[50px] w-[100px] text-[20px] bg-[#E1E3ED] rounded-2xl"
          onClick={() => {
            onNext();
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Move;
