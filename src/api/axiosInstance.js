import axios from "axios";
import { URL } from "../utils/url";

const api = axios.create({
  baseURL: URL.TASK_URL,
  withCredentials: true,
});

export default api;
