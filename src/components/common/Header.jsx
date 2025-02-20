import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-black bg-opacity-50">
      <div className="flex items-center h-[80px] max-w-[1140px] mx-auto ">
        <img src={logo} alt="Logo" className="w-[138px]" />
        <button className="w-[168px] h-[48px] bg-prograpy text-white font-extrabold rounded-3xl ml-auto">
          지원하기
        </button>
      </div>
    </div>
  );
};

export default Header;
