import React from "react";
import Home from "../home";
import Aboutlist from "./Aboutlist";
import Medialist from "./Medialist";
import Businesslist from "./Businesslist";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className="nav-item">
            <Link to="/" className="item">
              About
            </Link>
            <Aboutlist />
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Business</Link>
            <Businesslist />
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Media</Link>
            <Medialist />
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
    </>
  );
};

export default Nav;
