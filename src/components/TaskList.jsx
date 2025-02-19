import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { deleteTask, updateTask } from "../api/tasks";
import { startEditing } from "../redux/slices/tasksManagementSlice";
import { openModal } from "../redux/slices/modalSlice";
import { currentDate, formatDate, isPreviousDate } from "../utils/common-utils";
import { fetchTasks } from "../utils/fetchTasks";

export const TaskList = ({ tasks }) => {
  const { isAdding, isEditing, currentTask } = useSelector(
    (state) => state.taskManagement
  );
  const dispatch = useDispatch();

  const handleDeleteTask = async (taskId) => {
    try {
      const result = await deleteTask(taskId);
      if (result.success) {
        fetchTasks(dispatch);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleCheckbox = async (task, id) => {
    const data = {
      ...task,
      status: task.status === "Completed" ? "To Do" : "Completed",
    };
    try {
      const result = await updateTask(data, id);
      if (result?.success) {
        fetchTasks(dispatch);
      }
    } catch (err) {
      console.log("Error updating Task status", err);
    }
  };

  return (
    <ul className=" rounded-lg ">
      {tasks?.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one!</p>
      ) : (
        tasks
          ?.filter((task) => task._id !== currentTask?._id)
          .map((task) => (
            <li
              key={task._id}
              className="border-b pb-4 last:border-none flex flex-row justify-between mb-4 "
            >
              <div className="flex flex-row gap-4">
                <input
                  type="checkbox"
                  name={task._id}
                  className="appearance-none w-4 h-4 rounded-[50%] cursor-pointer border-2 
                   checked:bg-green-800 mt-1"
                  checked={task.status === "Completed"}
                  onChange={() => handleCheckbox(task, task._id)}
                />
                <div className="flex flex-col gap-2">
                  <h3
                    className={`text-black font-[700] montserrat text ${
                      task.status === "Completed" ? "line-through" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <div
                    className={` text-sm text-gray-600  ${
                      task.status === "Completed" ? "line-through" : ""
                    }`}
                  >
                    {task.description}
                  </div>

                  <div className="flex gap-5">
                    <div className="text-xs text-gray-600 mt-2 bg-green-200 w-fit rounded p-2 font-bold ">
                      {task.priority}
                    </div>
                    <div className="text-xs text-gray-600 mt-2 bg-green-200 w-fit rounded p-2 font-bold ">
                      {task.status}
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 items-center my-2">
                    <IoCalendarClearOutline className="text-green-800" />
                    <div
                      className={`text-gray-600 text-xs  ${
                        task.status === "Completed" ? "line-through" : ""
                      } ${
                        isPreviousDate(task.dueDate, currentDate)
                          ? "text-red-500 font-bold"
                          : ""
                      }`}
                    >
                      {formatDate(task.dueDate)}
                    </div>
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
