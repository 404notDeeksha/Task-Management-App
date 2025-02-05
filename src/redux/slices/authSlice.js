import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      // console.log("ACTION", action);
      // console.log("STATE", state.user, state.token);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // console.log("STATE", state.user, state.token, state.isAuthenticated);
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
