import React from "react";
import youtubeLogo from "/youtube-logo2.webp";

const Video = () => {
  return (
    <div className="relative m-auto w-full h-[55vh] max-w-4xl flex flex-col items-center justify-center border rounded-2xl">
      {/* <iframe src="" frameborder="0"></iframe> */}
      <h1 className=" relative bg-gradient-to-b from-gray-50 to-gray-700 text-transparent bg-clip-text text-6xl">
        adTask.ai
      </h1>
      <img
        src={youtubeLogo}
        alt="youtube-logo"
        className=" absolute w-20 cursor-pointer"
      />
    </div>
  );
};

export default Video;
