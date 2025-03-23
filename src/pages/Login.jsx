import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { loginUser } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { routes } from "../routes/routes";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.inbox);
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser({
        email: email,
        password: password,
      });
      if (result.success) {
        // setTimeout();
        localStorage.setItem("token", result.user.token);
        navigate(routes.login);
        dispatch(loginSuccess({ user: result.user }));
        console.log("Account found");
      }
    } catch (error) {
      console.log("Account not found", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 px-10 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2 ">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition mt-6 font-bold"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm flex flex-row gap-2 items-center justify-center">
          <p className=" text-gray-600">Don't have an account? </p>
          <Link to={routes.signup} className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
