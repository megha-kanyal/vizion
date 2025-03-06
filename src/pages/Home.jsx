// import React from "react";
// import Navbar from "../Components/Navbar";
// import Sidebar from "../Components/Sidebar";
// import Feed from "../Components/Feed";
// import Trending from "../Components/Trending";

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="flex justify-center gap-12 p-4">
//         <div className="w-1/4">
//           <Sidebar />
//         </div>
//         <div className="w-1/2">
//           <Feed />
//         </div>
//         <div className="w-1/4">
//           <Trending />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Trending from "../Components/Trending";

const LandingPage = () => {
  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/4 md:sticky md:top-20 md:self-start">
            <Sidebar />
          </div>
          <div className="w-full md:w-1/2">
            <Feed />
          </div>
          <div className="w-full md:w-1/4 md:sticky md:top-20 md:self-start">
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;