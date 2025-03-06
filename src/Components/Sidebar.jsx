import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Full width teal header */}
      <div className="bg-[#42b6b5] h-16 w-full"></div>
      
      <div className="px-4 pb-4">
        <div className="flex flex-col items-center">
          {/* Image positioned to overlap with the header */}
          <img
            src="/hero.png"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white -mt-10 shadow-md object-cover"
          />
          
          <div className="text-center">
            <h2 className="text-xl font-bold mt-2 text-[#1e293b]">Arpit Joshi</h2>
            <p className="text-gray-600 text-sm">Full Stack Developer | MERN Stack</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Profile viewers</span>
            <span className="font-bold text-[#42b6b5]">92</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Post impressions</span>
            <span className="font-bold text-[#42b6b5]">13</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-medium text-[#1e293b] mb-2">My items</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 hover:text-[#42b6b5] cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Saved posts
            </li>
            <li className="text-sm text-gray-600 hover:text-[#42b6b5] cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              My network
            </li>
            <li className="text-sm text-gray-600 hover:text-[#42b6b5] cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Events
            </li>
            <li className="text-sm text-gray-600 hover:text-[#42b6b5] cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Groups
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;