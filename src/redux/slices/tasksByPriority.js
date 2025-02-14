import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByPriority: {},
};
const tasksByPriority = createSlice({
  name: "tasksByPriority",
  initialState,
  reducers: {
    setTasksByPriority: (state, action) => {
      const { priority, tasks } = action.payload;
      state.tasksByPriority[priority] = tasks;
    },
  },
});

export const { setTasksByPriority } = tasksByPriority.actions;
export default tasksByPriority.reducer;
