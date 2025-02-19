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
import { Inbox } from "../pages/Inbox";
import { Pending } from "../pages/Pending";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.signup} element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate to={routes.today} />} />
          <Route path={routes.today} element={<Today />} />
          <Route path={routes.priority} element={<Priority />} />
          <Route path={routes.inbox} element={<Inbox />} />
          <Route path={routes.pending} element={<Pending />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
