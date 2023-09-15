import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import News from "../layout/News";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import LoginLogOut from "../layout/LoginLogOut";
import Login from "../pages/Login/login";
import SignUp from "../pages/SignUp/SignUp";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLogOut></LoginLogOut>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },

  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <News></News>,
    children: [
      {
        path: ":id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
