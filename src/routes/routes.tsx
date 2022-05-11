import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Gallery from "../pages/Gallery";
import Landing from "../pages/Landing";
import Work from "../pages/Work";

const Paths = () => {
  let routes = ReactRouterDOM.useRoutes([
    { path: "/", element: <Landing /> },
    { path: "gallery", element: <Gallery /> },
    { path: "blog", element: <Landing /> },
    { path: "work", element: <Work /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const NotFound = () => <div style={{ padding: "2em" }}>Not Found</div>;

export default Paths;
