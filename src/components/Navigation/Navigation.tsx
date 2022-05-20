import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavStyle = {
  padding: "1em",
};

const Navigation = () => {
  return (
    <div style={NavStyle}>
      <Menu secondary>
        <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item name="home" active={true}></Menu.Item>
          </Link>
          <Link to="/work">
            <Menu.Item name="work" active={true}></Menu.Item>
          </Link>
          <Link to="/gallery">
            <Menu.Item name="photography" active={true}></Menu.Item>
          </Link>
          <Link to="/blog">
            <Menu.Item name="blog" active={true}></Menu.Item>
          </Link>
          <Link to="/about">
            <Menu.Item name="about" active={true}></Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigation;
