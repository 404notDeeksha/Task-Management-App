import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarClearOutline } from "react-icons/io5";

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
      className="bg-white p-4 rounded-lg shadow-md mb-2 gap-2 flex flex-col"
    >
      <textarea
        {...register("title", { required: "Title is required" })}
        placeholder="Title"
        className="w-full focus:outline-none focus:ring-0 resize-none overflow-hidden"
        rows="1"
      />
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full placeholder:text-xs focus:outline-none focus:ring-0 resize-none overflow-hidden"
        rows="1"
      />
      <div className="flex justify-start gap-4 items-center mt-2">
        <div className="relative w-contain">
          <IoCalendarClearOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />

          <Controller
            name="dueDate"
            control={control}
            rules={{ required: "Due date is required" }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Date"
                onChange={(date) => field.onChange(date)}
                selected={field.value ? new Date(field.value) : null}
                minDate={new Date()}
                dateFormat="dd MMM yy"
                className="w-full pl-10 py-1.5 text-sm pr-3 placeholder:text-sm border-gray-200 rounded border focus:outline-none"
                popperClassName="!left-0 !top-0 !z-10 !pl-2"
              />
            )}
          />
        </div>

        <div className="relative">
          <select
            {...register("status", { required: "Choose Status" })}
            className="w-contain p-2 text-sm border-gray-200 rounded border placeholder:text-xs focus:outline-none focus:ring-0  text-gray-500"
          >
            <option value="">Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>
        <div className="relative">
          <select
            {...register("priority", { required: "Choose Priority" })}
            className="w-contain p-2 text-sm border-gray-200 rounded border placeholder:text-xs focus:outline-none focus:ring-0 text-gray-500"
          >
            <option value="">Priority</option>
            <option value="Low" className=" hover:bg-green-600">
              Low
            </option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-start mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg mr-2 hover:bg-gray-400 text-xs"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs"
        >
          {defaultValues?._id ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};
