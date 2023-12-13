import React from "react";
import Nav from "../nav-items/Nav";
import { Link } from "react-router-dom";
import "./Aboutheader.css";

const AboutHeader = () => {
  return (
    <>
      <header className="header">
        <img className="about-img" src="/image/background.jpeg" alt="" />
        <div className="about-content "> Story Behind Us </div>
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

export default AboutHeader;
