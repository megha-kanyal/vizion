import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Trending from "../Components/Trending";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center gap-12 p-4">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-1/2">
          <Feed />
        </div>
        <div className="w-1/4">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
