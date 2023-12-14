import React from "react";
import Nav from "../nav-items/Nav";
import { Link } from "react-router-dom";

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
        <div className="hover-effect--background "></div>
        <div className="center-content "></div>
        <div className="container">
          <div className="logo-container">
            <figure>
              <Link to="/">
                <img src="/image/jooneli.png" alt="" />
              </Link>
            </figure>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
