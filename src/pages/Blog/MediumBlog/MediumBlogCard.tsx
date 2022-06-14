import React from "react";
import { IBlogProps } from "./MediumTypes";

const MediumBlogCard: React.FC<IBlogProps> = (props: IBlogProps) => {
  return (
    <>
      <div className="ui card">
        <div className="content">
          <div className="header">{props.blogPost.title}</div>
          <div className="meta">{props.blogPost.pubDate}</div>
          {/* <div
              className="description"
              dangerouslySetInnerHTML={{ __html: props.blogPost.description }}
            /> */}
        </div>
      </div>
    </>
  );
};

export default MediumBlogCard;
