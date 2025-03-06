import React, { useState } from "react";

const AlumConnectFilters = () => {
  const [filters, setFilters] = useState({
    graduationYear: "",
    department: "",
    jobRole: "",
    customJobRole: "", // New state for custom job role
    experienceLevel: "",
    techStack: "",
    organisation: "",
    availability: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: checked
        ? [...prevFilters.availability, name]
        : prevFilters.availability.filter((item) => item !== name)
    }));
  };

  const handleReset = () => {
    setFilters({
      graduationYear: "",
      department: "",
      jobRole: "",
      customJobRole: "",
      experienceLevel: "",
      techStack: "",
      organisation: "",
      availability: []
    });
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-96">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Graduation Year */}
      <label className="block">Graduation Year</label>
      <input type="number" name="graduationYear" value={filters.graduationYear} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700" />
      
      {/* Department */}
      <label className="block">Department</label>
      <input type="text" name="department" value={filters.department} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700" />
      
      {/* Job Role */}
      <label className="block">Current Job Role</label>
      <select name="jobRole" value={filters.jobRole} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700">
        <option value="">Select</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Researcher">Researcher</option>
        <option value="Consultant">Consultant</option>
        <option value="Entrepreneur">Entrepreneur</option>
        <option value="Other">Other</option>
      </select>

      {/* Custom Job Role Input Field (only when 'Other' is selected) */}
      {filters.jobRole === "Other" && (
        <input
          type="text"
          name="customJobRole"
          value={filters.customJobRole}
          onChange={handleChange}
          placeholder="Enter your job role"
          className="w-full p-2 mb-3 rounded bg-gray-700"
        />
      )}
      
      {/* Experience Level */}
      <label className="block">Experience Level</label>
      <select name="experienceLevel" value={filters.experienceLevel} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700">
        <option value="">Select</option>
        <option value="Entry-Level">Entry-Level</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior-Level">Senior-Level</option>
        <option value="Executive">Executive</option>
      </select>
      
      {/* Tech Stack & Skills */}
      <label className="block">Tech Stack and Skills</label>
      <input type="text" name="techStack" value={filters.techStack} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700" placeholder="e.g., React, Python, AWS" />
      
      {/* Organisation */}
      <label className="block">Organisation</label>
      <input type="text" name="organisation" value={filters.organisation} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-gray-700" />
      
      {/* Availability */}
      <label className="block mb-2">Availability</label>
      <div className="mb-3">
        {["Open to Mentorship", "Open to Networking", "Open to Hiring", "Available for Guest Lectures"].map((option) => (
          <label key={option} className="block">
            <input
              type="checkbox"
              name={option}
              checked={filters.availability.includes(option)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Apply Filters
        </button>
        <button onClick={handleReset} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Reset
        </button>
      </div>
    </div>
  );
};

export default AlumConnectFilters;
