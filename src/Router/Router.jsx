import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
        {index: true, Component: Home}
    ],
  },
]);
