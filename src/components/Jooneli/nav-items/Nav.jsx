import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className="nav-item" >
            <Link to="/" className="item">
              Home
            </Link>
          </li>
        </ul>
        <ul className="navigate-link">
          <div className="nav-item display-list">
            <button className="display-btn">Product</button>
            <div className="drop-down--product">
              <Link to="/bank" className="drop">
                360 Core Banking System
              </Link>
              <Link to="/trading" className="drop">
                Jooneli Trading
              </Link>
            </div>
          </div>
        </ul>
        <ul className="navigate-link">
          <div className="nav-item display-list">
            <button className="display-btn">Company</button>
            <div className="drop-down--business">
              <Link to="/about" className="drop">
                About Us
              </Link>
              <Link to="/client" className="drop">
                Our Clients
              </Link>
              <Link to="/bod" className="drop">
                Boards of Directors
              </Link>
              <Link to="/manageteam" className="drop">
                Management Team
              </Link>
              <Link to="/career" className="drop">
                Careers
              </Link>
            </div>
          </div>
        </ul>
        <ul>
          <li className="nav-item" >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Lets Talk</Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
