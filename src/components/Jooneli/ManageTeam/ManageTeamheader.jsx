import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mtheader.css";
// import Home from "./home";

const MtHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header-section">
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/">
              <img src="/image/joonlogo.png" alt="Brand Logo" />
            </Link>
          </div>
          <div
            className={` ${show ? "hover-effect--background" : "none"}`}
          ></div>
          <div className="nav-bars">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <div
              className="hover-effectors"
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div
                className="display-product"
                // onMouseOver={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
              >
                Product
                <div className="drop-down--product">
                  <Link to="/bank">360 Core Banking System</Link>
                  <Link to="/trading">Jooneli Trading</Link>
                </div>
              </div>
              <div
                className="display-company"
                // onMouseOver={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
              >
                Company
                <div className="drop-down--company">
                  <Link to="/about">About Us</Link>
                  <Link to="/client">Our Clients</Link>
                  <Link to="/bod">Boards Of Directors</Link>
                  <Link to="/manageteam">Management Team</Link>
                  <Link to="/career">Careers</Link>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/talk" className="a-3">Lets Talk</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-content--mt">
          <img src="/image/background.jpeg" alt="Background Content" />
          Lead. Inspire. Achieve
        </div>
      </header>
    </>
  );
};

export default MtHeader;
