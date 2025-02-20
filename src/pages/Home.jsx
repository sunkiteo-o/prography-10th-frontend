import React from "react";
import Header from "../components/common/Header";
import DefaultLayout from "../layout/DefaultLayout";
import triangle_blue from "../assets/triangle_blue.png";
import triangle_pink from "../assets/triangle_pink.png";
import triangle_white from "../assets/triangle_white.png";
import triangle_yellow from "../assets/triangle_yellow.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Header />
      <div className="flex flex-col justify-center items-center w-full pt-[80px] overflow-scroll scrollbar-hide ">
        <div className="flex flex-col  w-[1140px] h-screen">
          <div className="py-[120px] mt-[100px] text-6xl text-white font-extrabold">
            <p className="">안녕하세요.</p>
            <p className="py-[35px]">새로운 가치를 만들어가는 IT 커뮤니티,</p>
            <p>
              <span className="text-prograpy">Prography</span> 입니다.
            </p>
          </div>

          <div className="text-[24px] pb-[50px] text-white font-medium">
            드디어<span className="text-prograpy px-[10px]">Prography</span>10기
            모집이 시작되었습니다.
          </div>

          <div className="py-[100px]">
            <div className=" text-[50px] text-white font-extrabold ">
              모집 분야
              <div className="text-[24px] text-[#9FA0AB] font-medium pt-[10px]">
                총 6개의 파트를 모집합니다.
              </div>
            </div>

            <div className=" flex flex-wrap items-center text-white text-[30px] font-extrabold m-[-10px] py-[40px]">
              <div className="bg-[#FFB904] px-[48px] py-[28px] rounded-full m-[10px]">
                Product Owner
              </div>
              <div className="bg-[#FF6929] px-[48px] py-[28px] rounded-full m-[10px]">
                Designer
              </div>
              <div className="bg-prograpy px-[48px] py-[28px] rounded-full m-[10px]">
                iOS
              </div>
              <div className="bg-prograpy px-[48px] py-[28px] rounded-full m-[10px]">
                Android
              </div>
              <div className="bg-prograpy px-[48px] py-[28px] rounded-full m-[10px]">
                Frontend(React)
              </div>
              <div className="bg-prograpy px-[48px] py-[28px] rounded-full m-[10px]">
                Backend(Spring)
              </div>
            </div>
          </div>

          <div className="text-[24px] text-[#E1E3ED] py-[100px] font-medium">
            <div className="flex flex-row  items-center py-[20px]">
              <img
                src={triangle_pink}
                alt="triangle_pink"
                className="w-[25px] h-[25px] items-center justify-center"
              />
              <div className="pl-[25px]">
                새로운 가치를 만들어내는데 가슴이 두근거리신다면,
              </div>
            </div>

            <div className="flex flex-row  items-center py-[20px]">
              <img
                src={triangle_pink}
                alt="triangle_pink"
                className="w-[25px] h-[25px] items-center justify-center"
              />
              <div className="pl-[25px]">
                열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
              </div>
            </div>

            <div className="flex flex-row  items-center py-[20px]">
              <img
                src={triangle_pink}
                alt="triangle_pink"
                className="w-[25px] h-[25px] items-center justify-center"
              />
              <div className="pl-[25px]">
                탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
              </div>
            </div>
          </div>

          <div className="flex flex-col  py-[40px] text-center ">
            <div className=" text-6xl text-white font-extrabold py-[20px] pt-[50px]">
              " <span className="text-prograpy">프로</span>답게, 재밌게 "
            </div>
            <div className="text-[24px] text-[#E1E3ED] py-[20px] font-medium">
              재미있는 작당을 함께 만들어갈 10기에 합류하세요.
            </div>
          </div>

          <div className="flex py-[100px] items-center justify-center">
            <button
              className="w-[300px] h-[100px] bg-prograpy rounded-full"
              onClick={() => navigate("/funnel")}
            >
              <div className=" text-[30px] text-white  font-bold">지원하기</div>
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
