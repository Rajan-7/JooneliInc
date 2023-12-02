import React from "react";
import { Link } from "react-router-dom";

const Mainbody = () => {
  return (
    <>
      <main className="main">
        <div className="main-heading">
          Our solutions connect people to financial services in simple, secure
          and affordable ways.
        </div>
        <div className="main-content">
          <div className="main-content--1">
            <div className="icon">
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div className="heading">About Us</div>
            <p>
              An IT company is an organization specializing in information
              technology services, encompassing a wide ran
            </p>
          </div>
          <div className="main-content--1">
            <div className="icon">
              <i class="fa-solid fa-industry"></i>
            </div>
            <div className="heading">Milestones</div>
            <p>
              An IT company is an organization specializing in information
              technology services, encompassing a wide range
            </p>
          </div>
          <div className="main-content--1">
            <div className="icon">
              <i class="fa-solid fa-person-walking-luggage"></i>
            </div>
            <div className="heading">Leadership</div>
            <p>
              An IT company is an organization specializing in information
              technology services, encompassing a wide ran
            </p>
          </div>
        </div>
      </main>
      <div className="boxes">
        <div className="side-flex">
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Enablling financial access</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Digitizing Industry </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Adding Value</div>
            </div>
          </div>
        </div>
        <div className="right-grid">
          <div className="box1">
            <img src="/image/mobile11.jpeg" alt="" />
            <div className="heading">Fintech with the banks</div>
            <div className="sub-heading"></div>
          </div>
          <div className="box1">
            <img src="/image/learn.webp" alt="" />
            <div className="heading">Hands-on-learning</div>
          </div>
          <div className="box1">
            <img src="/image/coding.avif" alt="" />
            <div className="heading">Research and development</div>
          </div>
          <div className="box1">
            <img src="/image/fone.jpg" alt="" />
            <div className="heading">Digital Payment</div>
          </div>
        </div>
      </div>
      <div className="photo-news">
        <div className="photo-info">
          <div className="img-container">
            <Link>
              {" "}
              <img src="/image/photo.jpeg" alt="" />
            </Link>
            <div className="overlay">
              React is a JavaScript library for building user interfaces,
              developed by Facebook. It allows developers to create reusable UI
              components and manage the state of an application efficiently,
              making it a popular choice for building modern web applications.
              <div className="name">Jooneli</div>
              <div className="info">MD,Ktm</div>
              <div className="action">
                <button>Read More</button>
              </div>
              <div className="forward-backward">
                <i class="fa-solid fa-less-than"></i>
                <i class="fa-solid fa-greater-than"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="news">
          <h1 className="news-heading">Corporate News</h1>
          <div className="news-div--1">
            <div className="image-section">
              <img src="/image/coding.avif" alt="" />
            </div>
            <div className="news-section">
              <div className="news-section--heading">Bomb Killed 20 in Indonesia during the war against Vietnam</div>
              <div className="news-date">Nov 23, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
