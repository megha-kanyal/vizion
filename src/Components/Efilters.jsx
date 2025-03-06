import React, { useState } from "react";

const Efilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    dateRange: "",
    venue: "",
    speaker: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Apply filters
  const applyFilters = () => {
    onFilterChange(filters);
  };

  // Reset all filters
  const resetFilters = () => {
    const resetValues = { search: "", dateRange: "", venue: "", speaker: "" };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4">Filter Events</h2>

      {/* Search by Event Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">🔍 Search Event</label>
        <input
          type="text"
          name="search"
          placeholder="Enter event name..."
          value={filters.search}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Date Filter */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">📅 Date</label>
        <input
          type="date"
          name="dateRange"
          value={filters.dateRange}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Venue Filter */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">📍 Venue</label>
        <select
          name="venue"
          value={filters.venue}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">All Venues</option>
          <option value="Auditorium A">Auditorium A</option>
          <option value="Lab 2">Lab 2</option>
          <option value="Hall 3">Hall 3</option>
          <option value="Main Hall">Main Hall</option>
          <option value="Room 101">Room 101</option>
        </select>
      </div>

      {/* Speaker Filter */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">🎤 Speaker</label>
        <input
          type="text"
          name="speaker"
          placeholder="Enter speaker name..."
          value={filters.speaker}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={applyFilters}
          className="w-1/2 bg-yellow-500 text-black font-semibold p-2 rounded-md hover:bg-yellow-600 transition duration-300 mr-2"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="w-1/2 bg-red-500 text-white font-semibold p-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Efilters;
