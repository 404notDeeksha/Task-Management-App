import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../utils/fetchTasks";

export const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!user) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetchTasks(dispatch);
  }, []);

  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <Navbar />
      <div className="px-4 sm:px-6  mx-auto my-5 min-h-screen flex flex-col max-w-screen-md w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
