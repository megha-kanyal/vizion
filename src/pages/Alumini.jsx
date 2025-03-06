import React, { useState } from "react";
import Afilters from "../Components/Afilters";

const alumniData = [
  { id: 1, name: "Alice Johnson", graduationYear: 2015, department: "CSE", jobRole: "Software Engineer", experienceLevel: "Mid-Level", techStack: "React, Node.js", organisation: "Google", availability: ["Open to Mentorship", "Open to Networking"] },
  { id: 2, name: "Bob Smith", graduationYear: 2018, department: "ECE", jobRole: "Data Scientist", experienceLevel: "Entry-Level", techStack: "Python, TensorFlow", organisation: "Amazon", availability: ["Open to Hiring"] },
  { id: 3, name: "Charlie Lee", graduationYear: 2016, department: "IT", jobRole: "Product Manager", experienceLevel: "Senior-Level", techStack: "Agile, UX", organisation: "Microsoft", availability: ["Open to Mentorship", "Available for Guest Lectures"] },
  { id: 4, name: "David Kim", graduationYear: 2017, department: "Mechanical", jobRole: "Robotics Engineer", experienceLevel: "Mid-Level", techStack: "ROS, C++", organisation: "Tesla", availability: ["Open to Mentorship"] },
  { id: 5, name: "Eva Green", graduationYear: 2014, department: "Civil", jobRole: "Project Manager", experienceLevel: "Senior-Level", techStack: "AutoCAD, PMP", organisation: "Siemens", availability: ["Available for Guest Lectures"] },
];

export default function Alumini() {
  const [Filters, setFilters] = useState({});
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);

    if (Object.values(newFilters).every(value => value === "" || (Array.isArray(value) && value.length === 0))) {
      setFilteredAlumni(alumniData);
      return;
    }

    const filtered = alumniData.filter(alum => {
      return (
        (!newFilters.graduationYear || alum.graduationYear === parseInt(newFilters.graduationYear)) &&
        (!newFilters.department || alum.department.toLowerCase().includes(newFilters.department.toLowerCase())) &&
        (!newFilters.jobRole || alum.jobRole.toLowerCase() === newFilters.jobRole.toLowerCase()) &&
        (!newFilters.experienceLevel || alum.experienceLevel.toLowerCase() === newFilters.experienceLevel.toLowerCase()) &&
        (!newFilters.techStack || alum.techStack.toLowerCase().includes(newFilters.techStack.toLowerCase())) &&
        (!newFilters.organisation || alum.organisation.toLowerCase().includes(newFilters.organisation.toLowerCase())) &&
        (!newFilters.availability?.length || newFilters.availability.every(opt => alum.availability.includes(opt)))
      );
    });

    setFilteredAlumni(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white p-6">
      {/* Left Side - Filters */}
      <div className="w-1/3 mr-6">
        <Afilters applyFilters={applyFilters} />
      </div>

      {/* Right Side - Alumni List */}
      <div className="flex-1 bg-gray-900 p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Alumni Network</h1>
        {filteredAlumni.length > 0 ? (
          <div className="flex flex-col gap-6">
            {filteredAlumni.slice(0, 5).map((alum) => ( // Ensuring only 5 cards are shown
              <div key={alum.id} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
                <h2 className="text-xl font-semibold">{alum.name}</h2>
                <p><strong>Graduation Year:</strong> {alum.graduationYear}</p>
                <p><strong>Department:</strong> {alum.department}</p>
                <p><strong>Job Role:</strong> {alum.jobRole}</p>
                <p><strong>Experience Level:</strong> {alum.experienceLevel}</p>
                <p><strong>Tech Stack:</strong> {alum.techStack}</p>
                <p><strong>Organisation:</strong> {alum.organisation}</p>
                <p><strong>Availability:</strong> {alum.availability.join(", ")}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No alumni match the selected filters.</p>
        )}
      </div>
    </div>
  );
}
