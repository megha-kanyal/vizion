const ProfileCard = () => {
  return (
    <div className="bg-black min-h-screen text-yellow-400 p-6 flex flex-col items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-2xl flex items-center space-x-6">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
        />
        <div className="border-l border-gray-600 pl-4">
          <h2 className="text-xl font-semibold">Abhbxsj Bijslkp</h2>
          <p className="text-gray-300">Department - Computer Science</p>
          <p className="text-gray-300">B.Tech</p>
          <p className="text-gray-300">Graduation Year - 2024</p>
          <p className="text-gray-300">Contact No - +91</p>
          <p className="text-gray-300">Email - abhbxasj@gmail.com</p>
          <p className="text-gray-300">Role - Student</p>
          <p className="text-gray-300">Skills - HTML, Tailwind, JavaScript</p>
        </div>
      </div>
      
      <div className="flex space-x-4 mt-6">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Edit Profile
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
          Message
        </button>
      </div>
      
      <div className="w-full max-w-2xl mt-8">
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <div className="bg-gray-800 h-12 rounded-lg"></div>
      </div>
      
      <div className="w-full max-w-2xl mt-6">
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        <div className="bg-gray-800 h-12 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProfileCard;