import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDate: {},
};
const tasksByDate = createSlice({
  name: "tasksByDate",
  initialState,
  reducers: {
    setTasksByDate: (state, action) => {
      const { date, tasks } = action.payload;
      state.tasksByDate[date] = tasks;
    },
  },
});

export const { setTasksByDate } = tasksByDate.actions;
export default tasksByDate.reducer;
