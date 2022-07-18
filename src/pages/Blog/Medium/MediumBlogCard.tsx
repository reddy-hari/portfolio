import moment from "moment";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Button, Icon, Image } from "semantic-ui-react";
import stripHTML from "../../../utils/StripHTML";
import { IBlogProps } from "./MediumTypes";

const MediumBlogCard: React.FC<IBlogProps> = (props: IBlogProps) => {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <Image
            src={props.blogPost.thumbnail}
            size="medium"
            rounded
            fluid
            style={{ height: "200px", objectFit: "cover" }}
          />
          <a href={props.blogPost.link}>
            <div className="header" style={{ textDecoration: "none", marginTop: "1em" }}>
              <span>{props.blogPost.title}</span>
              <span style={{ paddingLeft: "1em" }}>
                <Icon name="external" size="small" color="blue" />
              </span>
            </div>
          </a>
          <div
            className="meta"
            style={{ paddingTop: "3px", paddingBottom: "4px", fontSize: "0.8rem" }}
          >
            <span>{moment(`${props.blogPost.pubDate}Z`).format("LL")}</span>
          </div>
          <div>
            <LinesEllipsis
              text={stripHTML(props.blogPost.description)}
              maxLine="5"
              ellipsis=" ..."
              trimRight
              basedOn="words"
              component="div"
              style={{ textAlign: "justify" }}
            />
          </div>
          <div style={{ paddingTop: "1em", textAlign: "center" }}>
            <Button size="tiny" color="blue">
              View Full Article
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediumBlogCard;
