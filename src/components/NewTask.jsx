import React from "react";
import { useDispatch } from "react-redux";
import { startAdding } from "../redux/slices/tasksManagementSlice";
import { openModal } from "../redux/slices/modalSlice";

export const NewTask = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        console.log("Click");
        dispatch(startAdding());
        dispatch(openModal("createTask"));
      }}
      className={` rounded-lg  ${className} `}
    >
      + New Task
    </button>
  );
};
