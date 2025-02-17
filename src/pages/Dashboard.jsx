import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const data = useSelector((state) => state.auth.user);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Data", data);
  return (
    <div className="flex flex-row w-full h-screen">
      <Navbar />
      <div className="px-4 sm:px-6  mx-auto my-5 min-h-screen flex flex-col max-w-screen-md w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
