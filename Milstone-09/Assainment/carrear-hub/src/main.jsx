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
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivetRoute from "./PrivetRoute/PrivetRoute.jsx";

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
        element: (
          <PrivetRoute>
            <AppliedJob></AppliedJob>
          </PrivetRoute>
        ),
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
      {
        path: "signin",
        element: <SignIn></SignIn>,
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
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
