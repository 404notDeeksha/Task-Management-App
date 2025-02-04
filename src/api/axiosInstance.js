import axios from "axios";
import { URL } from "../utils/url";
import { getDataFromLocalStorage } from "../utils/common-utils";

const api = axios.create({
  baseURL: URL.TASK_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getDataFromLocalStorage("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
