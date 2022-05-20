import React from "react";
import { Link } from "react-router-dom";
import { Item, List, Menu } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Item.Content style={{ padding: "2em" }}>
      <List horizontal>
        <List.Item>Not Found</List.Item>
        <List.Item>|</List.Item>
        <List.Item>
          <Link to="/">
            <Menu.Item name="Go to Home Page" active={true}></Menu.Item>
          </Link>
        </List.Item>
      </List>
    </Item.Content>
  );
};

export default NotFound;
