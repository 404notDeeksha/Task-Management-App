// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       // console.log("STATE", state.tasks);
//       // console.log("ACTION", action);
//       state.tasks.push(action.payload);
//     },
//     deleteTask: (state, action) => {
//       // console.log("STATE", state.tasks);
//       // console.log("ACTION", action);
//       state.tasks = state.tasks.filter(
//         (task, index) => index !== action.payload
//       );
//     },
//     editTask: (state, action) => {
//       // console.log("STATE", state.tasks);
//       // console.log("ACTION", action);
//       const { index, updatedTask } = action.payload;
//       state.tasks[index] = updatedTask;
//     },
//   },
// });

// export const { addTask, deleteTask, editTask } = taskSlice.actions;
// export default taskSlice.reducer;
