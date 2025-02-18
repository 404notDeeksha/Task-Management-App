import React from "react";
import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";

export const Inbox = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  return (
    <div className="flex flex-col mt-10 ">
      <h1 className="block w-fit rounded font-bold text-white text-3xl bg-green-900 p-2 px-16">
        Inbox
      </h1>
      <div className="mt-8">
        <TaskList tasks={allTasks} />
      </div>
    </div>
  );
};
