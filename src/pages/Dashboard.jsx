import React from "react";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const data = useSelector((state) => state.auth.user);
  console.log("Data", data);
  return (
    <div>
      <div className="">{data.email}</div>
      <div className="">{data.name}</div>
    </div>
  );
};
