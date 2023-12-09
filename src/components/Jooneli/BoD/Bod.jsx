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
        <div className="bod-heading--section">Our <span className="color">Board Of dir</span>ectors</div>
        <div className="bod-content--section">
          <div className="content-section">
            <div className="logo-info">
              <div className="logo">
                <img src="/image/photo.jpeg" alt="" />
              </div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
            <div className="dir-info">
              <div className="main-heading">Muktinath</div>
              <div className="sub-heading">Managing Director,Jooneli</div>
              <p>
                A simple sentence, according to the Cambridge Dictionary, is “a
                sentence that has only one verb.” The Collins Dictionary defines
                a simple sentence as “a sentence consisting of a single main
                clause.”
              </p>
            </div>
          </div>
          <div className="content-section">
            <div className="logo-info">
              <div className="logo">
                <img src="/image/elon.jpeg" alt="" />
              </div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
            <div className="dir-info">
              <div className="main-heading">Elon Musk</div>
              <div className="sub-heading">Director,Jooneli</div>
              <p>
                A simple sentence, according to the Cambridge Dictionary, is “a
                sentence that has only one verb.” The Collins Dictionary defines
                a simple sentence as “a sentence consisting of a single main
                clause.”
              </p>
            </div>
          </div>
          <div className="content-section">
            <div className="logo-info">
              <div className="logo">
                <img src="/image/billgate.webp" alt="" />
              </div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
            <div className="dir-info">
              <div className="main-heading">Bill Gate</div>
              <div className="sub-heading">Senior Manager,Jooneli</div>
              <p>
                A simple sentence, according to the Cambridge Dictionary, is “a
                sentence that has only one verb.” The Collins Dictionary defines
                a simple sentence as “a sentence consisting of a single main
                clause.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bod;
