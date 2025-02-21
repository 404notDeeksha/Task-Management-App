import axios from "axios";
import { URL } from "../utils/url";
import { persistor } from "../redux/store";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.SIGNUP_URL}`, userData);
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
    });
    if (response.data?.user?.token) {
      console.log("Trying to set cookie", `token=${response.data.user.token}`);
      document.cookie = `token=${response.data.user.token}`;
    }
    console.log("Login Res", response.data);
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
  try {
    await axios.post(`${URL.LOGOUT_URL}`, {}, { withCredentials: true }); // ✅ Ensures cookies are handled
  } catch (error) {
    console.error("Logout failed:", error.response?.data?.message);
  }
  persistor.purge();
};
