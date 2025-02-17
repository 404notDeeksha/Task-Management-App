import { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { updateTask, createTask, deleteTask, getTasks } from "../api/tasks";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

export const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        if (response.success) {
          console.log("Tasks", response.data);
          setTasks(response.data);
        }
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async (data) => {
    try {
      let response;
      if (currentTask) {
        response = await updateTask(data, currentTask._id);
        if (response?.success) {
          console.log("Updated Task", response.data);
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === currentTask._id ? response.data : task
            )
          );
        }
      } else {
        response = await createTask(data);
        if (response?.success) {
          console.log("Created Task", response.data);
          setTasks((prevTasks) => [...prevTasks, response.data]);
        }
      }
    } catch (error) {
      console.log("Error", error);
    }

    setCurrentTask(null);
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      if (response.success) {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== taskId)
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      {/* <div className="flex flex-row justify-between mt-10 mb-6 px-6"> */}
      <h1 className=" font-bold text-gray-900 text-3xl my-10">Today</h1>
      <button
        type="button"
        onClick={() => {
          setIsAdding(true);
          setIsEditing(false);
          setCurrentTask(null);
        }}
        className="w-fit px-4 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-700"
      >
        + New Task
      </button>
      {/* </div> */}

      {(isAdding || isEditing) && (
        <TaskForm
          key={currentTask?._id || "new-task"}
          onSubmit={handleAddOrUpdateTask}
          onCancel={() => {
            setIsAdding(false);
            setIsEditing(false);
            setCurrentTask(null);
          }}
          defaultValues={currentTask || {}}
        />
      )}

      <ul className=" p-4 rounded-lg ">
        {tasks.length === 0 && !isAdding ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks
            .filter((task) => task._id !== currentTask?._id)
            .map((task) => (
              <li
                key={task._id}
                className="p-2 border-b mb-2 last:border-none flex flex-row justify-between "
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-black font-[500]">{task.title}</h3>
                  <div className=" text-xs text-gray-600">
                    {task.description}
                  </div>
                  <div className="flex flex-row gap-2 items-center my-2">
                    <IoCalendarClearOutline className="text-green-800" />
                    <div className="text-gray-600 text-xs">
                      {task.formattedDueDate}
                    </div>
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
            ))
        )}
      </ul>
    </>
  );
};
