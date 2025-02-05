import api from "./axiosInstance";

export const createTask = async (data) => {
  try {
    const response = await api.post("", data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (data, id) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async () => {
  try {
    const response = await api.get("");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
