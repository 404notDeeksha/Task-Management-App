import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../utils/fetchTasks";
import { LoaderData } from "../utils/common-components";

export const SharedLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const sortBy = useSelector((state) => state.allTasks.sortBy);

  const dispatch = useDispatch();

  /* Rehydrate redux to show User Data with change in user, sort order */
  useEffect(() => {
    if (user) {
      fetchTasks(dispatch, sortBy);
    }
  }, [user, dispatch, sortBy]);

  /* If there is no user, show Loading spinner */
  if (!user) {
    return (
      <div>
        <LoaderData isLoading={true} />
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <SideNavbar />
      <div className="px-4 sm:px-6  mx-auto my-5 min-h-screen flex flex-col max-w-screen-lg w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
