import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniPortal = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [status, setStatus] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null); // Store registered credentials
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setRegisteredUser({ email, password }); // Save registered credentials
    alert("Registration Successful! Please login.");
    setIsRegister(false); // Switch to login
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
      alert("Login Successful! Redirecting to Home Page...");
      navigate("/");
    } else {
      alert("Invalid Credentials! Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-[#1e293b] shadow-lg rounded-lg mt-10 border border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          {isRegister ? "Register" : "Login"} to Alumni Portal
        </h2>
        <div className="h-1 w-24 bg-[#42b6b5] mx-auto rounded"></div>
      </div>

      <form className="space-y-4" onSubmit={isRegister ? handleRegister : handleLogin}>
        {isRegister && (
          <>
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
            >
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Other</option>
            </select>

            <select 
              className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none" 
              onChange={(e) => setStatus(e.target.value)}
            >
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isRegister && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#42b6b5] focus:border-[#42b6b5] outline-none"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <button 
          type="submit" 
          className="w-full bg-[#42b6b5] text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#3aa09f] transition duration-200 mt-2"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-6 pt-4 border-t border-gray-600">
        <p className="text-white">
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

export default AlumniPortal;