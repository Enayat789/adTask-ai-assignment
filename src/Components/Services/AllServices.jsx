// import React from "react";
// import Frame from "./Frame";
// import ServicesList from "./ServicesList";
// // import traingleImg from "../../assets/service-icons/Rectangle 2 (1).png";

// const AllServices = () => {
//   // console.log(ServicesList);
//   return (
//     <div className="w-full h-auto md:h-[70vh] flex items-center justify-center p-4">
//       <div className="relative w-full max-w-6xl h-full flex flex-col">
//         {/* this div for the frame */}
//         {/* <div className=" w-full flex">
//           <Frame />
//         </div> */}
//         <div className="grid grid-cols-1 w-full h-[90%] pl-2 md:grid-cols-2 lg:grid-cols-3">
//           {ServicesList.map((service, index) => (
//             <div className="w-full bg-green-400 h-[100%] flex" key={index}>
//               {/* this id for the side line */}
//               <div className="w-2 h-[100%] flex items-center">
//                 <span
//                   className="w-full h-[80%] block border-l-2 border-solid"
//                   style={{
//                     borderColor: "transparent",
//                     borderImage:
//                       "linear-gradient(180deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
//                   }}
//                 />
//               </div>
//               {/* main content */}
//               <div className="w-full relative bg-red-300 h-[100%] flex flex-col items-center justify-between ">
//                 <img
//                   src="Rectangle5.png"
//                   alt="Background"
//                   className="absolute inset-0 w-full h-full object-cover opacity-70"
//                 />
//                 <div className="w-full relative h-full flex items-end justify-center">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-auto max-w-[70px]"
//                   />
//                 </div>
//                 <div className="flex flex-col relative py-8 px-6 gap-2 text-sm text-center">
//                   <h1 className="font-extrabold">{service.title}</h1>
//                   <p className="font-extralight">{service.description}</p>
//                 </div>
//               </div>

//               {/* this id for the side line */}
//               <div className="w-2 h-[100%] flex items-center">
//                 <span
//                   className="w-full h-[80%] block border-l-2 border-solid"
//                   style={{
//                     borderColor: "transparent",
//                     borderImage:
//                       "linear-gradient(180deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* lines as the frame */}
//         {/* <div className=" w-full flex">
//           <Frame />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AllServices;

// import React from "react";
// import Frame from "./Frame";
// import ServicesList from "./ServicesList";

// const AllServices = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center p-4">
//       <div className="relative w-full max-w-6xl flex flex-col">
//         {/* <div className="w-full flex justify-center mb-4">
//           <span className="w-3/4 h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
//         </div> */}
//         <div className="grid relative bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-full">
//           {ServicesList.map((service, index) => (
//             <div
//               className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-6 relative "
//               key={index}
//             >
//               {/* lines in top */}
//               <div className="w-full top-0 absolute flex justify-center mb-4">
//                 <span className="w-3/4 h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
//               </div>

//               <img
//                 src="Rectangle5.png"
//                 alt="Background"
//                 className="absolute inset-0 w-full h-full object-cover opacity-50"
//               />

//               <div className="relative z-10 flex justify-center items-center w-full">
//                 <img
//                   src={service.icon}
//                   alt={service.title}
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>

//               <div className="relative z-10 flex flex-col items-center text-center py-6 px-4">
//                 <h1 className="text-lg font-bold text-white">
//                   {service.title}
//                 </h1>
//                 <p className="text-sm text-gray-200 mt-2">
//                   {service.description}
//                 </p>
//               </div>
//               {/* lines in top */}
//               <div className="w-full bottom-0 absolute flex justify-center">
//                 <span className="w-3/4 h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <div className="w-full flex justify-center mt-4">
//           <span className="w-3/4 h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AllServices;

import React from "react";
import Frame from "./Frame";
import ServicesList from "./ServicesList";
import littleBtn from "../../assets/service-icons/little-btn.png";

const AllServices = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 ">
      <div className="relative w-full max-w-6xl flex flex-col">
        {/* <Frame /> */}
        <div className="grid p-3 relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full rounded-xl shadow-md">
          {/* corner img */}
          <img
            src={littleBtn}
            alt="icon"
            className="w-6 h-7 top-0 left-1 absolute z-10"
          />
          {/* corner img */}
          <img
            src={littleBtn}
            alt="icon"
            className="w-6 h-7 top-0 right-1 absolute z-10"
          />
          {/* corner img */}
          <img
            src={littleBtn}
            alt="icon"
            className="w-6 h-7 bottom-0 right-1 absolute z-10"
          />
          {/* corner img */}
          <img
            src={littleBtn}
            alt="icon"
            className="w-6 h-7 bottom-0 left-1 absolute z-10"
          />
          {/* middle img */}
          <img
            src={littleBtn}
            alt="icon"
            className=" hidden lg:block w-7 h-8 top-[48%] left-[32%] absolute z-10"
          />
          {/* middle img */}
          <img
            src={littleBtn}
            alt="icon"
            className=" hidden lg:block w-7 h-8 top-[48%] right-[32%] absolute z-10"
          />

          {ServicesList.map((service, index) => (
            <div
              className="w-full rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-6 relative "
              key={index}
            >
              {/* Top border line */}
              <div className="w-full top-0 absolute flex justify-center">
                <span className="w-[80%] h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
              </div>

              {/* right line */}
              <div className="w-auto h-full top-0 right-0 absolute flex flex-col items-center justify-center">
                <span className="w-1 h-[80%] bg-gradient-to-b from-[#263048] via-[#5C73AE] to-[#263048]" />
              </div>

              {/* left line */}
              <div className="w-auto h-full top-0 left-0 absolute flex flex-col items-center justify-center">
                <span className="w-1 h-[80%] bg-gradient-to-b from-[#263048] via-[#5C73AE] to-[#263048]" />
              </div>

              {/* Bottom border line */}
              <div className="w-full bottom-0 absolute flex justify-center">
                <span className="w-[80%] h-1 bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
              </div>

              <img
                src="Rectangle5.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />

              <div className="relative z-10 flex justify-center items-center w-full">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center py-6 px-4">
                <h1 className="text-lg font-bold text-white">
                  {service.title}
                </h1>
                <p className="text-sm text-gray-300 mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
