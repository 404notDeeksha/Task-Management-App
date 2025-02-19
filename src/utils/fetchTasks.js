import { getTasks } from "../api/tasks";
import { setAllTasks } from "../redux/slices/alltasksSlice";

export const fetchTasks = async (dispatch) => {
  try {
    const result = await getTasks();
    if (result?.success) {
      dispatch(setAllTasks(result.data));
    }
  } catch (err) {
    console.log("Error in fetching Tasks data");
  }
};
