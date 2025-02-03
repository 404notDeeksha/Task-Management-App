import { useState } from "react";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = () => {
    const newTask = prompt("Enter new task:");
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const getCurrentDate = () => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Current Date */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{getCurrentDate()}</h2>
        <button 
          onClick={handleNewTask} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          + Create New Task
        </button>
      </div>

      {/* Task List */}
      <ul className="bg-white p-4 rounded-lg shadow">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              {task}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
