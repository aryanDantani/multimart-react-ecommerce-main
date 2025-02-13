import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem(".auth"); // Example auth check
  return isAuthenticated ? children : <Navigate to="/signin-signup" />;
};

export default PrivateRoute;
