import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import MediumBlog from "./Medium";
import YouTubeBlog from "./YouTube";

const Blog = () => {
  return (
    <div>
      <Navigation />
      <YouTubeBlog />
      <MediumBlog />
      <Footer />
    </div>
  );
};

export default Blog;
