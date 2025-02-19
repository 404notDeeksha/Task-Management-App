import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../routes/routes";

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated === undefined) return null;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />}</>;
};
