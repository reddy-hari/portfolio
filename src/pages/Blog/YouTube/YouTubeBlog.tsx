import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header, Icon, Label } from "semantic-ui-react";
import { API_Key, ID, YouTube_API } from "../../../constants/constants";
import { YouTubeData } from "./YouTubeTypes";
import YTVideoCard from "./YTVideoCard";
import "../../../shared/HorizontalLine.css";

const YouTubeBlog = () => {
  const [ytVideos, setYTVideos] = useState<YouTubeData>({
    kind: "",
    etag: "",
    regionCode: "",
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
    items: [],
  });

  useEffect(() => {
    const youtubeVideos = axios.get(YouTube_API, {
      params: {
        key: API_Key.youtube,
        channelId: ID.youtube,
        part: "snippet,id",
        order: "date",
        maxResults: "20",
      },
    });

    youtubeVideos.then((vids) => {
      setYTVideos(vids.data);
    });

    youtubeVideos.catch((error) => {
      console.log("YouTube Data API request quota likely reached.");
      console.log(`Error: ${error}`);
    });

    return () => {};
  }, []);

  return (
    <div>
      <div style={{ margin: "2em" }}>
        <Header as="h4" id="pageHeaderLine">
          <Icon style={{ display: "inline-block" }} color="red" className="youtube play" />
          <Header.Content style={{ display: "inline-block", padding: "0em" }}>
            YouTube Videos
          </Header.Content>
        </Header>
      </div>
      <div className="ui cards centered" style={{ margin: "1em" }}>
        {ytVideos.pageInfo.totalResults
          ? ytVideos.items
              .filter(
                (v) => v.snippet.title !== "All Tutorials" && v.snippet.title !== "Hari Reddy"
              )
              .map((ytvid) => {
                return <YTVideoCard key={ytvid.id.videoID} ytVideo={ytvid} />;
              })
          : "Sorry, visit back tomorrow! YouTube threshold for daily requests has likely reached."}
      </div>
    </div>
  );
};

export default YouTubeBlog;
