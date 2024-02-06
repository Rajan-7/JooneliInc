import React from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./manageteam.css";
import MtHeader from "./ManageTeamheader";

const ManageTeam = () => {
  return (
    <div>
      <MtHeader />
      <div className="management-section">
        <div className="management-team--heading">Our Management Teams</div>
        {/* <div className="management-team--content">
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
                    A designer melds creativity and functionality, crafting
                    visual elements to communicate messages effectively, enhance
                    user experiences, and solve complex problems.
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
                    Backend manages server side operations, databases, and logic
                    to supporty front-end functionlity and user interaction;
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
                    Testing ensures software quality by validating
                    functionality, identifying bugs, and ensuring compilance
                    with requirements & user expectation.
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
                    Quality assurance ensures products meet standard through
                    meticulous testing, adherence to specifications, and
                    continuous improvement process.
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
                    An Analyst interprets data, identify trends, and provides
                    insights to inform decision making and drive business
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="team-container">
          <div className="team-container--one">
            <div className="img">
              <img src="/image/team1.webp" alt="" />
            </div>
            <div className="team-name">Apar Thebe</div>
            <div className="designation">CEO</div>
            <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
          </div>
          <div className="team-container--two">
            <div className="team-two">
              <div className="img">
                <img src="/image/team1.webp" alt="" />
              </div>
              <div className="team-name">Sapana Maharjan</div>
              <div className="designation">Finance Head/Administration Head</div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
            <div className="team-two">
              <div className="img">
                <img src="/image/team1.webp" alt="" />
              </div>
              <div className="team-name">Samir shakya</div>
              <div className="designation">CTO</div>
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
          <div className="team-container--two">
            <div className="team-two">
              <div className="img">
                <img src="/image/team1.webp" alt="" />
              </div>
              <div className="team-name">Sajana Shrestha</div>
              <div className="designation">Sr. Business Development office</div>
              <div className="social-icon">
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
            </div>
            <div className="team-two">
              <div className="img">
                <img src="/image/team1.webp" alt="" />
              </div>
              <div className="team-name">Sulochana Kandel</div>
              <div className="designation">Business Development Office</div>
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
      <Footer />
    </div>
  );
};

export default ManageTeam;
