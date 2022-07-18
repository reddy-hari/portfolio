import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header, Icon } from "semantic-ui-react";
import { API_Key, ID, YouTube_API } from "../../../constants/constants";
import { YouTubeData } from "./YouTubeTypes";
import YTVideoCard from "./YTVideoCard";

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
      // console.log(vids.data);
    });

    youtubeVideos.catch((error) => {
      console.log(error);
    });

    return () => {};
  }, []);

  return (
    <div>
      <div style={{ margin: "2em" }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="youtube" color="red" />
          <Header.Content>YouTube Videos</Header.Content>
        </Header>
      </div>
      <div className="ui cards centered" style={{ margin: "1em" }}>
        {ytVideos.items.map((ytvid) => {
          return <YTVideoCard key={ytvid.id.videoID} ytVideo={ytvid} />;
        })}
      </div>
    </div>
  );
};

export default YouTubeBlog;
