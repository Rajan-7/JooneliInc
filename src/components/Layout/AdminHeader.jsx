import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Jooneli/store/auth";
import "./admin.css";

const AdminHeader = () => {
  const { isLoggedIn } = useAuth();
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="admin-section ">
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/">
              <img src="/image/joonlogo.png" alt="Brand Logo" />
            </Link>
          </div>
          <div
            className={` ${show ? "admin-effect--background" : "none"}`}
          ></div>
          <div className="nav-bars">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <div
              className="hover-effectors "
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div className="display-product display-product-hover">
                Product
                <div className="drop-down--product">
                  <Link to="/bank">360 Core Banking System</Link>
                  <Link to="/trading">Jooneli Trading</Link>
                </div>
              </div>
              <div className="display-company">
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
                <Link to="/talk" className="a-3">
                  LetsTalk
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <ul>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
