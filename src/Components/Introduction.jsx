import React from "react";
import { BsStars } from "react-icons/bs";
import reacTangle from "/Rectangle2.png";

const Introduction = () => {
  return (
    <div className=" w-full max-w-7xl h-[70vh] m-auto relative flex flex-col items-center justify-evenly mt-6 p-4">
      {/* grid lines for background */}
      <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"></div>
      <img
        src="Rectangle5.png"
        alt="Background"
        className="absolute -z-10 inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="relative flex items-center p-4 px-6 gap-2 text-xs uppercase bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl cursor-pointer">
        <div className="absolute top-0 left-0 h-full w-[8px] bg-white opacity-10 animate-move -rotate-6" />
        <BsStars size={20} />
        <span> Transform Your Digital Presence with AI Agents</span>
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

      <h1 className="relative z-10 text-4xl md:text-9xl font-sans text-gray-300 transform transition-transform duration-800 ease-in-out hover:drop-shadow-2xl hover:scale-105">
        adTask.ai
      </h1>
      <p className="max-w-3xl text-center relative">
        Stop struggling with marketing decisions. Our AI assistant analyzes your
        business, creates personalized strategies, and helps you execute them -
        all in real-time.
        <span className="w-1 inline-flex relative top-1 h-6 bg-white ml-1 animate-pulse"></span>
      </p>
      <div className="flex w-full items-center flex-col gap-4">
        <div className="flex items-center justify-center w-full">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full border border-transparent p-[1px]">
            {/* Moving Border Effect */}
            <div
              className="absolute inset-0 w-full h-full animate-move-border rounded-full bg-[conic-gradient(#6b7280_20deg,transparent_120deg)] 
             mask-image: radial-gradient(circle, transparent 55%, black 60%);"
            ></div>

            {/* Inner Button */}
            <button className="relative cursor-pointer z-10 w-[185px] h-[45px] flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gray-700 to-gray-800 ">
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
