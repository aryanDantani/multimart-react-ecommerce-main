// src/routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem(".auth"); // Example auth check
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
