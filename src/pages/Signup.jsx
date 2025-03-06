import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    graduationYear: '',
    department: '',
    linkedinProfile: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Prepare data for API
      const name = `${formData.firstName} ${formData.middleName ? formData.middleName + ' ' : ''}${formData.lastName}`;
      const userData = {
        name,
        email: formData.email,
        password: formData.password,
        graduationYear: formData.graduationYear,
        department: formData.department,
        linkedinProfile: formData.linkedinProfile
      };
      
      // Call API here
      console.log("Form submitted with data:", userData);
      // TODO: Add actual API call
    }
  };
  
  return (
    <div className="flex justify-center mt-14 items-center h-screen">
      <div className="w-full max-w-md p-8 rounded-lg bg-[#2F2F2F] text-[#FFCB74] shadow-xl">
        <h1 className="text-center text-3xl font-bold mb-6">Sign Up</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <div className="flex gap-2">
              <div className="w-1/3">
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  className={`bg-black border ${errors.firstName ? 'border-red-500' : 'border-white'} rounded p-2 w-full text-white focus:outline-none focus:border-yellow-400`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <input 
                type="text" 
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Middle Name" 
                className="bg-black border border-white rounded p-2 w-1/3 text-white focus:outline-none focus:border-yellow-400"
              />
              <div className="w-1/3">
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  className={`bg-black border ${errors.lastName ? 'border-red-500' : 'border-white'} rounded p-2 w-full text-white focus:outline-none focus:border-yellow-400`}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <input 
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email" 
                className={`bg-black border ${errors.email ? 'border-red-500' : 'border-white'} rounded p-2 pl-8 w-full text-white focus:outline-none focus:border-yellow-400`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Set your Password" 
                className={`bg-black border ${errors.password ? 'border-red-500' : 'border-white'} rounded p-2 pl-8 w-full text-white focus:outline-none focus:border-yellow-400`}
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input 
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your Password" 
                className={`bg-black border ${errors.confirmPassword ? 'border-red-500' : 'border-white'} rounded p-2 pl-8 w-full text-white focus:outline-none focus:border-yellow-400`}
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Graduation Year / Batch</label>
            <input 
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              placeholder="Enter Graduation Year / Batch" 
              className="bg-black border border-white rounded p-2 w-full text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Department</label>
            <input 
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter Your Department" 
              className="bg-black border border-white rounded p-2 w-full text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2">LinkedIn Profile Link</label>
            <input 
              type="text"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              placeholder="Enter LinkedIn Profile Link" 
              className="bg-black border border-white rounded p-2 w-full text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              type="submit" 
              className="bg-[#FFCB74] hover:bg-yellow-600 text-gray-900 font-bold py-2 px-8 rounded"
            >
              Sign Up
            </button>
            <button 
              type="button" 
              className="bg-[#2F2F2F] hover:bg-gray-700 text-gray-200 font-bold py-2 px-8 rounded"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;