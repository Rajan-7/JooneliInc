import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
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
                <img src="/image/fesewa.png" alt="" />
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
            <div className="copyright">&copy;Jooneli Inc. Pvt.Ltd</div>
          </div>
          <div className="contact-section">
            <div className="contact-heading">Contact</div>
            <div className="contact-info">
              <li>
                <i class="fa-solid fa-location-dot"></i>Dhobhighat-4, Lalitpur
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>(977) -1-5153449
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <Link to="https://www.facebook.com/p/Jooneli-Inc-100063535842460/" >sales@jooneli.com</Link>
              </li>
            </div>
            <div className="media-section ">Follow Us</div>
            <div className="media">
              <div className="media-logo">
                <Link to="https://www.facebook.com/p/Jooneli-Inc-100063535842460/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
              <div className="media-logo">
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
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
