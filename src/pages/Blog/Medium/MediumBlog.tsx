import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Icon } from "semantic-ui-react";
import { API_Key, RSS_2_JSON, RSS_URL } from "../../../constants/constants";
import MediumBlogCard from "./MediumBlogCard";
import { MediumStories } from "./MediumTypes";
import "../../../shared/HorizontalLine.css";

const MediumBlog = () => {
  const [mediumBlog, setMediumBlog] = useState<MediumStories>({
    status: "",
    feed: {
      author: "",
      description: "",
      image: "",
      link: "",
      title: "",
      url: "",
    },
    items: [],
  });

  useEffect(() => {
    const mediumStories = axios.get(RSS_2_JSON, {
      params: { rss_url: RSS_URL.medium, api_key: API_Key.medium },
    });

    mediumStories.then((stories) => {
      setMediumBlog(stories.data);
    });

    return () => {};
  }, []);

  return (
    <div>
      <div style={{ margin: "2em" }}>
        <Header as="h4" id="pageHeaderLine">
          <Icon name="medium" style={{ display: "inline-block" }} />
          <Header.Content style={{ display: "inline-block", padding: "0em" }}>
            Medium Blog Posts
          </Header.Content>
        </Header>
      </div>
      <div className="ui cards centered" style={{ margin: "1em" }}>
        {mediumBlog.items.map((bp) => {
          return <MediumBlogCard key={bp.guid} blogPost={bp} />;
        })}
      </div>
    </div>
  );
};

export default MediumBlog;
