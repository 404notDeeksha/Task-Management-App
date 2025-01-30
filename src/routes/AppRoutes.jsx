import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/app/login" element={<Login />} />
      <Route path="/app/signup" element={<Signup />} />
      <Route path="/app/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/app/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
