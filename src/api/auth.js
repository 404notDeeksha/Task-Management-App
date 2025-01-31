import axios from "axios";
import { URL } from "../utils/url";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${URL.BASE_URL}/auth/signup`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Signup failed";
  }
};
