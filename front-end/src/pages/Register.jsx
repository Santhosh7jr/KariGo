import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "", // ✅ added
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
          Create Account 🚀
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded-xl"
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded-xl"
          onChange={handleChange}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded-xl"
          onChange={handleChange}
        />

        {/* Phone Number */}
        <input
          type="text"
          name="phone"   // ✅ important
          placeholder="Phone Number"
          className="w-full border p-3 mb-6 rounded-xl"
          onChange={handleChange}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;