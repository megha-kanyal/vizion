import { useState } from "react";
import { FaEdit, FaGithub, FaLinkedin, FaUserPlus, FaCommentDots } from "react-icons/fa";

const SProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Aryan Sharma",
    profilePhoto: "https://via.placeholder.com/100",
    department: "Computer Science",
    degree: "B.Tech",
    university: "XYZ University",
    graduationYear: "2025",
    contact: "+91 9876543210",
    email: "aryan.sharma@example.com",
    role: "Student",
    skills: "HTML, CSS, JavaScript, React, Node.js",
    github: "https://github.com/aryansharma",
    linkedin: "https://linkedin.com/in/aryansharma",
    about: "I am a passionate computer science student with a keen interest in web development and AI.",
    education: "B.Tech in Computer Science at XYZ University (2021-2025)",
    projects: [
      { name: "Portfolio Website", description: "Built with React and Tailwind CSS." },
      { name: "Chatbot", description: "AI-powered chatbot using Node.js and OpenAI API." }
    ]
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black text-yellow-400 min-h-screen p-8 flex transition-all"> 
         
      {/* Profile Section */}
      <motion.div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-1/3 flex flex-col items-center space-y-4 hover:scale-105 transition-transform">
        <img 
          src={profile.profilePhoto} 
          alt="Profile" 
          className="w-28 h-28 rounded-full object-cover border-4 border-yellow-500 shadow-lg hover:scale-110 transition-all"
        />
        {isEditing ? (
          <input type="text" name="name" value={profile.name} onChange={handleChange} className="text-center bg-gray-700 text-white p-2 rounded-md" />
        ) : (
          <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
        )}
        <p className="text-gray-400">{profile.role}</p>
        {isEditing ? (
          <input type="text" name="skills" value={profile.skills} onChange={handleChange} className="text-center bg-gray-700 text-white p-2 rounded-md" />
        ) : (
          <p className="text-gray-400">💡 Skills: {profile.skills}</p>
        )}

        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          <a href={profile.github} target="_blank" className="text-white text-2xl hover:text-yellow-500 transition-all"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" className="text-white text-2xl hover:text-yellow-500 transition-all"><FaLinkedin /></a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition-all flex items-center space-x-2">
            <FaUserPlus /> <span>Connect</span>
          </button>
          <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center space-x-2">
            <FaCommentDots /> <span>Message</span>
          </button>
        </div>
      </motion.div>

      {/* Right Side Content */}
      <div className="w-2/3 p-8">
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">About Me</h3>
          {isEditing ? (
            <textarea name="about" value={profile.about} onChange={handleChange} className="w-full bg-gray-700 text-white p-2 rounded-md" />
          ) : (
            <p className="bg-gray-700 p-4 rounded-xl shadow-lg text-gray-300">{profile.about}</p>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">Education</h3>
          {isEditing ? (
            <input type="text" name="education" value={profile.education} onChange={handleChange} className="w-full bg-gray-700 text-white p-2 rounded-md" />
          ) : (
            <p className="bg-gray-700 p-4 rounded-xl shadow-lg text-gray-300">{profile.education}</p>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">Projects</h3>
          {profile.projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-xl shadow-lg text-gray-300 mb-2">
              {isEditing ? (
                <input type="text" name={`project-${index}`} value={project.name} onChange={(e) => {
                  const newProjects = [...profile.projects];
                  newProjects[index].name = e.target.value;
                  setProfile({ ...profile, projects: newProjects });
                }} className="w-full bg-gray-700 text-white p-2 rounded-md" />
              ) : (
                <h4 className="text-lg font-semibold text-yellow-400">{project.name}</h4>
              )}
              {isEditing ? (
                <input type="text" name={`project-desc-${index}`} value={project.description} onChange={(e) => {
                  const newProjects = [...profile.projects];
                  newProjects[index].description = e.target.value;
                  setProfile({ ...profile, projects: newProjects });
                }} className="w-full bg-gray-700 text-white p-2 rounded-md" />
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Edit Button */}
        <div className="mt-8 flex justify-end">
          <button 
            className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center space-x-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit /> <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SProfileCard;
