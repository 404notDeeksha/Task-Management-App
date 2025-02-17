import React from "react";
import { useDispatch } from "react-redux";
import { startAdding } from "../redux/slices/tasksManagementSlice";
import { openModal } from "../redux/slices/modalSlice";

export const NewTask = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(startAdding());
        dispatch(openModal("createTask"));
      }}
      className="w-fit px-4 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-700"
    >
      + New Task
    </button>
  );
};
