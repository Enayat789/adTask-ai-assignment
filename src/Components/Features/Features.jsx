import React from "react";
import infiniteCircle from "../../assets/Images/infiniteCircle.png";
import mlCircle from "../../assets/Images/mlCircle.png";
import pieChart from "../../assets/Images/pieChart.png";
import staticsImg from "../../assets/Images/statisticsImg.png";
import thunderImg from "../../assets/Images//thunderImg.png";

const Features = () => {
  return (
    <div className="flex w-full h-auto relative items-center justify-center my-8 gap-6 ">
      {/* first section */}
      <div className="flex flex-col relative items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-[26%] h-[75vh] border border-gray-700 rounded-2xl p-4">
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />

        <div className="">
          <img src={infiniteCircle} alt="infiniteCircle" />
        </div>
        <div className="flex flex-col p-4 px-6 gap-2 text-sm">
          <h1 className="font-bold">Reach Target Audience</h1>
          <p className="font-extralight">
            Pinpoint the perfect audience with precision. Our AI-driven
            targeting ensures every message resonates where it matters most.
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="flex flex-col items-center justify-between w-[26%] h-[75vh]">
        {/* 1st */}
        <div className="flex flex-col w-full h-[48%] relative items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 border  border-gray-700 rounded-2xl">
          <img
            src="Ellipse5.png"
            alt=""
            className="absolute top-0 w-full left-0"
          />
          <div className=" relative flex items-center pt-4 justify-center w-full h-[55%]">
            <div className=" relative p-2 border border-gray-700 rounded-2xl">
              <img src={mlCircle} alt="mlCircle" />
            </div>
            <div className="absolute w-[35%] flex flex-col items-center right-0">
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
          <img src="Ellipse5.png" alt="" className="absolute top-0 left-0" />
          <div className="flex items-center pt-4 justify-center w-full h-[55%] gap-4 ">
            <img src={staticsImg} alt="statics-Img" />
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
      <div className="flex flex-col relative bg-gradient-to-tl  from-gray-800 to-gray-900 items-center justify-between w-[26%] h-[75vh] border border-gray-700 rounded-2xl p-4">
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />
        <div className=" w-full h-full flex items-center justify-center">
          <img src={thunderImg} alt="img" />
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
