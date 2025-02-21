import React from "react";
import pieChart from "../../assets/Images/pieChart.png";
import thunderImg from "../../assets/Images//thunderImg.png";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex w-full h-auto relative items-center justify-evenly my-8 md:px-4 gap-6">
      {/* first section */}
      <div className="flex flex-col m-auto lg:m-0 relative overflow-hidden items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-[95%] h-[65vh] sm:w-[70%] md:w-[100%] md:h-[70vh] lg:w-[100%] xl:max-w-[26%] lg:h-[75vh] border border-gray-700 rounded-2xl p-4">
        {/* background images */}
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />

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
            className="w-[395.32px] sm:h-[395.32px] sm:mt-[45.34px] opacity-30 relative"
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
        <div className="flex flex-col text-center md:text-start p-4 px-6 gap-2 md:text-sm">
          <h1 className="font-extrabold">Reach Target Audience</h1>
          <p className="font-extralight">
            Pinpoint the perfect audience with precision. Our AI-driven
            targeting ensures every message resonates where it matters most.
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="flex flex-col md:flex-row md:order-last lg:order-none md:col-span-2 lg:flex-col items-center justify-between w-full h-auto md:w-full md:m-auto lg:m-0 md:h-[35vh] gap-6 lg:w-[100%] xl:max-w-[26%] lg:h-[75vh]">
        {/* middle  1st */}
        <div className="flex flex-col m-auto lg:m-0 relative overflow-hidden items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-[95%] h-[50vh] sm:w-[70%] md:w-full md:h-full border border-gray-700 rounded-2xl p-4">
          <img
            src="Ellipse5.png"
            alt=""
            className="absolute top-0 w-full left-0"
          />
          <div className="relative flex items-center justify-center w-full h-[55%]">
            <div className="relative flex w-[50%] h-[90%] md:w-[40%] md:h-[90%] px-2 py-2 border border-gray-600 rounded-2xl">
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
            <div className="absolute w-[25%] md:w-[30%] flex flex-col items-center right-0">
              <p className="text-xs bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                GEN AI Powered
              </p>
              <hr className="w-full" />
            </div>
          </div>

          <div className="flex flex-col relative text-center md:h-[40%] md:text-start px-4 py-8 md:py-2 gap-2 md:text-sm">
            <h1 className="font-bold">Marketing made Easier</h1>
            <p className="font-extralight">
              Save time and simplify campaign management. Let automated
              workflows handle the heavy lifting, so you can focus on
              creativity.
            </p>
          </div>
        </div>

        {/* middle 2nd */}
        <div className="flex flex-col m-auto lg:m-0 relative overflow-hidden items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-[95%] h-[50vh] sm:w-[70%] md:w-full md:h-full border border-gray-700 rounded-2xl p-4">
          <img
            src="Ellipse5.png"
            alt=""
            className="absolute top-0 w-full left-0"
          />
          <div className="flex items-center justify-center w-full h-[60%] md:h-[55%] gap-8 md:gap-4 ">
            <div className="flex gap-4 relative items-end justify-center pb-2 w-[35%] md:w-[39%] h-[55%] md:h-[85%] border border-gray-600 rounded-2xl ">
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
          <div className="flex flex-col relative text-center md:h-[40%] md:text-start px-4 py-6 md:py-2 lg:py-0 gap-2 md:text-sm">
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
      <div className="flex flex-col m-auto lg:m-0 relative overflow-hidden items-center justify-between bg-gradient-to-tl from-gray-800 to-gray-900 w-[95%] h-[65vh] sm:w-[70%] md:w-[100%] md:h-[70vh] lg:w-[100%] xl:max-w-[26%] lg:h-[75vh] border border-gray-700 rounded-2xl p-4">
        <img
          src="Ellipse5.png"
          alt=""
          className="absolute top-0 w-full left-0"
        />

        {/*  */}
        <div className="relative items-center justify-center w-full h-[80%] sm:h-[80%] lg:h-[60%]">
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[20%] mt-[20%] w-6 h-6 animate-moveInwardWithPause1"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute right-[20%] mt-[15%] w-6 h-6 animate-moveInwardWithPause2"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute ml-[15%] mt-[85%] w-6 h-6 animate-moveInwardWithPause3"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute right-[5%] top-[50%] w-6 h-6 animate-moveInwardWithPause4"
          />
          <img
            src="Vector(26).png"
            alt=""
            className="absolute right-[20%] top-[80%] w-6 h-6 animate-moveInwardWithPause5"
          />

          {/* Background Circles */}
          <img src="Ellipse6.png" alt="" className="w-[90%] m-auto h-full " />
          <img
            src="Ellipse7.png"
            alt=""
            className=" w-[70%] h-[75%] absolute top-[15%] left-[15%] "
          />

          <img
            src={thunderImg}
            alt=""
            className="absolute w-[50%] h-[50%] top-[25%] left-[30%]"
          />
        </div>

        <div className="flex flex-col text-center md:text-start gap-2 p-4 py-2 md:px-4 text-sm">
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
