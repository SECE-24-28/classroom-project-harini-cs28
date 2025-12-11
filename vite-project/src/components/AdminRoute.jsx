import React from "react";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const role = sessionStorage.getItem("role");

  if (!isLoggedIn || role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
