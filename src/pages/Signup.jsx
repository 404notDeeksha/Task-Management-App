import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../routes/routes";
import { loginSuccess } from "../redux/slices/authSlice";
import { LoaderData } from "../utils/common-components";
import { loading } from "../redux/slices/loadingSlice";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.loading.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.inbox); // Redirect to Home if already logged in
    }
  }, [isAuthenticated, navigate]);

  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const validatePassword = (password) => {
    if (password.length < 8) return "Too short";
    if (!/(?=.*[A-Z])/.test(password)) return "Add uppercase letter";
    if (!/(?=.*\d)/.test(password)) return "Add a number";
    if (!/(?=.*[@$!%*?&])/.test(password)) return "Add special character";
    return "Strong";
  };

  const togglePasswordVisibility = (e) => {
    e.stopPropagation();
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        event.target.tagName !== "BUTTON"
      ) {
        setShowPassword(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (name === "password") setPasswordStrength(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading(true));
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (passwordStrength !== "Strong") newErrors.password = passwordStrength;
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      dispatch(loading(false));
      return;
    }

    if (!Object.keys(newErrors).length) {
      try {
        const result = await signupUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (result.success) {
          dispatch(loading(false));
          console.log("Account created");
          localStorage.setItem("token", result.user.token);
          navigate(routes.login);
          dispatch(loginSuccess({ user: result.user }));
        }
      } catch (error) {
        dispatch(loading(false));
        console.log("Account is not created", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 px-10 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md transition"
              required
              aria-label="name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md transition"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="block text-gray-600">Password</label>

            <div className="relative" ref={wrapperRef}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md transition"
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

            {passwordStrength && (
              <p
                className={`text-sm ${
                  passwordStrength === "Strong"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordStrength}
              </p>
            )}
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter confirm password"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-md transition"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500 border-gray-400 rounded"
              required
            />
            <label htmlFor="agreeTerms" className="ml-2 text-gray-600  text-sm">
              I agree to the{" "}
              <span className="text-blue-500">Terms and Conditions</span>
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition mt-6 font-bold"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={routes.login} className="underline ">
              Login
            </Link>
          </p>
        </div>
      </div>
      <LoaderData isLoading={isLoading} />
    </div>
  );
};
