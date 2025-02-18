import React, { Children } from "react";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#000000]">
        <Header />
        <div className="flex flex-col justify-center items-center w-full pt-[80px] overflow-scroll scrollbar-hide ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
