import React from "react";
import BlogHeader from "./BlogHeader";
import Footer from "../Footer/Footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./blog.css";
import { useAuth } from "../store/auth";

const Blog = () => {
  const { blogs } = useAuth();
  return (
    <>
      <BlogHeader />
      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-heading">
            <span className="color-1">Latest blog</span> of our website
          </div>
            <div className="blog-contents">
              {blogs.map((cur, ind) => {
                return (
                  <div className="blog-1" key={ind}>
                    <div className="image">
                      <img
                        src={`http://localhost:5005/image/${cur.image}`}
                        alt="BLogs Information"
                        height="250"
                        width="100%"
                      />
                    </div>
                    <div className="content-heading">{cur.name}</div>
                    <p>{cur.description}</p>
                  </div>
                );
              })}
            </div>
          {/* <div className="blog-action">
            <div className="action">
              <i class="fa-solid fa-square-caret-right fa-rotate-180"></i>
            </div>
            <div className="action">
              <i class="fa-solid fa-square-caret-right"></i>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
