import { createSlice } from "@reduxjs/toolkit";
import { setDataToLocalStorage } from "../../utils/common-utils";
// localStorage.getItem("token") ||!!localStorage.getItem("token")
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("ACTION", action);

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      console.log("STATE", state.user, state.token);
      // setDataToLocalStorage("token", action.payload.token);
      // setDataToLocalStorage("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      console.log("STATE", state.user, state.token, state.isAuthenticated);
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
