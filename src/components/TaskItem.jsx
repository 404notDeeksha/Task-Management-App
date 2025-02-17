import React from "react";
import { useSelector } from "react-redux";

export const TaskItem = ({}) => {
  const task = useSelector((state) => state.tasksByDate.tasks);
  return (
    // <ul className=" p-4 rounded-lg ">
    //   {tasks.length === 0 && !isAdding ? (
    //     <p className="text-gray-500">No tasks yet. Add one!</p>
    //   ) : (
    //     tasks
    //       .filter((task) => task._id !== currentTask?._id)
    //       .map((task) => (
    <li
      key={task._id}
      className="p-2 border-b mb-2 last:border-none flex flex-row justify-between "
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-black font-[500]">{task.title}</h3>
        <div className=" text-xs text-gray-600">{task.description}</div>

        <div className="flex flex-row gap-2 items-center my-2">
          <IoCalendarClearOutline className="text-green-800" />
          <div className="text-gray-600 text-xs">{task.formattedDueDate}</div>
        </div>

        {/* <p className="text-gray-600">Status: {task.status}</p> */}
        {/* <p className="text-gray-600">Priority: {task.priority}</p> */}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setIsEditing(true);
            setIsAdding(false);
            setCurrentTask(task);
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
    // ))
    // )}
    // </ul>
  );
};
