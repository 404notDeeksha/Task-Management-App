import axios from "axios";
import { URL } from "../utils/url";

export const createTask = async (data) => {
  try {
    const response = await axios.post(`${URL.CREATE_TASK_URL}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Task Creation failed";
  }
};

export const updateTask = async (id, data) => {
  try {
    const response = await axios.put(`${TASK_URL}/:${id}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Task Updation failed";
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${TASK_URL}/:${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Task Deletion failed";
  }
};

export const getTasks = async (data) => {
  try {
    const response = await axios.get(`${TASK_URL}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Tasks cant be  fetched";
  }
};
