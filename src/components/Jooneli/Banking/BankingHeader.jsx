import React from "react";
import Nav from "../nav-items/Nav";
import { Link } from "react-router-dom";
import "./bankingheader.css";

const BankHeader = () => {
  return (
    <>
      <header className="header">
        <img className="about-img" src="/image/background.jpeg" alt="" />
        <div className="bank-content "> Efficiency Unleashed, Securely </div>
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

export default BankHeader;
