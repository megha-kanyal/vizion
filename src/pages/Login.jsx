import { useState } from "react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [status, setStatus] = useState("Student");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {isRegister ? "Register" : "Login"} to Alumni Portal
      </h2>

      <form className="space-y-4">
        {isRegister && (
          <>
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
            <input type="number" placeholder="Graduation Year" className="w-full p-2 border rounded" required />
            <select className="w-full p-2 border rounded" onChange={(e) => setStatus(e.target.value)}>
              <option>Student</option>
              <option>Alumni</option>
            </select>

            {status === "Alumni" && (
              <>
                <input type="text" placeholder="Company Name" className="w-full p-2 border rounded" required />
                <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" required />
                <input type="url" placeholder="LinkedIn Profile" className="w-full p-2 border rounded" />
              </>
            )}
          </>
        )}

        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />

        {isRegister && (
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" required />
        )}

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <p className="text-center mt-4">
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <button className="text-blue-500 ml-2" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
};

export default Login;
