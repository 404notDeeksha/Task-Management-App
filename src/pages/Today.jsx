import React from "react";
import {
  getCurrentDate,
  getCurrentDay,
  getFormattedDate,
} from "../utils/common-utils";
import { useSelector } from "react-redux";
import { TaskList } from "../components/TaskList";
import { NewTask } from "../components/NewTask";

export const Today = () => {
  console.log(getFormattedDate());
  const tasks = useSelector((state) => state?.allTasks?.tasks);
  console.log(tasks);
  return (
    <div>
      <div className="flex flex-row gap-4 ">
        <div className="font-bold">{getCurrentDate()}</div>
        <div className="">|</div>
        <div className="font-bold">Today</div>
        <div className="">|</div>
        <div className="font-bold">{getCurrentDay()}</div>
      </div>
      <div className="border-b text-gray-500 my-1"></div>
      <NewTask />
      <TaskList tasks={tasks} />
      {/* <TaskList /> */}
    </div>
  );
};
