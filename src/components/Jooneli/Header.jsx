import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
        <img src="/image/background.jpeg" alt="back image" />
        <div className="center-content"></div>
        <div className="container">
          <div className="logo-container">
            <figure>
              <img src="/image/jooneli.png" alt="jooneli logo" />
            </figure>
          </div>
          <nav className="nav-bar">
            <ul>
              <li className="nav-item">
                <Link to="/" className="item">
                  About
                </Link>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/">Business</Link>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/">Media</Link>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/">Career</Link>
              </li>
            </ul>
            <ul>
              <li className="nav-item">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </header>
    </>
  );
};

export default Header;
