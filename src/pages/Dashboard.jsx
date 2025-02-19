import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <div>Loading...</div>;
  }
  console.log("user", user);
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <Navbar />
      <div className="px-4 sm:px-6  mx-auto my-5 min-h-screen flex flex-col max-w-screen-md w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
