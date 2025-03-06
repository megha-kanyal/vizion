import { useState } from "react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [status, setStatus] = useState("Student");

  return (
    <div className="max-w-lg mx-auto p-8 bg-[#1e293b] shadow-lg rounded-lg mt-10 border border-[#42b6b5]">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#42b6b5] mb-2">
          {isRegister ? "Register" : "Login"} to Alumni Portal
        </h2>
        <div className="h-1 w-24 bg-[#42b6b5] mx-auto rounded"></div>
      </div>

      <form className="space-y-4">
        {isRegister && (
          <>
<<<<<<< HEAD
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
              required 
            />
            
            <input 
              type="number" 
              placeholder="Graduation Year" 
              className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
              required 
            />

            <select 
              className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
              onChange={(e) => setStatus(e.target.value)}
            >
=======
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
            <input type="number" placeholder="Graduation Year" className="w-full p-2 border rounded" required />
            <select className="w-full p-2 border rounded" onChange={(e) => setStatus(e.target.value)}>
>>>>>>> 3c4e3c56ef95cb46d24595a27ffbe03b550767f8
              <option>Student</option>
              <option>Alumni</option>
            </select>

            {status === "Alumni" && (
              <>
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
                  required 
                />
                
                <input 
                  type="text" 
                  placeholder="Job Title" 
                  className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
                  required 
                />
                
                <input 
                  type="url" 
                  placeholder="LinkedIn Profile" 
                  className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
                />
              </>
            )}
          </>
        )}

        <input 
          type="email" 
          placeholder="Email" 
          className="w-full bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
          required 
        />

        {isRegister && (
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
            required 
          />
        )}

        <button className="w-full bg-[#42b6b5] text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#3aa09f] transition duration-200 mt-2">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-6 pt-4 border-t border-gray-600">
        <p className="text-[#42b6b5]">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <button 
            className="text-[#42b6b5] font-medium ml-2 hover:text-[#3aa09f]" 
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;