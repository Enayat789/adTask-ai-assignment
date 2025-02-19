import React from "react";
import infiniteCircle from "../../assets/Images/infiniteCircle.png";
import pieChart from "../../assets/Images/pieChart.png";
import thunderImg from "../../assets/Images//thunderImg.png";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex w-full h-auto relative items-center justify-center my-8 gap-6 ">
      {/* first section */}
      <div className="flex flex-col relative overflow-hidden items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-full md:w-[26%] h-[75vh] border border-gray-700 rounded-2xl p-4">
        {/* background images */}
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />

        {/* Images circle */}
        {/* <img src={infiniteCircle} alt="infiniteCircle" /> */}
        <div className="flex flex-col relative items-center justify-center">
          <img
            src="Rectangle5.png"
            alt=""
            className="absolute h-[600px] w-[500px] mt-[50px]"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[-200px] vector-animation1"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[180px] mt-[-40px] vector-animation2"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[180px] mt-[250px] vector-animation3"
          />
          <img
            src="Ellipse6.png"
            alt=""
            className="w-[395.32px] h-[395.32px] mt-[45.34px] opacity-25 relative"
          />
          <div className="flex flex-col justify-center items-center absolute mt-[120px]">
            <img src="Ellipse20.png" alt="" className="w-[12px] h-[12px]" />
            <img
              src="Ellipse21.png"
              alt=""
              className="absolute animate-ellipse6 mt-[-100px]"
            />
            <img
              src="radarCircle.png"
              alt=""
              className="ml-[-51px] mt-[-7px]"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col p-4 px-6 gap-2 text-sm">
          <h1 className="font-bold">Reach Target Audience</h1>
          <p className="font-extralight">
            Pinpoint the perfect audience with precision. Our AI-driven
            targeting ensures every message resonates where it matters most.
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="flex flex-col items-center justify-between w-full md:w-[26%] h-[75vh]">
        {/* 1st */}
        <div className="flex flex-col w-full h-[48%] relative items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 border  border-gray-700 rounded-2xl">
          <img
            src="Ellipse5.png"
            alt=""
            className="absolute top-0 w-full left-0"
          />
          <div className="relative  flex items-center pt-4 justify-center w-full h-[55%]">
            <div className="relative flex w-[40%] h-[90%] px-2 py-2 border border-gray-600 rounded-2xl">
              <img
                src="Vector (13).png"
                alt=""
                className="absolute w-[70%] transform origin-center animate-spin-slow"
              />
              <img
                src="Vector (13).png"
                alt=""
                className="absolute w-[50%] p-2 right-0 bottom-0 transform origin-center animate-spin-slow"
              />
            </div>
            <div className="absolute w-[30%] flex flex-col items-center right-0">
              <p className="text-xs bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                GEN AI Powered
              </p>
              <hr className="w-full" />
            </div>
          </div>
          <div className="flex flex-col h-[40%] bg-gray-60 pb-6 px-8 pt-0 gap-2 text-sm">
            <h1 className="font-bold">Marketing made Easier</h1>
            <p className="font-extralight">
              Save time and simplify campaign management. Let automated
              workflows handle the heavy lifting, so you can focus on
              creativity.
            </p>
          </div>
        </div>

        {/* 2nd */}
        <div className="flex flex-col w-full h-[48%] relative items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900  border-gray-700 rounded-2xl">
          {/* <img src="Ellipse5.png" alt="" className="absolute top-0 left-0" /> */}
          <div className="flex items-center pt-4 justify-center w-full h-[55%] gap-4 ">
            <div className="flex gap-4 relative items-end justify-center pb-2 w-[35%] h-[80%] border border-gray-600 rounded-2xl ">
              <img
                src="Ellipse5.png"
                alt=""
                className="absolute top-0 left-0 rounded-2xl"
              />

              <img
                src="Rectangle 49.png"
                alt=""
                className="w-[14px] h-[91px] rounded-[14px] animate-heightChange1"
              />
              <img
                src="Rectangle 50.png"
                alt=""
                className="w-[14px] h-[48px] rounded-[14px] animate-heightChange2"
              />
              <img
                src="Rectangle 51.png"
                alt=""
                className="w-[14px] h-[67px] rounded-[14px] animate-heightChange3"
              />
              <img
                src="Rectangle 52.png"
                alt=""
                className="w-[14px] h-[27px] rounded-[14px] animate-heightChange4"
              />
            </div>

            <img src={pieChart} alt="pie-chart" />
          </div>
          <div className="flex flex-col h-[40%] bg-gray-60 pb-6 px-8 pt-0 gap-2 text-sm">
            <h2 className="font-bold">Smart Marketing Insights</h2>
            <p className="font-extralight">
              Unlock actionable data to guide every decision. Stay ahead of
              trends, refine your strategies, and make confident moves with
              powerful analytics.
            </p>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="flex flex-col relative bg-gradient-to-tl from-gray-800 to-gray-900 items-center justify-between w-full md:w-[26%] h-[75vh] border border-gray-700 rounded-2xl p-4">
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />
        <div className="relative w-full h-full">
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[35px] mt-[70px] w-6 h-6 animate-moveInwardWithPause1"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[250px] mt-[20px] w-6 h-6 animate-moveInwardWithPause2"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[30px] mt-[270px] w-6 h-6 animate-moveInwardWithPause3"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[320px] mt-[170px] w-6 h-6 animate-moveInwardWithPause4"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[240px] mt-[340px] w-6 h-6 animate-moveInwardWithPause5"
          />

          {/* Background Circles */}
          <img
            src="Ellipse6.png"
            alt=""
            className="w-[392px] h-[362px] mt-[49px]"
          />
          <img
            src="Ellipse7.png"
            alt=""
            className="w-[266px] h-[266px] mt-[-310px] ml-[40px]"
          />

          <img
            src={thunderImg}
            alt=""
            className="w-[139.8px] h-[223.71px] mt-[-250px] ml-[120px]"
          />
        </div>

        <div className="flex flex-col p-4 px-4 gap-2 text-sm">
          <h1 className="font-bold">
            Intelligent Agents to Optimize your Reach
          </h1>
          <p className="font-extralight">
            Scale and refine your marketing with AI-powered agents. They track
            performance in real-time to help you reach more customers
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
