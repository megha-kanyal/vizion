import { useState } from "react";
import { FaEdit, FaEnvelope, FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [profile, setProfile] = useState({
    name: "Abhbxsj Bijslkp",
    department: "Computer Science",
    degree: "B.Tech",
    graduationYear: "2024",
    contact: "+91 9568145145",
    email: "abhbxasj@gmail.com",
    role: "Student",
    skills: "HTML, Tailwind, JavaScript",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${darkMode ? "bg-black text-yellow-400" : "bg-white text-gray-900"} min-h-screen p-8 flex flex-col items-center transition-all`}>
      <button 
        className="absolute top-5 right-5 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-all"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      
      <motion.div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-2xl flex items-center space-x-8 hover:scale-105 transition-transform">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="w-28 h-28 rounded-full object-cover border-4 border-yellow-500 shadow-lg hover:scale-110 transition-all"
          />
          <div className="flex space-x-4">
            <button 
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center space-x-2"
              onClick={() => setIsEditing(!isEditing)}
            >
              <FaEdit /> <span>{isEditing ? "Save Profile" : "Edit Profile"}</span>
            </button>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition-all flex items-center space-x-2">
              <FaEnvelope /> <span>Message</span>
            </button>
          </div>
        </div>
        
        <div className="border-l-2 border-yellow-500 pl-6">
          {isEditing ? (
            <div className="space-y-2">
              {Object.keys(profile).map((key) => (
                key !== "github" && key !== "linkedin" && (
                  <input key={key} className="bg-gray-700 text-white p-2 rounded w-full" name={key} value={profile[key]} onChange={handleChange} />
                )
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-gray-400">Department - {profile.department}</p>
              <p className="text-gray-400">{profile.degree}</p>
              <p className="text-gray-400">Graduation Year - {profile.graduationYear}</p>
              <p className="text-gray-400">📞 {profile.contact}</p>
              <p className="text-gray-400">📧 {profile.email}</p>
              <p className="text-gray-400">🎓 Role - {profile.role}</p>
              <p className="text-gray-400">💡 Skills - {profile.skills}</p>
              <div className="flex space-x-4 mt-4">
                <a href={profile.github} target="_blank" className="text-white text-2xl hover:text-yellow-500 transition-all"><FaGithub /></a>
                <a href={profile.linkedin} target="_blank" className="text-white text-2xl hover:text-yellow-500 transition-all"><FaLinkedin /></a>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <div className="w-full max-w-2xl mt-8">
        <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">About Me</h3>
        <p className="bg-gray-700 p-4 rounded-xl shadow-lg text-gray-300">
          We are passionate students dedicated to learning and building innovative projects. 
          Our goal is to explore new technologies and enhance our skills in web development, 
          programming, and design. Let's connect and grow together!
        </p>
      </div>

      
      <div className="w-full max-w-2xl mt-10">
        <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">Education</h3>
        <div className="bg-gray-700 h-16 rounded-xl shadow-lg"></div>
      </div>
      
      <div className="w-full max-w-2xl mt-8">
        <h3 className="text-xl font-bold text-white mb-3 border-b-2 border-yellow-500 pb-2">Projects</h3>
        <div className="bg-gray-700 h-16 rounded-xl shadow-lg"></div>
      </div>

    </div>
  );
};

export default ProfileCard;
