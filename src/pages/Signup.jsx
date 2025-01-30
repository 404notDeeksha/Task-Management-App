import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 px-10 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          {/* Name Input */}
          <div className="flex flex-col gap-y-2 font-[400]">
            <label htmlFor="name" className="block text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-y-2 font-[400]">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Agree to Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="h-4 w-4 text-blue-500 border-gray-400 rounded"
            />
            <label htmlFor="agreeTerms" className="ml-2 text-gray-600">
              I agree to the{" "}
              <span className="text-blue-500">Terms and Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-6"
            disabled={!agreeTerms} // Disable button if terms are not agreed
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/app/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
