import React, { useRef, useState } from "react";

const ProgressBar = () => {
  let [currentProgress, setCurrentProgress] = useState(1);
  const circle = useRef();
  const progressBar = useRef();
  const progressArr = [2, 3, 4];

  const previousSteps = (e) => {
    // 현재 스텝
    let progressCount = 0;
  };

  const nextSteps = (e) => {};

  return (
    <div>
      <div className=" flex flex-row items-center justify-center  m-[10px]  ">
        <div className="flex justify-center items-center text-2xl w-[50px] h-[50px] text-white  font-medium rounded-full bg-prograpy ">
          1
        </div>
        <div className="w-[300px] h-[4px] bg-prograpy mx-[20px]"></div>

        <div className="flex justify-center items-center text-2xl w-[50px] h-[50px] text-white font-medium rounded-full bg-prograpy ">
          2
        </div>
        <div className="w-[300px] h-[4px] bg-prograpy mx-[20px]"></div>
        <div className="flex justify-center items-center text-2xl w-[50px] h-[50px] text-white font-medium rounded-full bg-prograpy">
          3
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
