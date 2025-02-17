import { createSlice } from "@reduxjs/toolkit";

const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: {
    tasks: [], // Stores all tasks
    loading: false,
    error: null,
  },
  reducers: {
    setAllTasks: (state, action) => {
      state.tasks = action.payload; // Store all tasks
    },
    addTask: (state, action) => {
      if (Array.isArray(state.tasks)) {
        state.tasks.push(action.payload);
      } else {
        state.tasks = [action.payload];
      }
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
  },
});

export const { setAllTasks, addTask, updateTask, removeTask } =
  allTasksSlice.actions;
export default allTasksSlice.reducer;
