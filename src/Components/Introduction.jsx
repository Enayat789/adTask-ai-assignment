import React from "react";
import { BsStars } from "react-icons/bs";

const Introduction = () => {
  return (
    <div className="w-full  max-w-7xl h-[50vh] md:h-[70vh] m-auto relative flex flex-col items-center justify-between md:justify-evenly mt-6 p-4">
      {/* grid lines for background */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-90"></div>

      {/* Traingle image in the background */}
      <img
        src="Rectangle 4.png"
        alt="Background"
        className="absolute -z-10 inset-0 w-full h-full object-cover opacity-60"
      />

      <img
        src="Rectangle5.png"
        alt="Background"
        className="absolute -z-10 inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="relative w-[95%] md:w-auto z-10 flex items-center p-3 md:p-4 md:px-6 gap-2 text-xs md:text-xs uppercase bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl cursor-pointer">
        {/* moving line from left to right */}
        <div className="absolute top-0 left-0 h-full w-[8px] bg-white opacity-10 animate-move -rotate-6" />
        <BsStars size={20} />
        <span>Transform Your Digital Presence with AI Agents</span>
        <style>
          {`
                    @keyframes moveRight {
                        0% { left: 0; }
                        100% { left: 95%; }
                    }
                    .animate-move {
                        animation: moveRight 3s linear infinite;
                    }
                    `}
        </style>
      </div>

      <h1 className="relative z-10 text-6xl md:text-9xl font-sans text-gray-400 transform transition-all duration-700 ease-in-out hover:[text-shadow:_0_4px_8px_#C7D7FF] ">
        adTask.ai
      </h1>
      <p className="max-w-3xl text-sm text-balance md:text-lg text-center relative">
        Stop struggling with marketing decisions. Our AI assistant analyzes your
        business, creates personalized strategies, and helps you execute them -
        all in real-time.
        <span className="w-1 inline-flex relative top-1 h-5 md:h-6 bg-white ml-1 animate-pulse"></span>
      </p>
      <div className="flex w-full items-center flex-col gap-4">
        {/* btn */}
        <div className="flex items-center justify-center w-full">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full border border-transparent p-[2px]">
            {/* Moving Border Effect */}
            <div
              className="absolute inset-0 w-full h-full animate-move-border rounded-2xl bg-[conic-gradient(#6b7280_80deg,transparent_200deg)] 
             mask-image: radial-gradient(circle, transparent 55%, black 60%);"
            ></div>

            {/* Inner Button */}
            <button className="relative cursor-pointer z-10 w-[185px] h-[47px] flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gray-700 to-gray-800   ">
              <span className="text-white font-semibold z-20">
                Start Free Trial
              </span>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-300">Try AdTask AI free for 30 days</p>
      </div>
    </div>
  );
};

export default Introduction;
