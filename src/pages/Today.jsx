import React from "react";
import { getCurrentDate, getCurrentDay } from "../utils/common-utils";
import { useSelector } from "react-redux";
import { TaskList } from "../components/TaskList";
import { NewTask } from "../components/NewTask";

export const Today = () => {
  let tasks = useSelector((state) => state?.allTasks?.tasks);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const isSameDate = (date1, date2) => {
    return (
      date1?.getFullYear() === date2?.getFullYear() &&
      date1?.getMonth() === date2?.getMonth() &&
      date1?.getDate() === date2?.getDate()
    );
  };

  tasks = tasks.filter((task) => {
    const taskDate = new Date(task.dueDate);
    taskDate.setHours(0, 0, 0, 0);
    return isSameDate(taskDate, currentDate);
  });

  console.log("filtered tasks", tasks);
  return (
    <div>
      <div className="flex flex-row gap-4 mt-10 w-fit rounded font-bold text-white text-xl bg-green-900 p-2 px-4 mb-10  ">
        <div className="font-bold">{getCurrentDate()}</div>
        <div className="">|</div>
        <div className="font-bold">Today</div>
        <div className="">|</div>
        <div className="font-bold">{getCurrentDay()}</div>
      </div>
      <NewTask />
      <div className="my-4">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
