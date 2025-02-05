import axios from "axios";
import { URL } from "../utils/url";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.SIGNUP_URL}`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Signup failed";
  }
};

export const loginUser = async (userData) => {
  console.log("Login Res", userData);
  try {
    const response = await axios.post(`${URL.LOGIN_URL}`, userData, {
      withCredentials: true,
    });
    console.log("Login Res", response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logoutUser = async () => {
  console.log("Logging out");
  try {
    await axios.post(`${URL.LOGOUT_URL}`, {}, { withCredentials: true }); // ✅ Ensures cookies are handled
  } catch (error) {
    console.error("Logout failed:", error.response?.data?.message);
  }
};
