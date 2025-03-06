import React, { useState } from 'react';
import { Eye, EyeOff, AtSign, Lock } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 rounded-lg bg-[#2F2F2F]">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#FFCB74]">Log In</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-yellow-100">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AtSign size={18} className="text-[#FFCB74]" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full py-3 pl-10 pr-3 bg-black border border-white rounded-md focus:outline-none focus:border-blue-500 text-gray-100"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-yellow-100">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock size={18} className="text-[#FFCB74]" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full py-3 pl-10 pr-10 bg-black border border-white rounded-md focus:outline-none focus:border-blue-600 text-gray-100"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 
                  <EyeOff size={18} className="text-gray-400" /> : 
                  <Eye size={18} className="text-gray-400" />
                }
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 mr-2 border-gray-600 rounded focus:ring-blue-500"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="text-sm text-yellow-100">Remember me</label>
            </div>
            
            <a href="#" className="text-sm text-[#FFCB74] hover:underline">Forgot password?</a>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#FFCB74] rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition duration-200"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-yellow-100">Don't have an account?</p>
          <a href="#" className="mt-2 inline-block text-blue-400 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
