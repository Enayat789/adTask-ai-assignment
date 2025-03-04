import React from "react";
import WorkswithImages from "./WorkwithImages";

const WorksWith = () => {
  return (
    <div className="w-full h-auto lg:h-[40vh] flex flex-col items-center justify-center p-4 gap-4">
      <div className="">
        <p>Adtask AI works with :</p>
      </div>
      <div className=" flex flex-wrap sm:grid sm:grid-cols-3 md:flex w-full h-auto md:h-[19vh] max-w-5xl items-center justify-between gap-4">
        {WorkswithImages.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition group gap-2"
          >
            <div className=" w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 flex flex-col items-center justify-center transform transition-transform duration-500 translate-y-3 group-hover:translate-y-0 cursor-pointer text-center border border-gray-400 rounded-2xl">
              <img src={work.image} alt={work.name} />
            </div>

            <p className="opacity-0 transition-all duration-500 group-hover:opacity-100">
              {work.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksWith;
