import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export const Dashboard = () => {
  const data = useSelector((state) => state.auth.user);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Data", data);
  return (
    <div>
      <Navbar />
      <div className="">{data.email}</div>
      <div className="">{data.name}</div>
    </div>
  );
};
