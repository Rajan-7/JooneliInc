import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./bod.css";

const Bod = () => {
  return (
    <>
      <Header />
      <div className="blog-section">
        <div className="blog-container">
          <div className="blog-heading">Our Board of Directors</div>
          <div className="blog-contents">
            <div className="blog-1">
              <img src="/image/photo.jpeg" alt="" />
              <div className="content-heading">Jhon Fredrick</div>
              <div className="title">CEO, XY Institute</div>
              <p>
                "Jooneli is one of the best IT company of Nepal. I'll recommend
                everyone to choose Jooneli for effective & reliable solution."
              </p>
            </div>
            <div className="blog-1">
              <img src="/image/photo2.jpeg" alt="" />
              <div className="content-heading">Henry Davis</div>
              <div className="title">Managing Director, XY Company</div>
              <p>
                "Jooneli is one of the best IT company of Nepal. I'll recommend
                everyone to choose Jooneli for effective & reliable solution."
              </p>
            </div>
            <div className="blog-1">
              <img src="/image/photo3.png" alt="" />
              <div className="content-heading">Jhon Fredrick</div>
              <div className="title">CEO, XY Institute</div>
              <p>
                "Jooneli is one of the best IT company of Nepal. I'll recommend
                everyone to choose Jooneli for effective & reliable solution."
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

export default Bod;
