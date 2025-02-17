import React from "react";
import littleBtn from "../../assets/service-icons/little-btn.png";

const Frame = () => {
  return (
    <div className="w-full h-auto flex items-center justify-between">
      <img src={littleBtn} alt="icon" className="w-6 h-7" />

      <div className="relative w-[55%] h-full flex items-center justify-center">
        <span className="absolute w-12 h-1 bg-white" />
        <span
          className="w-[80%] h-[2px] bg-transparent border border-solid border-transparent"
          style={{
            borderImage:
              "linear-gradient(90deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
          }}
        />
      </div>
      <img src={littleBtn} alt="icon" className="w-6 h-7" />

      <div className="relative w-[55%] h-full flex items-center justify-center">
        <span className="absolute w-12 h-1 bg-white" />
        <span
          className="w-[80%] h-[2px] bg-transparent border border-solid border-transparent"
          style={{
            borderImage:
              "linear-gradient(90deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
          }}
        />
      </div>
      <img src={littleBtn} alt="icon" className="w-6 h-7" />

      <div className="relative w-[55%] h-full flex items-center justify-center">
        <span className="absolute w-12 h-1 bg-white" />
        <span
          className="w-[80%] h-[2px] bg-transparent border border-solid border-transparent"
          style={{
            borderImage:
              "linear-gradient(90deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
          }}
        />
      </div>
      <img src={littleBtn} alt="icon" className="w-6 h-7" />
    </div>
  );
};

export default Frame;
