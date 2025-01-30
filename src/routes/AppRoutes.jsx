import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/app/login" element={<Login />} />
      <Route path="/app/signup" element={<Signup />} />
      <Route path="/app/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/app/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
