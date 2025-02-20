import React from "react";
import tickerImages from "./TickerImages";

const TickerScroll = () => {
  return (
    <div className="flex w-full h-[20vh] lg:h-[30vh] items-center md:items-end p-4 overflow-hidden">
      <div className="flex w-max h-min gap-20 animate-scroll justify-between items-center">
        {tickerImages.concat(tickerImages).map((img, index) => (
          <img src={img.url} alt="images" key={index} />
        ))}
      </div>
    </div>
  );
};

export default TickerScroll;
