import React from "react";
import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";

export const Inbox = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  return (
    <div className="flex flex-col mt-10 ">
      <h1 className=" font-bold text-gray-900 text-3xl">Inbox</h1>
      <div className="">
        <TaskList tasks={allTasks} />
      </div>
    </div>
  );
};
