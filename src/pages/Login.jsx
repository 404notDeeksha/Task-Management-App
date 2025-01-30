import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 px-10 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 font-[400]">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-y-2 font-[400]">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 text-blue-500 border-gray-400 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-600">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-6"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/app/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
