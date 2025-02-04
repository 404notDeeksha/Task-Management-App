import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../redux/slices/tasksSlice";
import { TaskForm } from "./TaskForm";

export const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAddTask = (data) => {
    if (currentTaskIndex !== null) {
      dispatch(
        editTask({ index: currentTaskIndex, updatedTask: serializedDate(data) })
      );
    } else {
      dispatch(addTask(serializedDate(data)));
    }
    setCurrentTaskIndex(null);
    setIsAdding(false);
  };

  const handleEditTask = (data) => {
    dispatch(
      editTask({ index: currentTaskIndex, updatedTask: serializedDate(data) })
    );
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const serializedDate = (data) => {
    const serializedData = { ...data, dueDate: data.dueDate.toISOString() };
    return serializedData;
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
          onClick={() => {
            setIsAdding(true);
            setIsEditing(false);
          }}
          className="px-4 py-2 bg-green-900 text-white rounded-lg shadow hover:bg-green-700"
        >
          + Create New Task
        </button>
      </div>

      {isAdding && (
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsAdding(false)}
        />
      )}

      {isEditing && (
        <TaskForm
          onSubmit={handleEditTask}
          onCancel={() => {
            setIsEditing(false);
            setCurrentTaskIndex(null);
          }}
          defaultValues={
            currentTaskIndex !== null ? tasks[currentTaskIndex] : {}
          }
        />
      )}

      <ul className="bg-white p-4 rounded-lg shadow">
        {tasks.length === 0 && !isAdding ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks
            .filter((_, index) => index !== currentTaskIndex)
            .map((task, index) => (
              <li
                key={index}
                className="p-2 border-b last:border-none flex flex-col gap-3"
              >
                <h3 className="font-bold text-gray-900">{task.title}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-gray-600">
                  Due Date: {new Date(task.dueDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600">Status: {task.status}</p>
                <p className="text-gray-600">Priority: {task.priority}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setIsAdding(false);
                      setCurrentTaskIndex(index);
                    }}
                    className="text-green-600 hover:text-green-800 mt-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
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
