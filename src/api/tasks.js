import axios from "axios";
import { URL } from "../utils/url";
import api from "./axiosInstance";

export const createTask = async (data) => {
  try {
    console.log("Data", data);
    const response = await api.post("", data);
    console.log("CREATE", response?.data,);
    return response?.data;
  } catch (error) {
    console.log(error);
    // throw error.response?.data?.error || "Task Creation failed";
  }
};

export const updateTask = async (data, id) => {
  console.log(`/${id}`, data);
  try {
    const response = await api.put(`/${id}`, data);
    console.log("UPDATE", response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Task Updation failed";
  }
};

export const deleteTask = async (id) => {
  console.log("Id -->", id, `/${id}`);
  try {
    const response = await api.delete(`/${id}`);
    console.log("DELETE", response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Task Deletion failed";
  }
};

export const getTasks = async () => {
  try {
    const response = await api.get("");
    console.log("GET", response?.data);
    return response?.data;
  } catch (error) {
    throw error.response?.data?.error || "Tasks cant be  fetched";
  }
};
