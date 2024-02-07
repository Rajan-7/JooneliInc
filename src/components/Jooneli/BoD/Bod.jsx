import React from "react";
import BodHeader from "./BodHeader";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./bod.css";

const Bod = () => {
  return (
    <>
      <BodHeader />
      <div className="bod-section">
        <div className="bod-heading--section">Our Board Of directors</div>
        <div className="bod-content--section">
          <div className="content-section">
            <div className="logo-info">
              <div className="logo">
                <img src="/image/photo.jpeg" alt="" />
              </div>
            </div>
            <div className="dir-info">
              <div className="main-heading">Apar Thebe</div>
              <div className="sub-heading">Chairman</div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
          </div>
          <div className="sub-content--section">
            <div className="sub-content--one">
              <div className="logo-info">
                <div className="logo">
                  <img src="/image/bod2.png" alt="" />
                </div>
              </div>
              <div className="dir-info">
                <div className="main-heading">Sapana Maharjan</div>
                <div className="sub-heading">Member</div>
                <div className="social-icon">
                  <Link>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faGoogle} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sub-content--one">
              <div className="logo-info">
                <div className="logo">
                  <img src="/image/photo.jpeg" alt="" />
                </div>
              </div>
              <div className="dir-info">
                <div className="main-heading">Laxmi Subedi</div>
                <div className="sub-heading">Member</div>
                <div className="social-icon">
                  <Link>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link>
                    <FontAwesomeIcon icon={faGoogle} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bod;
