import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="blog">This is the blog content</div>
      <Footer />
    </>
  );
};

export default Blog;
