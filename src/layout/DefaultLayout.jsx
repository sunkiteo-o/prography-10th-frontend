import React, { Children } from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#000000]">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
