import { createSlice } from "@reduxjs/toolkit";

const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      if (Array.isArray(state.tasks)) {
        state.tasks.push(action.payload);
      } else {
        state.tasks = [action.payload];
      }
    },
    updateTaskState: (state, action) => {
      console.log("action", action);
      state.tasks = state.tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );

      state.tasks = [
        ...state.tasks.filter((task) => task.status !== "Completed"),
        ...state.tasks.filter((task) => task.status === "Completed"),
      ];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
  },
});

export const { setAllTasks, addTask, updateTaskState, removeTask } =
  allTasksSlice.actions;
export default allTasksSlice.reducer;
