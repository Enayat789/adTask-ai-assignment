import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const ContactDetails = () => {
  return (
    <div className="w-[50%] h-full flex flex-col items-start justify-between">
      <div className="flex justify-center items-start">
        <h2 className="text-5xl font-sans">
          Ask whatever you have
          <br />
          <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] text-4xl text-transparent bg-clip-text">
            in your mind now
          </span>
        </h2>
      </div>

      <p className="text-md font-extralight w-[70%]">
        Whether you have questions or are ready to discuss your business, we’re
        here to help. Reach out today.
      </p>

      <div className=" flex flex-col h-auto gap-4 px-2">
        <span className="gap-2 flex items-center">
          <MdOutlineEmail size={30} className="text-blue-300" />{" "}
          enayatullah4905@gmail.com
        </span>
        <span className="gap-4 flex items-center">
          <FaPhone size={25} className="text-blue-300 pl-1" /> 6299524905
        </span>
        <span className="gap-4 flex items-center">
          <CiLocationOn size={30} className="text-blue-300" /> Kolkata, West
          Bengal
        </span>
      </div>
    </div>
  );
};

export default ContactDetails;
