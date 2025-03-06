// import React, { useState } from "react";

// const Efilters = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     search: "",
//     dateRange: "",
//     venue: "",
//     speaker: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   // Apply filters
//   const applyFilters = () => {
//     onFilterChange(filters);
//   };

//   // Reset all filters
//   const resetFilters = () => {
//     const resetValues = { search: "", dateRange: "", venue: "", speaker: "" };
//     setFilters(resetValues);
//     onFilterChange(resetValues);
//   };

//   return (
//     <div className="bg-[#42b6b5] p-6 rounded-lg shadow-lg text-white">
//       <h2 className="text-xl font-bold mb-4">Filter Events</h2>

//       {/* Search by Event Name */}
//       <div className="mb-4">
//         <label className="block mb-1 font-semibold">🔍 Search Event</label>
//         <input
//           type="text"
//           name="search"
//           placeholder="Enter event name..."
//           value={filters.search}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//       </div>

//       {/* Date Filter */}
//       <div className="mb-4">
//         <label className="block mb-1 font-semibold">📅 Date</label>
//         <input
//           type="date"
//           name="dateRange"
//           value={filters.dateRange}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//       </div>

//       {/* Venue Filter */}
//       <div className="mb-4">
//         <label className="block mb-1 font-semibold">📍 Venue</label>
//         <select
//           name="venue"
//           value={filters.venue}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         >
//           <option value="">All Venues</option>
//           <option value="Auditorium A">Auditorium A</option>
//           <option value="Lab 2">Lab 2</option>
//           <option value="Hall 3">Hall 3</option>
//           <option value="Main Hall">Main Hall</option>
//           <option value="Room 101">Room 101</option>
//         </select>
//       </div>

//       {/* Speaker Filter */}
//       <div className="mb-4">
//         <label className="block mb-1 font-semibold">🎤 Speaker</label>
//         <input
//           type="text"
//           name="speaker"
//           placeholder="Enter speaker name..."
//           value={filters.speaker}
//           onChange={handleChange}
//           className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between">
//         <button
//           onClick={applyFilters}
//           className="w-1/2 bg-yellow-500 text-black font-semibold p-2 rounded-md hover:bg-yellow-600 transition duration-300 mr-2"
//         >
//           Apply Filters
//         </button>
//         <button
//           onClick={resetFilters}
//           className="w-1/2 bg-red-500 text-white font-semibold p-2 rounded-md hover:bg-red-600 transition duration-300"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Efilters;



import React, { useState, useEffect } from "react";
import { Search, Calendar, MapPin, User, Filter, RefreshCw } from "lucide-react";

const Efilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    dateRange: "",
    venue: "",
    speaker: "",
  });

  const [isCollapsed, setIsCollapsed] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Apply filters (now auto-applied on input change)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filters, onFilterChange]);

  // Reset all filters
  const resetFilters = () => {
    const resetValues = { search: "", dateRange: "", venue: "", speaker: "" };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  const venues = [
    "Auditorium A",
    "Lab 2",
    "Hall 3",
    "Main Hall",
    "Room 101"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Filter Header */}
      <div 
        className="bg-teal-500 p-4 text-white flex justify-between items-center cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          <h2 className="text-lg font-bold">Event Filters</h2>
        </div>
        <span>{isCollapsed ? "+" : "-"}</span>
      </div>

      {/* Filter Body */}
      <div className={`transition-all duration-300 ${isCollapsed ? "max-h-0 overflow-hidden" : "max-h-screen p-4"}`}>
        {/* Search by Event Name */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Search Event
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="search"
              placeholder="Enter event name..."
              value={filters.search}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Date Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="relative">
            <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="date"
              name="dateRange"
              value={filters.dateRange}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Venue Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Venue
          </label>
          <div className="relative">
            <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              name="venue"
              value={filters.venue}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 appearance-none"
            >
              <option value="">All Venues</option>
              {venues.map((venue) => (
                <option key={venue} value={venue}>
                  {venue}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Speaker Filter */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Speaker
          </label>
          <div className="relative">
            <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="speaker"
              placeholder="Enter speaker name..."
              value={filters.speaker}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium p-2 rounded-md transition duration-300"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Efilters;