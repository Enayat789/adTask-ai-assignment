import React from "react";
import Introduction from "../ui/CommonIntroduction";
import AllServices from "./AllServices";

const Services = () => {
  return (
    <>
      <Introduction
        heading={"SERVICES"}
        content1={"Innovative Services"}
        content2={"for Growth."}
      />
      <AllServices />
    </>
  );
};

export default Services;
