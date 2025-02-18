import React from "react";
import youtubeLogo from "/youtube-logo2.webp";

const Video = () => {
  return (
    <div className="w-full p-2 relative">
      <div className="relative m-auto w-full h-[55vh] max-w-4xl overflow-hidde border-2 border-gray-600 flex flex-col items-center justify-center rounded-2xl">
        {/* <iframe src="" frameborder="0"></iframe> */}
        {/* <div
          className="absolute bg-red-400 inset-0 w-full h-full animate-move-border rounded-2xl bg-[conic-gradient(#ff0000_20deg, transparent 120deg)]
        mask-image: radial-gradient(circle, transparent 55%, black 60%);"
        ></div> */}
        <div className="absolute -z-10 inset-0 w-full h-full">
          <div className="w-full h-full rounded-2xl animate-border-crawl" />
        </div>

        <h1 className=" relative z-20 bg-gradient-to-b from-gray-50 to-gray-700 text-transparent bg-clip-text text-6xl">
          adTask.ai
        </h1>
        <img
          src={youtubeLogo}
          alt="youtube-logo"
          className=" absolute z-20 w-20 cursor-pointer"
        />
      </div>

      {/* chat icon  */}
      <div
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex items-center cursor-pointer justify-center
        w-[42px] md:w-[52.5px] h-[42px] md:h-[52.5px] bg-[#1E212A] rounded-full
        shadow-[0px_0px_5px_2px_#C7D7FF]"
      >
        <img
          src="Vector (11).png"
          alt="Chat Icon"
          className="w-[18px] h-[18px] md:w-[24px] md:h-[23.25px]"
        />
        <span
          className="absolute -top-[4px] -right-[4px] flex h-[14px] w-[14px] md:h-[16.5px] md:w-[16.5px]
          items-center justify-center rounded-full bg-red-600 text-white
          text-[8px] md:text-[10px] font-bold leading-none
          shadow-[0px_0px_3px_1px_#C7D7FF]"
        >
          1
        </span>
      </div>
    </div>
  );
};

export default Video;
