import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [status, setStatus] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [department, setDepartment] = useState("Computer Science");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        gradYear,
        department,
        status,
        email,
        password,
        company: status === "Alumni" ? company : "",
        jobTitle: status === "Alumni" ? jobTitle : "",
        linkedin: status === "Alumni" ? linkedin : "",
      });

      alert(response.data.message);
      if (response.data.success) {
        navigate("/login"); // Redirect to login page on successful signup
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Register to Alumni Portal</h2>

      <form className="space-y-4" onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input type="number" placeholder="Graduation Year" className="w-full p-2 border rounded" required value={gradYear} onChange={(e) => setGradYear(e.target.value)} />

        <select className="w-full p-2 border rounded" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Computer Science</option>
          <option>Electronics</option>
          <option>Mechanical</option>
          <option>Civil</option>
          <option>Other</option>
        </select>

        <select className="w-full p-2 border rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Student</option>
          <option>Alumni</option>
        </select>

        {status === "Alumni" && (
          <>
            <input type="text" placeholder="Company Name" className="w-full p-2 border rounded" required value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            <input type="url" placeholder="LinkedIn Profile" className="w-full p-2 border rounded" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </>
        )}

        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Signup;