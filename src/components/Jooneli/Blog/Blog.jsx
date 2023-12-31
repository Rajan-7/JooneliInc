import React from "react";
import BlogHeader from "./BlogHeader";
import Footer from "../Footer/Footer";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-heading">
            <span className="color-1">Latest blog</span> of our website
          </div>
          <div className="blog-contents">
            <div className="blog-1">
              <div className="image-class-rsk"></div>
              <div className="content-heading">Overcoming Risk</div>
              <p>
                By implementing robust cybersecurity measures, regular
                monitoring, and employee training to ensure the security of
                financial transactions.
              </p>
            </div>
            <div className="blog-1">
              <div className="image-class-cwc"></div>
              <div className="content-heading">Connecting with clients</div>
              <p>
                Incorporating through personalized communication through
                platforms like social media, email, and in-person interactions
                to build and maintain strong relationships.
              </p>
            </div>
            <div className="blog-1">
              <div className="image-class-cc"></div>
              <div className="content-heading">
                Collaboration & communication
              </div>
              <p>
                By adopting integrated digital communication tools, and
                establishing clear workflows that facilitate seamless
                collaboration among team members
              </p>
            </div>
          </div>
          <div className="blog-action">
            <div className="action">
              <i class="fa-solid fa-square-caret-right fa-rotate-180"></i>
            </div>
            <div className="action">
              <i class="fa-solid fa-square-caret-right"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
