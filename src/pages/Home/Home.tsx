import React from "react";
import Root from "../../routes/routes";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
};

export default Home;
