import { getTasks } from "../api/tasks";
import { setAllTasks } from "../redux/slices/alltasksSlice";

/* Hydrates redux with all User's Tasks in asked sort order  */
export const fetchTasks = async (dispatch, sortBy) => {
  try {
    const result = await getTasks();
    if (result?.success) {
      dispatch(setAllTasks(result.data, sortBy));
    }
  } catch (err) {
    console.log("Error in fetching Tasks data", err);
  }
};
