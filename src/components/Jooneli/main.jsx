import React from "react";
import Header from "./Header";
import "./style.css";

const Main = () => {
  return (
    <>
      <Header />
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
            <div className="heading">Enablling financial access</div>
          </div>
          <div className="flex-1">
            <div className="heading">Digitizing industry</div>
          </div>
          <div className="flex-1">
            <div className="heading">Adding Value</div>
          </div>
        </div>
        <div className="right-grid">
          <div className="box1">
            <img src="/image/mobile1.jpeg" alt="" />
            <div className="heading">Hello</div>
          </div>
          <div className="box1">
            <img src="/image/water.webp" alt="" />
          </div>
          <div className="box1">
            <img src="/image/water.webp" alt="" />
          </div>
          <div className="box1">
            <img src="/image/fonepay.png" alt="" />
            <div className="heading">Hello</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
