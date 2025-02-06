import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { TaskBoard } from "../components/TaskBoard";
import Sidebar from "./../components/Sidebar";

export const Dashboard = () => {
  const data = useSelector((state) => state.auth.user);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Data", data);
  return (
    <div className="flex flex-row w-full h-screen">
      {/* <Navbar /> */}
      <Sidebar />
      <TaskBoard />
    </div>
  );
};
