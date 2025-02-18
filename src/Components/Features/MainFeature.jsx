import React from "react";
import Features from "./Features";
// import { TargetAudienceCard } from "./TargetAudienceCard";
import Introduction from "../ui/CommonIntroduction";
import LowerMid from "./LowerMid";

const MainFeature = () => {
  return (
    <>
      <Introduction
        heading={"FEATURES"}
        content1={"Feature packed to make"}
        content2={"Digital marketing easier and affordable."}
        lastPara={
          "Experience Intelligent Features to optimize your marketing efforts."
        }
      />
      <Features />
      {/* <LowerMid /> */}
      {/* <TargetAudienceCard /> */}
    </>
  );
};

export default MainFeature;
