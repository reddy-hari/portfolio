import React from "react";
import { IBlogProps } from "./MediumTypes";

const MediumBlogPost: React.FC<IBlogProps> = (props: IBlogProps) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.blogPost.description }} />
    </>
  );
};

export default MediumBlogPost;
