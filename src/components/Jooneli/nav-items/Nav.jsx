import React from "react";
import Productlist from "./Productlist";
import Companylist from "./CompanyList";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className="nav-item">
            <Link to="/" className="item">
              Home
            </Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Products</Link>
            <Productlist />
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Company</Link>
            <Companylist />
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/">Lets talk</Link>
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
