import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Dummy alumni data for demonstration (you can replace it with an actual API call)
const alumniData = [
  { id: 1, name: "Alice Johnson", graduationYear: 2015, department: "CSE", jobRole: "Software Engineer", experienceLevel: "Mid-Level", techStack: "React, Node.js", organisation: "Google", availability: ["Open to Mentorship", "Open to Networking"] },
  { id: 2, name: "Bob Smith", graduationYear: 2018, department: "ECE", jobRole: "Data Scientist", experienceLevel: "Entry-Level", techStack: "Python, TensorFlow", organisation: "Amazon", availability: ["Open to Hiring"] },
  { id: 3, name: "Charlie Lee", graduationYear: 2016, department: "IT", jobRole: "Product Manager", experienceLevel: "Senior-Level", techStack: "Agile, UX", organisation: "Microsoft", availability: ["Open to Mentorship", "Available for Guest Lectures"] },
  // Add more alumni as required
];

const AlumniProfile = () => {
  const { id } = useParams(); // Get alumni ID from URL
  const [alum, setAlum] = useState(null);

  useEffect(() => {
    // Find the alumni data matching the given ID
    const alumni = alumniData.find((alum) => alum.id === parseInt(id));
    setAlum(alumni);
  }, [id]); // Re-fetch on ID change

  if (!alum) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{alum.name}</h1>
      <p className="mt-2 text-lg">Graduation Year: {alum.graduationYear}</p>
      <p className="mt-2 text-lg">Department: {alum.department}</p>
      <p className="mt-2 text-lg">Job Role: {alum.jobRole}</p>
      <p className="mt-2 text-lg">Experience Level: {alum.experienceLevel}</p>
      <p className="mt-2 text-lg">Tech Stack: {alum.techStack}</p>
      <p className="mt-2 text-lg">Organisation: {alum.organisation}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Availability:</h3>
        <ul className="list-disc pl-6">
          {alum.availability.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlumniProfile;
