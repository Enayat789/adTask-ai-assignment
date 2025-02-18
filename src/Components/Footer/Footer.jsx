import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full h-[45vh] p-4 border-t border-t-gray-500 flex flex-col items-center justify-between">
      <div className=" w-full h-full flex items-center justify-evenly gap-4">
        <div className="w-[30%] flex flex-col gap-4">
          <h2 className="text-8xl font-sans">adTask.ai</h2>

          <div className=" flex flex-col h-auto gap-2 px-2 text-xs">
            <span className="gap-4 flex items-center underline">
              <MdOutlineEmail size={25} className="text-blue-300" />{" "}
              enayatullah4905@gmail.com
            </span>
            <span className="gap-4 flex items-center">
              <CiLocationOn size={25} className="text-blue-300" /> Kolkata, West
              Bengal
            </span>
          </div>
        </div>
        {/* <div className="w-[40%] flex items-center justify-evenly bg-red-200">
          <div>
            <h2>Utilities</h2>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Tools</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2>Social</h2>
            <ul>
              <li>X</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div> */}
        <div className="w-full sm:w-[60%] lg:w-[50%] flex items-start justify-evenly p-6 ">
          {/* Utilities Section */}
          <div className=" text-center">
            <h2 className="text-xl font-semibold mb-2">Utilities</h2>
            <ul className="space-y-1">
              <li className="text-gray-500 cursor-pointer">Home</li>
              <li className="text-gray-500 cursor-pointer">Product</li>
              <li className="text-gray-500 cursor-pointer">Tools</li>
              <li className="text-gray-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">Social</h2>
            <ul className="space-y-1">
              <li className="text-gray-500 cursor-pointer">X</li>
              <li className="text-gray-500 cursor-pointer">LinkedIn</li>
              <li className="text-gray-500 cursor-pointer">Instagram</li>
              <li className="text-gray-500 cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm">All right reserved © 2025 addTask.ai</p>
    </div>
  );
};

export default Footer;
