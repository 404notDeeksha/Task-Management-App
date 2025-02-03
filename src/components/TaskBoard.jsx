import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/slices/tasksSlice";

export const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim() && taskDescription.trim()) {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
      };
      dispatch(addTask(newTask));
      setTaskTitle("");
      setTaskDescription("");
      setIsAdding(false);
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{getCurrentDate()}</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-700"
        >
          + Create New Task
        </button>
      </div>

      {isAdding && (
        <form
          className="bg-white p-4 rounded-lg shadow-md mb-4"
          onSubmit={handleAddTask}
        >
          <input
            type="text"
            placeholder="Enter task title..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <textarea
            placeholder="Enter task description..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
          <div className="flex justify-end mt-2">
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setTaskTitle("");
                setTaskDescription("");
              }}
              className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Task
            </button>
          </div>
        </form>
      )}

      <ul className="bg-white p-4 rounded-lg shadow">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              <h3 className="font-bold text-gray-900">{task.title}</h3>
              <p className="text-gray-700">{task.description}</p>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-600 hover:text-red-800 mt-2"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
