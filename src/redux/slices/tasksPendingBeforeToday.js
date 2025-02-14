import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksPendingBeforeToday: [],
};
const tasksPendingBeforeToday = createSlice({
  name: "tasksPendingBeforeToday",
  initialState,
  reducers: {
    setTasksPendingBeforeToday: (state, action) => {
      state.tasksPendingBeforeToday = action.payload;
    },
  },
});

export const { setTasksPendingBeforeToday } = tasksPendingBeforeToday.actions;
export default tasksPendingBeforeToday.reducer;
