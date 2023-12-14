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
                "The journey of fallen people is a testament to resilience,
                marked by the strength to rise from adversity, learn from
                setbacks, and rebuild a new narrative of redemption."
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
                "Life is a transformative journey where each step, whether in
                joy or hardship, contributes to the ever-evolving tapestry of
                our existence."
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
                "A company's journey is a continuous pursuit of growth and
                adaptation, navigating through challenges and milestones to
                carve its unique path toward success."
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
