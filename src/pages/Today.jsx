import React from "react";
import {
  formattedDateDDMMMYYYY,
  getCurrentDate,
  getCurrentDay,
  getFormattedDate,
} from "../utils/common-utils";
import { useSelector } from "react-redux";
import { TaskList } from "../components/TaskList";
import { NewTask } from "../components/NewTask";

export const Today = () => {
  console.log(getFormattedDate());
  const currentDate = formattedDateDDMMMYYYY;
  const tasks = useSelector((state) => state?.allTasks?.tasks);
  tasks.filter((tasks) => tasks.formattedDueDate === currentDate);
  console.log("filtered tasks", tasks, currentDate);
  //filter tasks with current date & send
  console.log(tasks);
  return (
    <div>
      <div className="flex flex-row gap-4 mt-10 ">
        <div className="font-bold">{getCurrentDate()}</div>
        <div className="">|</div>
        <div className="font-bold">Today</div>
        <div className="">|</div>
        <div className="font-bold">{getCurrentDay()}</div>
      </div>
      <div className="border-b text-gray-500 mb-6"></div>
      <NewTask />

      <TaskList tasks={tasks} />
    </div>
  );
};
