import React from "react";
import Paths from "../../routes/routes";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
};

export default Home;
