import React from "react";
import ManageTeamHeader from './ManageTeamheader';
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./manageteam.css";

const ManageTeam = () => {
  return (
    <div>
      <ManageTeamHeader />
      <div className="management-section">
        <div className="management-team--heading">Our Management Teams</div>
        <div className="management-team--content">
          <div className="developer-section">
            <div className="developer-heading">Developer Teams</div>
            <div className="developer-container">
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team2.jpeg" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Jhon</div>
                  <div className="info-sub--heading">Frontend,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team1.webp" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Rose</div>
                  <div className="info-sub--heading">Designer,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team3.jpeg" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Dave</div>
                  <div className="info-sub--heading">Backend,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-section">
            <div className="developer-heading">QA Teams</div>
            <div className="developer-container">
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team4.webp" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Shyam</div>
                  <div className="info-sub--heading">Testing,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team5.jpeg" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Hary</div>
                  <div className="info-sub--heading">QA,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
              <div className="developer-info">
                <div className="logo-info">
                  <div className="logo">
                    <img src="/image/team6.jpeg" alt="" />
                  </div>
                  <div className="social-icon">
                    <Link>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </div>
                  <div className="rgb-design">
                    <div className="red size"></div>
                    <div className="green size"></div>
                    <div className="blue size"></div>
                  </div>
                </div>
                <div className="info-section">
                  <div className="info-heading">Roman</div>
                  <div className="info-sub--heading">Analyst,Jooneli</div>
                  <p>
                    Frontend involves creating the user interface and user
                    experience of a website or web application, focusing on the
                    visual and interactive elements that users interact with
                    directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageTeam;
