import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import applayedJobLoader from "./utilities/applyedJobLoader.js";
import AppliedJob from "./components/AppliedJob/AppliedJob.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "applied-job",
        element: <AppliedJob></AppliedJob>,
        loader: applayedJobLoader,
      },
      {
        path: "statistic",
        element: <Statistic></Statistic>,
        loader: () => fetch("assainmentMarks.json"),
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </React.StrictMode>
);
