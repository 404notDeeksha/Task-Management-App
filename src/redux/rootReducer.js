import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";
import sidebarReducer from "./slices/sidebarSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
