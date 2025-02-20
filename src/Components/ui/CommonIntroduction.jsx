import React from "react";

const CommonIntroduction = ({ heading, lastPara, content1, content2 }) => {
  return (
    <div className="flex w-full h-[50vh] relative flex-col items-center justify-center md:p-4 gap-8">
      <img
        src="Ellipse 9.png"
        alt="Background"
        className="absolute inset-0 w-auto m-auto h-full object-cover opacity-70"
      />
      <button className=" border relative border-gray-700 bg-gradient-to-r from-gray-900 to-gray-950 p-4 text-xs rounded-full py-3 px-6">
        {heading}
      </button>

      <div className="flex items-center relative justify-evenly w-full gap-2">
        <hr className=" w-[15%] md:w-[20%] h-[2px] border-0 bg-gradient-to-r from-[#0D111A] to-[#5C73AE]" />

        <div className="flex justify-center text-center">
          <h2 className=" text-xl md:text-4xl font-sans">
            {content1} <br />
            <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] text-transparent bg-clip-text">
              {content2}
            </span>
          </h2>
        </div>
        <hr className="w-[15%] md:w-[20%] h-[2px] border-0 bg-gradient-to-l from-[#0D111A] to-[#5C73AE]" />
      </div>

      <p className="font-sans text-xs text-wrap md:text-base">{lastPara}</p>
    </div>
  );
};

export default CommonIntroduction;
