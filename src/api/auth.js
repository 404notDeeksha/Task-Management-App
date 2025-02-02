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
  try {
    const response = await axios.post(`${URL.LOGIN_URL}`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};
