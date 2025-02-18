import React from "react";
import Frame from "./Frame";
import ServicesList from "./ServicesList";
// import traingleImg from "../../assets/service-icons/Rectangle 2 (1).png";

const AllServices = () => {
  // console.log(ServicesList);
  return (
    <div className="w-full h-[70vh] flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl h-full flex flex-col">
        {/* this div for the frame */}
        <div className=" w-full flex">
          <Frame />
        </div>

        <div className="grid grid-cols-1 w-full h-[90%] pl-2 md:grid-cols-2 lg:grid-cols-3">
          {ServicesList.map((service, index) => (
            <div className="w-full h-[100%] flex" key={index}>
              {/* this id for the side line */}
              <div className="w-2 h-[100%] flex items-center">
                <span
                  className="w-full h-[80%] block border-l-2 border-solid"
                  style={{
                    borderColor: "transparent",
                    borderImage:
                      "linear-gradient(180deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
                  }}
                />
              </div>
              {/* main content */}
              <div className="w-full relative h-[100%] flex flex-col items-center justify-between ">
                <img
                  src="Rectangle5.png"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="w-full relative h-full flex items-end justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-auto max-w-[70px]"
                  />
                </div>
                <div className="flex flex-col relative py-8 px-6 gap-2 text-sm text-center">
                  <h1 className="font-extrabold">{service.title}</h1>
                  <p className="font-extralight">{service.description}</p>
                </div>
              </div>

              <div className="w-2 h-[100%] flex items-center">
                <span
                  className="w-full h-[80%] block border-l-2 border-solid"
                  style={{
                    borderColor: "transparent",
                    borderImage:
                      "linear-gradient(180deg, #263048 0%, #5C73AE 51.5%, #263048 100%) 1",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <Frame />
      </div>
    </div>
  );
};

export default AllServices;

// import React from "react";
// import Frame from "./Frame";
// import ServicesList from "./ServicesList";

// const AllServices = () => {
//   const totalItems = ServicesList.length;
//   const columns = 3; // Columns for grid
//   const rows = Math.ceil(totalItems / columns);

//   return (
//     <div className="w-full min-h-[75vh] flex items-center justify-center p-4">
//       <div className="relative w-full h-[60vh] max-w-6xl flex flex-col">
//         {/* Top Frame */}
//         <Frame />

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 w-full h-[90%] md:grid-cols-2 lg:grid-cols-3">
//           {ServicesList.map((service, index) => {
//             const rowIndex = Math.floor(index / columns);
//             const colIndex = index % columns;

//             const isLastRow = rowIndex === rows - 1;
//             const isFirstInRow = colIndex === 0;
//             const isMiddleInRow = colIndex === 1;
//             const isLastInRow = colIndex === 2 || index === totalItems - 1;

//             return (
//               <div
//                 className="w-full h-[100%] flex flex-col items-center justify-between"
//                 key={index}
//               >
//                 {/* Main Content */}
//                 <div className="w-full h-[100%] flex flex-col items-center justify-center gap-4">
//                   <div className="w-full flex justify-center">
//                     <img
//                       src={service.icon}
//                       alt={service.title}
//                       className="w-auto max-w-[70px]"
//                     />
//                   </div>
//                   <div className="flex flex-col px-6 gap-2 text-sm text-center">
//                     <h1 className="font-extrabold">{service.title}</h1>
//                     <p className="font-extralight">{service.description}</p>
//                   </div>
//                 </div>

//                 {/* Bottom Line for the First Three Cards */}
//                 {(isFirstInRow || isMiddleInRow || isLastInRow) &&
//                   !isLastRow && (
//                     <div className="w-[80%] h-[2px] bg-gradient-to-r from-[#263048] via-[#5C73AE] to-[#263048]" />
//                   )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Frame */}
//         <Frame />
//       </div>
//     </div>
//   );
// };

// export default AllServices;
