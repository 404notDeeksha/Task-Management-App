import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Priority } from "./../pages/Priority";
import { routes } from "./routes";
import { Today } from "./../pages/Today";
import { TaskBoard } from "./../components/TaskBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.signup} element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Dashboard />}>
          <Route path={routes.priority} element={<Priority />} />
          <Route index path={routes.today} element={<Today />} />
          <Route path={routes.inbox} element={<TaskBoard />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
