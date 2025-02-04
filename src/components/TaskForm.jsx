// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export const TaskForm = ({ onSubmit, onCancel }) => {
//   const {
//     control,
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white p-6 rounded-lg shadow-md space-y-4"
//     >
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Title</label>
//         <input
//           {...register("title", { required: "Title is required" })}
//           placeholder="Enter task title"
//           className={`mt-1 block w-full p-2 border ${
//             errors.title ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
//         />
//         {errors.title && (
//           <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
//         )}
//       </div>

//       {/* Description Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Description
//         </label>
//         <textarea
//           {...register("description")}
//           placeholder="Enter task description"
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//         />
//       </div>

//       {/* Due Date Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Due Date
//         </label>
//         <Controller
//           name="dueDate"
//           control={control}
//           rules={{ required: "Due date is required" }}
//           render={({ field }) => (
//             <DatePicker
//               placeholderText="Select due date"
//               onChange={(date) => field.onChange(date)}
//               selected={field.value}
//               className={`mt-1 block w-full p-2 border ${
//                 errors.dueDate ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
//             />
//           )}
//         />
//         {errors.dueDate && (
//           <p className="mt-1 text-sm text-red-600">{errors.dueDate.message}</p>
//         )}
//       </div>

//       {/* Status Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Status
//         </label>
//         <select
//           {...register("status", { required: "Status is required" })}
//           className={`mt-1 block w-full p-2 border ${
//             errors.status ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
//         >
//           <option value="">Select status</option>
//           <option value="todo">To Do</option>
//           <option value="in-progress">In Progress</option>
//           <option value="completed">Completed</option>
//         </select>
//         {errors.status && (
//           <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
//         )}
//       </div>

//       {/* Priority Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Priority
//         </label>
//         <select
//           {...register("priority", { required: "Priority is required" })}
//           className={`mt-1 block w-full p-2 border ${
//             errors.priority ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
//         >
//           <option value="">Select priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//         {errors.priority && (
//           <p className="mt-1 text-sm text-red-600">{errors.priority.message}</p>
//         )}
//       </div>

//       {/* Form Actions */}
//       <div className="flex justify-end space-x-2">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Save Task
//         </button>
//       </div>
//     </form>
//   );
// };

import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TaskForm = ({ onSubmit, onCancel, defaultValues }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      dueDate: defaultValues ? new Date(defaultValues.dueDate) : null,
      status: defaultValues?.status || "",
      priority: defaultValues?.priority || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded-lg shadow-md mb-4"
    >
      <input
        {...register("title", { required: "Title is required" })}
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      />
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      />

      <Controller
        name="dueDate"
        control={control}
        rules={{ required: "Due date is required" }}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select due date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
        )}
      />
      {errors.dueDate && (
        <p className="text-red-500 text-sm">{errors.dueDate.message}</p>
      )}

      <select
        {...register("status", { required: "Status is required" })}
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      >
        <option value="">Select status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      {errors.status && (
        <p className="text-red-500 text-sm">{errors.status.message}</p>
      )}

      <select
        {...register("priority", { required: "Priority is required" })}
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      >
        <option value="">Select priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {errors.priority && (
        <p className="text-red-500 text-sm">{errors.priority.message}</p>
      )}

      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg mr-2 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          {defaultValues ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};
