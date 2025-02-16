import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-4">
      <div className="bg-gray-950 w-full h-auto px-8 py-2 max-w-6xl flex justify-between items-center text-white rounded-2xl border border-gray-600">
        <h1 className="font-extrabold cursor-pointer text-lg">adTask.ai</h1>

        <div className="flex w-[64%] justify-between items-center font-extralight">
          <ul className=" flex space-x-10 ">
            <li className="flex items-center gap-2 cursor-pointer transition group">
              Products
              <FaCaretDown className="  transform transition-transform duration-700 group-hover:rotate-180" />
            </li>
            <li className="flex items-center gap-2 cursor-pointer transition group">
              Tools
              <FaCaretDown className="  transform transition-transform duration-700 group-hover:rotate-180" />
            </li>
            <li className=" cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex gap-6">
            <button className="border border-gray-400 cursor-pointer bg-gray-900 p-2 px-8 rounded-full">
              Log in
            </button>
            <button className="border border-gray-400 cursor-pointer bg-gray-900 p-2 px-6 rounded-full">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="w-12 bg-white h-1 rounded-full" /> */}
    </div>
  );
};

export default Navbar;
