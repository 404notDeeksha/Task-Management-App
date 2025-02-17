import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import modalReducer from "./slices/modalSlice";
// import tasksByDateReducer from "./slices/tasksByDate";
// import tasksByPriorityReducer from "./slices/tasksByPriority";
// import tasksPendingBeforeTodayReducer from "./slices/tasksPendingBeforeToday";
import allTasksReducer from "./slices/alltasksSlice";
import taskManagementReducer from "./slices/tasksManagementSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  modal: modalReducer,
  allTasks: allTasksReducer,
  // tasksByDate: tasksByDateReducer,
  // tasksByPriority: tasksByPriorityReducer,
  // tasksPendingBeforeToday: tasksPendingBeforeTodayReducer,
  taskManagement: taskManagementReducer,
});

export default rootReducer;
