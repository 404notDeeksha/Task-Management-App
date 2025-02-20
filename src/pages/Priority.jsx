import React from "react";
import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";

function groupByPriority(list) {
  return list.reduce((acc, item) => {
    // console.log("ACC,ITEM", acc, item);

    if (!acc[item.priority]) {
      // console.log("!ACC[ITEM.PRIORITY]", acc[item.priority]);

      acc[item.priority] = [];
      // console.log("ACC[ITEM.PRIORITY]", acc[item.priority]);
    }
    acc[item.priority].push(item);
    // console.log("FINAL", acc[item.priority]);
    // console.log("ACC", acc);

    return acc;
  }, {});
}

export const Priority = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  const groupedTasks = groupByPriority(allTasks);
  // console.log(groupedTasks);
  const priorityOrder = ["High", "Medium", "Low"];

  return (
    <div className="flex flex-col mt-10 gap-8 h-screen pb-20">
      <h1 className=" block w-fit rounded font-bold text-white text-3xl bg-green-900 p-2 px-16">
        Priority
      </h1>

      <div className="mt-8 flex-1 flex overflow-y-auto scrollbar-hide flex-row justify-between gap-5">
        {groupedTasks &&
          Object.keys(groupedTasks)
            .sort((a, b) => priorityOrder.indexOf(a) - priorityOrder.indexOf(b))
            .map((priority) => {
              return (
                <div className="max-w-[400px] w-full">
                  <h1 className="block w-fit rounded font-bold text-white text-lg bg-green-900 p-2 px-3 mb-5">
                    {priority}
                  </h1>
                  <TaskList tasks={groupedTasks[priority]} />
                </div>
              );
            })}
      </div>
    </div>
  );
};
