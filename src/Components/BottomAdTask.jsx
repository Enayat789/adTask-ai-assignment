import React from "react";

const BottomAdTask = () => {
  return (
    <div className="w-full h-[80vh] relative max-w-6xl m-auto flex flex-col items-center justify-evenly">
      {/* background traingle img */}
      <img
        src="Rectangle5.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"></div>

      <div className=" relative w-full h-[20%] flex items-end justify-center text-8xl text-gray-700">
        adTask.ai
      </div>
      <div className=" relative w-2xl h-[60%] flex flex-col items-center justify-evenly">
        <div className="flex justify-center text-center">
          <h2 className="text-5xl font-serif">
            Are you ready to boost
            <br />
            <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] text-transparent bg-clip-text">
              your Digital Presence?
            </span>
          </h2>
        </div>
        <div className="flex flex-col w-full items-center gap-6">
          <button className=" relative border z-10 w-[30%] border-gray-400 cursor-pointer bg-gradient-to-r from-gray-600 to-gray-700 text-lg font-light p-3 rounded-full">
            Start Free Trail
          </button>
          <button className="relative border z-10 w-[30%] border-gray-400 cursor-pointer bg-gradient-to-r from-gray-600 to-gray-700 text-lg font-light p-3 rounded-full">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomAdTask;
