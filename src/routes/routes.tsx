import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Landing from "../pages/Landing";

const Root = () => {
  let routes = ReactRouterDOM.useRoutes([
    { path: "/", element: <Landing /> },
    { path: "gallery", element: <Landing /> },
    { path: "blog", element: <Landing /> },
    { path: "work", element: <Landing /> },
    { path: "*", element: <Landing /> },
  ]);
  return routes;
};

export default Root;
