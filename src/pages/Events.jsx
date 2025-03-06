import React from "react";
import Efilters from "../Components/Efilters"; // Ensure the correct path

export default function Events() {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white p-6">
      {/* Left Side - Filters Section */}
      <div className="w-1/3 mr-6">
        <Efilters />
      </div>

      {/* Right Side - Events Section */}
      <div className="flex-1 bg-gray-900 p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        <p>List of upcoming events...</p>
      </div>
    </div>
  );
}
