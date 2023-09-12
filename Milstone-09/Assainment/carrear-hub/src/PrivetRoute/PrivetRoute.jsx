/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
