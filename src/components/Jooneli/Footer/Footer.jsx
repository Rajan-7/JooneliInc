import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="compaines-section">
            <div className="compaines-heading mb">Jooneli Group</div>
            <div className="companies-logos">
              <div className="logo">
                <Link>
                  <img src="/image/f1soft.png" alt="" className="f1" />
                </Link>
              </div>
              <div className="logo">
                <img src="/image/esewa1.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/fpay.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/floan.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/fnext.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/chealth.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/fpoints.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/diyalo.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/darshantech.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/etransfer.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/edata.png" alt="" />
              </div>
              <div className="logo">
                <img src="/image/logiga.png" alt="" className="f2" />
              </div>
              <div className="logo">
                <img src="/image/swastik.png" alt="" />
              </div>
            </div>
            <div className="copyright">&copy;Jooneli International Pvt.Ltd</div>
          </div>
          <div className="contact-section">
            <div className="contact-heading">Contact Us</div>
            <div className="contact-info">
              <li>Jooneli International Pvt.Ltd</li>
              <li>Jooneli Group Tower, Lalitpur</li>
              <li>Lalitpur,Nepal</li>
              <li className="li-1">
                <div className="li--1">Mail to : </div>
                <Link>jooneli.suppteam@gmail.com</Link>
              </li>
            </div>
            <div className="media-section ">Follow Us</div>
            <div className="media">
              <div className="media-logo">
                <Link>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
              <div className="media-logo">
                <Link>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
              <div className="media-logo">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
