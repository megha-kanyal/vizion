import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-center">
        <img
          src="/profile-image.jpg"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full"
        />
        <h2 className="text-lg font-semibold mt-2">Arpit Joshi</h2>
        <p className="text-gray-600">Full Stack Developer | MERN Stack</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-500">Profile viewers: <span className="font-bold">92</span></p>
        <p className="text-gray-500">Post impressions: <span className="font-bold">13</span></p>
      </div>
    </div>
  );
};

export default Sidebar;
