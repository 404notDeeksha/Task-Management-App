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

  return tasks.sort((a, b) => {
    switch (sortBy) {
      case "dueDateAsc":
        return new Date(a.dueDate) - new Date(b.dueDate);
      case "priority":
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      case "progress-asc":
        const ascProgressOrder = { ToDo: 1, InProgress: 2, Completed: 3 };
        return ascProgressOrder[a.progress] - ascProgressOrder[b.progress];
      case "progress-desc":
        const descProgressOrder = { ToDo: 2, InProgress: 1, Completed: 3 };
        return descProgressOrder[a.progress] - descProgressOrder[b.progress];
      default:
        return 0;
    }
  });
};

export const { setAllTasks, addTask, updateTaskState, removeTask, setSortBy } =
  allTasksSlice.actions;
export default allTasksSlice.reducer;
