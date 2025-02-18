import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/slices/alltasksSlice";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { deleteTask } from "../api/tasks";
import { startEditing } from "../redux/slices/tasksManagementSlice";
import { openModal } from "../redux/slices/modalSlice";

export const TaskList = ({ tasks }) => {
  const { isAdding, isEditing, currentTask } = useSelector(
    (state) => state.taskManagement
  );
  const dispatch = useDispatch();

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      if (response.success) {
        dispatch(removeTask(taskId));
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <ul className=" p-4 rounded-lg ">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one!</p>
      ) : (
        tasks
          .filter((task) => task._id !== currentTask?._id)
          .map((task) => (
            <li
              key={task._id}
              className="p-2 border-b mb-2 last:border-none flex flex-row justify-between "
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-black font-[500]">{task.title}</h3>
                <div className=" text-xs text-gray-600">{task.description}</div>

                <div className="flex flex-row gap-2 items-center my-2">
                  <IoCalendarClearOutline className="text-green-800" />
                  <div className="text-gray-600 text-xs">
                    {task.formattedDueDate}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    dispatch(startEditing(task));
                    dispatch(openModal("createTask"));
                  }}
                  className="text-green-500 hover:text-green-800 mt-2"
                >
                  <MdOutlineModeEditOutline />
                </button>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="text-red-500 hover:text-red-800 mt-2"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))
      )}
    </ul>
  );
};
