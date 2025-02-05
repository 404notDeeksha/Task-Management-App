import axios from "axios";
import { URL } from "../utils/url";

const api = axios.create({
  baseURL: URL.TASK_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
