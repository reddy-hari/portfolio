import React from "react";
import {
  Card,
  Feed,
  Grid,
  Icon,
  Item,
  List,
  SemanticICONS,
} from "semantic-ui-react";
import { certificates, degrees } from "../../assets/education";
import { workExperience, workSummary } from "../../assets/workExperience";
import Navigation from "../../components/Navigation";

const Work = () => {
  return (
    <div>
      <Navigation />

      <Grid padded relaxed="very">
        <Grid.Column width={12}>
          <Item.Group>
            <h1>Professional Experience</h1>
          </Item.Group>

          <Item.Group>
            <h3>Summary</h3>
            <hr></hr>
            <Item>
              <List bulleted>
                {workSummary.map((ws) => {
                  return <List.Item key={ws}>{ws}</List.Item>;
                })}
              </List>
            </Item>
          </Item.Group>
          <h3>Job Roles & Position Specifics </h3>
          <hr></hr>
          <Item.Group divided relaxed="very">
            {workExperience.map((ex, index) => {
              return (
                <Item key={ex.company + index}>
                  <Item.Image size="tiny" src={ex.logo} />
                  <Item.Content>
                    <Item.Header as="a">{ex.company}</Item.Header>
                    <Item.Meta>{ex.title} </Item.Meta>
                    <Item.Description>
                      <List bulleted>
                        {ex.roles.map((role) => (
                          <List.Item key={role}>{role}</List.Item>
                        ))}
                      </List>
                    </Item.Description>
                    <Item.Extra>{ex.jobType}</Item.Extra>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
        </Grid.Column>

        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Card.Header>Education</Card.Header>
              <Feed size="small">
                {degrees.map((degree) => (
                  <Item.Group key={degree.graduated}>
                    <Feed.Event>
                      <Feed.Content>
                        <List vertical="true" size="small">
                          <List.Item>
                            <Feed.Label>
                              {degree.course} | {degree.major}
                            </Feed.Label>
                          </List.Item>
                          <List.Item>
                            <Feed.Label>{degree.university}</Feed.Label>
                          </List.Item>
                          <List.Item>
                            <Feed.Label>
                              <Icon
                                name={"checked calendar" as SemanticICONS}
                              />
                              {degree.graduated}
                            </Feed.Label>
                          </List.Item>
                        </List>
                      </Feed.Content>
                    </Feed.Event>
                  </Item.Group>
                ))}
              </Feed>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Certifications</Card.Header>
              <Feed size="small">
                {certificates.map((certificate) => (
                  <Item.Group key={certificate.credential}>
                    <Feed.Event>
                      <Feed.Content>
                        <List vertical="true" size="small">
                          <List.Item>
                            <a
                              href={certificate.link}
                              style={{ textDecoration: "none" }}
                            >
                              {certificate.title}
                            </a>
                          </List.Item>
                          <List.Item>
                            <Feed.Label>
                              {certificate.offeredBy} | {certificate.platform}
                            </Feed.Label>
                          </List.Item>
                          <List.Item>
                            <Feed.Label>
                              Credential | {certificate.credential}
                            </Feed.Label>
                          </List.Item>
                        </List>
                      </Feed.Content>
                    </Feed.Event>
                  </Item.Group>
                ))}
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Work;
