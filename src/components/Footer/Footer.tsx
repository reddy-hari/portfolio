import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "3em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Frequented Questions</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Writing</List.Item>
                  <List.Item as="a">Coaching</List.Item>
                  <List.Item as="a">Photography</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage
                  users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
