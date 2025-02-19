import { createSlice } from "@reduxjs/toolkit";

const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: {
    tasks: [],
    sortBy: null,
  },
  reducers: {
    setAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.tasks = sortTasks([...state.tasks], action.payload);
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

const sortTasks = (tasks, sortBy) => {
  if (!sortBy) return tasks;

  //a-a b-b
  return tasks.sort((a, b) => {
    switch (sortBy) {
      case "dueDateAsc":
        return new Date(a.dueDate) - new Date(b.dueDate);
      case "createdAtDesc":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "priority":
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      case "progress-asc":
        const ascProgressOrder = { "To Do": 1, "In Progress": 2, Completed: 3 };
        return ascProgressOrder[a.status] - ascProgressOrder[b.status];
      case "progress-desc":
        const descProgressOrder = {
          "In Progress": 1,
          "To Do": 2,
          Completed: 3,
        };
        return descProgressOrder[a.status] - descProgressOrder[b.status];
      default:
        return 0;
    }
  });
};

export const { setAllTasks, addTask, updateTaskState, removeTask, setSortBy } =
  allTasksSlice.actions;
export default allTasksSlice.reducer;
