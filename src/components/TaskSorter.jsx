import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/slices/alltasksSlice";

export const TaskSorter = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.allTasks.sortBy);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <select
        id="sort"
        value={sortBy || ""}
        onChange={handleSortChange}
        className="border px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="" disabled>
          Sort
        </option>
        <option value="dueDateAsc">Due Date (Ascending)</option>
        <option value="createdAtDesc">Creation Date (Newest First)</option>

        <option value="priority">Priority (High {">"} Low)</option>
        <option value="progress-asc">Progress (To Do {">"} In Progress)</option>
        <option value="progress-desc">
          Progress (In Progress {">"} To Do)
        </option>
      </select>
    </div>
  );
};
