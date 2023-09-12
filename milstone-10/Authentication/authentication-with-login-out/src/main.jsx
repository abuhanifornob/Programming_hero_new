import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Logout from "./components/Logout/Logout.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import { Toaster } from "react-hot-toast";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "logout",
        element: <Logout></Logout>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
