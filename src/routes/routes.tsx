import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Landing from "../pages/Landing";
import Work from "../pages/Work";
import NotFound from "../components/NotFound";

const Paths = () => {
  let routes = ReactRouterDOM.useRoutes([
    { path: "/", element: <Landing /> },
    { path: "gallery", element: <Gallery /> },
    { path: "blog", element: <Landing /> },
    { path: "work", element: <Work /> },
    { path: "about", element: <About /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

export default Paths;
