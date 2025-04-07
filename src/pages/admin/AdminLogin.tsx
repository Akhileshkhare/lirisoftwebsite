import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URI } from "../../config/apiConfig";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URI}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("adminToken", data.token); // Save token to localStorage
        navigate("/admin");
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Display error message
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Image */}
      <div className="w-1/2 bg-gray-100">
        <img
          src="/login.jpg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md flex items-center justify-center flex-col">
          
          <form onSubmit={handleLogin} className="w-[360px] space-y-4 border p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[100px] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>
          </form>
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )} {/* Display error message */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
