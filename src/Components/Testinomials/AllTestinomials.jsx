import React from "react";
import testinomialsData from "./TestinomialsData";

const AllTestinomials = () => {
  return (
    <div className="w-full h-auto md:h-[60vh] items-center justify-between flex flex-wrap max-w-6xl m-auto">
      {testinomialsData.map((data, index) => (
        <div
          key={index}
          className="w-[30%] h-[40%] flex flex-col items-start justify-between rounded-2xl border border-gray-700 p-8 gap-2 text-sm"
        >
          <p className="font-extralight">{data.para}</p>
          <h1 className="font-bold">- {data.heading} </h1>
        </div>
      ))}
    </div>
  );
};

export default AllTestinomials;
