import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_Key, RSS_2_JSON, RSS_URL } from "../../../constants/constants";
import MediumBlogCard from "./MediumBlogCard";
import { MediumStories } from "./MediumTypes";

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
      params: { rss_url: "https://medium.com/feed/@mehulkothari05" },
      // params: { rss_url: RSS_URL.medium, api_key: API_Key.medium },
    });

    mediumStories.then((stories) => {
      // const stringifiedStories = JSON.stringify(stories);
      // const parsedStories = JSON.parse(stringifiedStories);
      // const storiesData = parsedStories.data;
      // console.log(storiesData);
      setMediumBlog(stories.data);
    });

    return () => {};
  }, []);

  return (
    <div>
      {/* <div>
        <pre>{mediumBlog.items.map((blogPost) => JSON.stringify(blogPost, null, 2))}</pre>
      </div> */}
      <div className="ui cards centered">
        {mediumBlog.items.map((bp) => {
          return <MediumBlogCard key={bp.guid} blogPost={bp} />;
        })}
      </div>
    </div>
  );
};

export default MediumBlog;
