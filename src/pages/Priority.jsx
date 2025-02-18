import React from "react";
import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";

export const Priority = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  const highPriorityTasks = allTasks.filter(
    (tasks) => tasks.priority === "High"
  );
  const mediumPriorityTasks = allTasks.filter(
    (tasks) => tasks.priority === "Medium"
  );
  const lowPriorityTasks = allTasks.filter((tasks) => tasks.priority === "Low");
  return (
    <div className="flex flex-col mt-10 gap-8">
      <h1 className=" font-bold text-gray-900 text-3xl">Priority</h1>

      <div className="">
        <h3 className="font-bold text-gray-900 text-lg border-b pb-2 ">High</h3>
        <div className="mt-3 px-1">
          <TaskList tasks={highPriorityTasks} />
        </div>
      </div>

      <div className="">
        <h3 className="font-bold text-gray-900 text-lg border-b pb-2 ">
          Medium
        </h3>
        <div className="mt-3 px-1">
          <TaskList tasks={mediumPriorityTasks} />
        </div>
      </div>

      <div className="">
        <h3 className="font-bold text-gray-900 text-lg border-b pb-2 ">Low</h3>
        <div className="mt-3 px-1">
          <TaskList tasks={lowPriorityTasks} />
        </div>
      </div>
    </div>
  );
};
