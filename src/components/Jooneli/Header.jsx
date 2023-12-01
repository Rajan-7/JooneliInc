import React from "react";
import Nav from "./nav-items/Nav";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* <video
          src="/video/video.mp4"
          autoPlay
          muted
          className="animator"
        ></video> */}
        <img src="/image/background.jpeg" alt="" />
        <div className="center-content"></div>
        <div className="container">
          <div className="logo-container">
            <figure>
              <img src="/image/jooneli.png" alt="" />
            </figure>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
