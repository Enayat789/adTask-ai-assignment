import React from "react";

export default function LowerMid() {
  return (
    <div
      className="w-[352px] h-[280px] border relative overflow-hidden border-gray-500 rounded-2xl "
      style={{
        background: "linear-gradient(158.19deg, #0B0B0B 5.17%, #1D2333 98.61%)",
      }}
    >
      <img src="Ellipse5.png" alt="" className="absolute" />
      <div
        className="w-[120px] h-[115px] mt-[38px] ml-[63px] border  rounded-2xl flex bg-[#78819936]"
        style={{
          borderImageSource:
            "linear-gradient(0deg, #000000, #000000), linear-gradient(270deg, #7687B5 0%, #333B4F 100%)",
          borderImageSlice: 1,
        }}
      >
        <div className="flex gap-4 ml-2 items-end mb-2">
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
      </div>
      <div className="w-[102px] h-[102px] ml-[189px] mt-[-105px]">
        <img
          src="Vector(11).png"
          alt=""
          className="w-[31.87px] h-[31.88px] mt-[10.62px] ml-[59.5px]"
        />
        <img
          src="Vector(10).png"
          alt=""
          className="w-[84.01px] h-[84.04px] mt-[-33px] ml-[8.64px]"
        />
      </div>

      <div className="mt-4 ml-[30px]">
        <p className="font-semibold text-[14px] mb-2">
          Smart Marketing Insights
        </p>
        <p className="font-[300] text-[12px]">
          Unlock actionable data to guide every decision.
          <br /> Stay ahead of trends, refine your strategies, and make
          confident moves with powerful analytics.
        </p>
      </div>
    </div>
  );
}
