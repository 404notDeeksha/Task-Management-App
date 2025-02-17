import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
};
const tasksByDate = createSlice({
  name: "tasksByDate",
  initialState,
  reducers: {
    setTasksByDate: (state, action) => {
      const { date, tasks } = action.payload;
      state.tasks[date] = tasks;
    },
  },
});

export const { setTasksByDate } = tasksByDate.actions;
export default tasksByDate.reducer;
