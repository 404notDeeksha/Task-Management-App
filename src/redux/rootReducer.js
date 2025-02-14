import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import uiReducer from "./slices/uiSlice";
import tasksByDateReducer from "./slices/tasksByDate";
import tasksByPriorityReducer from "./slices/tasksByPriority";
import tasksPendingBeforeTodayReducer from "./slices/tasksPendingBeforeToday";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  ui: uiReducer,
  tasksByDate: tasksByDateReducer,
  tasksByPriority: tasksByPriorityReducer,
  tasksPendingBeforeToday: tasksPendingBeforeTodayReducer,
});

export default rootReducer;
