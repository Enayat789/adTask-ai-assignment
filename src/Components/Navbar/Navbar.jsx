import React, { useState } from "react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full relative flex flex-col items-center justify-center md:my-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-950 relative w-full h-auto px-8 p-5 md:p-2 max-w-6xl flex justify-between items-center text-white md:rounded-2xl md:border border-gray-600">
        {/* Grid Lines */}
        <div className="absolute z-0 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"></div>

        <h1 className="font-extrabold relative cursor-pointer text-xl md:text-lg">
          adTask.ai
        </h1>

        {/* Desktop Menu */}
        <div className="w-[64%] relative hidden md:flex justify-between items-center font-extralight">
          <ul className="flex space-x-6">
            <li className="flex items-center gap-2 cursor-pointer transition group">
              Products
              <FaCaretDown className="transform transition-transform duration-300 group-hover:rotate-180" />
            </li>
            <li className="flex items-center gap-2 cursor-pointer transition group">
              Tools
              <FaCaretDown className="transform transition-transform duration-300 group-hover:rotate-180" />
            </li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex gap-4">
            <button className="border border-gray-400 cursor-pointer bg-gray-900 py-2 px-6 rounded-full">
              Log in
            </button>
            <button className="border border-gray-400 cursor-pointer bg-gray-900 py-2 px-6 rounded-full">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div
          className="md:hidden z-10 flex cursor-pointer text-white"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={28} /> : <FaBars size={28} />}
        </div>

        {isOpen && (
          <div className="absolute z-50 top-[100%] left-0 w-full h-screen flex justify-center bg-gradient-to-t from-gray-800 to-gray-950 md:hidden">
            {/* grid lines */}
            <div className="absolute z-0 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
            {/* links */}
            <div className="w-[80%] h-[50%] flex flex-col p-2 justify-evenly items-start">
              <ul className="flex flex-col gap-8 p-2">
                <li className="flex items-center gap-2 cursor-pointer transition group">
                  Products
                  <FaCaretDown className="transform transition-transform duration-300 -rotate-90" />
                </li>
                <li className="flex items-center gap-2 cursor-pointer transition group">
                  Tools
                  <FaCaretDown className="transform transition-transform duration-300 -rotate-90" />
                </li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
              <div className="flex flex-col gap-4">
                <button className="border border-gray-400 cursor-pointer bg-gray-900 py-3 px-6 rounded-full">
                  Log in
                </button>
                <button className="border border-gray-400 cursor-pointer bg-gray-700 py-3 px-6 rounded-full">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
