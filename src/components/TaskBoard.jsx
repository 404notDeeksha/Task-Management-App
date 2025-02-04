import { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { updateTask, createTask, deleteTask, getTasks } from "../api/tasks";

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
    console.log(data, currentTask);
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
        console.log("Adding task", currentTask, data);
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
        console.log("Deleted Task", taskId);
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== taskId)
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mt-10 mb-4 px-6">
        <h2 className="text-xl font-bold text-gray-900">{getCurrentDate()}</h2>
        <button
          onClick={() => {
            setIsAdding(true);
            setIsEditing(false);
            setCurrentTask(null);
          }}
          className="px-4 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-700"
        >
          + Create New Task
        </button>
      </div>

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

      <ul className="bg-white p-4 rounded-lg shadow">
        {tasks.length === 0 && !isAdding ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks
            .filter((task) => task._id !== currentTask?._id)
            .map((task) => (
              <li
                key={task._id}
                className="p-2 border-b last:border-none flex flex-col gap-3"
              >
                <h3 className="font-bold text-gray-900">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-gray-600">
                  Due Date: {task.formattedDueDate}
                </p>
                <p className="text-gray-600">Status: {task.status}</p>
                <p className="text-gray-600">Priority: {task.priority}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setIsAdding(false);
                      setCurrentTask(task);
                    }}
                    className="text-green-600 hover:text-green-800 mt-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};
