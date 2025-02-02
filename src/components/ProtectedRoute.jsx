import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  console.log("Protected");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("Auth", isAuthenticated);
  if (isAuthenticated === undefined) return null;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/app/login" />}</>;
};
