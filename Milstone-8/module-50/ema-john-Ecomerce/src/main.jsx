import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./componets/layout/Layout.jsx";
import Shop from "./componets/Shop/Shop.jsx";
import Login from "./componets/Login/Login.jsx";
import Orders from "./componets/Orders/Orders.jsx";
import cartProductLoader from "./componets/loaders/cartProductLoader.js";
import Proceed from "./componets/Proceed/Proceed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "order",
        element: <Shop></Shop>,
      },
      {
        path: "review",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "proceed",
        element: <Proceed></Proceed>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
