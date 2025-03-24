import axios from "axios";
import { URL } from "../utils/url";
import { persistor } from "../redux/store";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.SIGNUP_URL}`, userData, {
      headers: {
        "Content-Type": "application/json",
        Origin: window.location.origin, // Ensure origin is sent
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.LOGIN_URL}`, userData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Origin: window.location.origin, // Ensure origin is sent
      },
    });
    console.log("Login Response", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export const logoutUser = async () => {
  console.log("Logging out");
  localStorage.removeItem("token");
  try {
    await axios.post(
      `${URL.LOGOUT_URL}`,
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin, // Ensure origin is sent
        },
      }
    ); // ✅ Ensures cookies are handled
  } catch (error) {
    console.error("Logout failed:", error.response?.data?.message);
  }
  persistor.purge();
};
