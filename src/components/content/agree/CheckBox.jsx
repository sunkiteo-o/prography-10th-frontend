import React from "react";

const CheckBox = () => {
  return (
    <div>
      <div className="flex items-center  border-1 border-[#E1E3ED] rounded-2xl  ">
        <button className="w-[25px] h-[25px] border-1 rounded-full border-[#E1E3ED] mx-[20px]"></button>
        <div className="text-[20px] text-[#E1E3ED]  font-medium my-[20px] ">
          개인정보 수집 여부에 동의합니다.
        </div>
      </div>
      <div className="flex items-center  border-1 border-[#E1E3ED] rounded-2xl mt-[10px] ">
        <button className="w-[25px] h-[25px] border-1 rounded-full border-[#E1E3ED] mx-[20px]"></button>
        <div className="text-[20px] text-[#E1E3ED] font-medium my-[20px] ">
          개인정보 수집 여부에 동의하지 않습니다.
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
