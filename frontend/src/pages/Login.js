import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.detail || "Unknown error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 drop-shadow">
          Sign In to <span className="text-blue-600">Job Portal</span>
        </h2>

        <form onSubmit={handleLogin} className="grid gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          New user?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
