import { getTasks } from "../api/tasks";
import { setAllTasks } from "../redux/slices/alltasksSlice";

export const fetchTasks = async (dispatch, sortBy) => {
  try {
    /* Get all tasks from server */
    const result = await getTasks();
    if (result?.success) {
      /* Hydrate redux with all tasks as per mentioned sort order*/
      dispatch(setAllTasks(result.data, sortBy));
    }
  } catch (err) {
    console.log("Error in fetching Tasks data", err);
  }
};
