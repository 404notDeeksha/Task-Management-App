import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, contentKey: null };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contentKey = action.payload;
      console.log("ModalSlice", state.isOpen, action);
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contentKey = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
