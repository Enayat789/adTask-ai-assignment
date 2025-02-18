import React from "react";
import CommonIntroduction from "../ui/CommonIntroduction";
import AllTestinomials from "./AllTestinomials";
// import Introduction from
const Testinomials = () => {
  return (
    <>
      <CommonIntroduction
        heading={"TESTINOMIALS"}
        content1={"Trusted by "}
        content2={"satisfied clients"}
        lastPara={"Discover how we’ve driven growth and innovation."}
      />
      <AllTestinomials />
    </>
  );
};

export default Testinomials;
