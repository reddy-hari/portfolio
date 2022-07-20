import moment from "moment";
import React from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import LinesEllipsis from "react-lines-ellipsis";
import { IYTVideoProps } from "./YouTubeTypes";
import stripHTML from "../../../utils/StripHTML";

const YTVideoCard: React.FC<IYTVideoProps> = (props: IYTVideoProps) => {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <Image
            src={props.ytVideo.snippet.thumbnails.high.url}
            rounded
            fluid
            style={{ height: "145px", objectFit: "cover" }}
          />
          <a href={"youtube.com"}>
            <div className="header" style={{ textDecoration: "none", marginTop: "1em" }}>
              <span>
                <LinesEllipsis
                  text={stripHTML(props.ytVideo.snippet.title)}
                  maxLine="1"
                  ellipsis=" ..."
                  trimRight
                  basedOn="words"
                  component="div"
                  style={{ textAlign: "justify" }}
                />
              </span>
            </div>
          </a>
          <div
            className="meta"
            style={{ paddingTop: "3px", paddingBottom: "4px", fontSize: "0.8rem" }}
          >
            <span>{moment(`${props.ytVideo.snippet.publishTime}`).format("LL")}</span>
          </div>
          <div>
            <LinesEllipsis
              text={stripHTML(props.ytVideo.snippet.description)}
              maxLine="3"
              ellipsis=" ..."
              trimRight
              basedOn="words"
              component="div"
              style={{ textAlign: "justify" }}
            />
          </div>
          <div style={{ paddingTop: "1em", textAlign: "center" }}>
            <Button size="tiny" color="blue">
              View on YouTube
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YTVideoCard;
