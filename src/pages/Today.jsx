import React from "react";
import {
  getCurrentDate,
  getCurrentDay,
  getFormattedDate,
} from "../utils/common-utils";
import { useSelector } from "react-redux";

export const Today = () => {
  console.log(getFormattedDate());
  const todayTask = useSelector(
    (state) => state?.tasksByDate?.tasksByDate[getFormattedDate()]
  );
  return (
    <div>
      {/* Today's Date Month | Today | Today's Day */}
      <div className="flex flex-row gap-4 ">
        <div className="font-bold">{getCurrentDate()}</div>
        <div className="">|</div>
        <div className="font-bold">Today</div>
        <div className="">|</div>
        <div className="font-bold">{getCurrentDay()}</div>
      </div>
      <div className="border-b text-gray-500 my-1"></div>
      {/* Show Tasks of the Day */}
      <div className="">{todayTask}</div>
      {/* Add new Task */}
    </div>
  );
};
