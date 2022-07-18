import React from "react";
import { IYTVideoProps } from "./YouTubeTypes";

const YTVideoCard: React.FC<IYTVideoProps> = (props: IYTVideoProps) => {
  return (
    <>
      <div key={props.ytVideo.snippet.title}>{props.ytVideo.snippet.title}</div>
    </>
  );
};

export default YTVideoCard;
