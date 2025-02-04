import React, { useEffect } from "react";
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
      dueDate: defaultValues?.dueDate ? new Date(defaultValues.dueDate) : null,
      status: defaultValues?.status || "",
      priority: defaultValues?.priority || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col gap-4"
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
            selected={field.value ? new Date(field.value) : null}
            minDate={new Date()}
            dateFormat="dd/MM/yy"
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
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      {errors.status && (
        <p className="text-red-500 text-sm">{errors.status.message}</p>
      )}

      <select
        {...register("priority", { required: "Priority is required" })}
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      >
        <option value="">Select priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
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
          {defaultValues?._id ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};
