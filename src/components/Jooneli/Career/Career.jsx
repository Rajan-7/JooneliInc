import React from "react";
import CareerHeader from "./CareerHeader";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./career.css";

const Career = () => {
  return (
    <>
      <CareerHeader />
      <section className="career-section">
        <div className="career-heading">
          <h4 className="sub-heading fw">Open positions</h4>
          <h2 className="main-heading ">Careers at Jooneli</h2>
          <p className="fw">
            Join us and help empower the world to develop technology through
            collective knowledge.
          </p>
        </div>
        <div className="selection-wrapper mb_3">
          <div className="selection">
            <div className="s-body">
              <select className="mr_5 fw">
                <option value="one">All Department</option>
                <option value="">Software Development</option>
                <option value="">Sales</option>
                <option value="">Designing</option>
              </select>
            </div>
            <div className="s-body">
              <select className="mr_5 fw">
                <option value="">Nepal</option>
                <option value="">Australia</option>
              </select>
            </div>
          </div>
        </div>
        <div className="job-container">
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
              <div className="job-box">
                <NavLink to={"/software"} className="f_17 fw">
                  Software Development
                </NavLink>
                <p className="f_19 fw">
                  Develop, and maintain software solutions, ensuring
                  functionality, efficiency, and scalability while meeting
                  client requirements
                </p>
              </div>
              <div className="job-box m-lb">
                <NavLink to={"/software"} className="f_21 fw">
                  Senior Software Developer
                </NavLink>
                <p className="f_17 fw">
                  <i class="fa-solid fa-location-dot"></i> Nepal - Onsite
                </p>
              </div>
            </div>
          </div>
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
              <div className="job-box">
                <NavLink to={"/software"} className="f_17 fw">
                  Sales
                </NavLink>
                <p className="f_19 fw">
                  Drive sales growth through effective communication,
                  relationship-building, and strategic planning.
                </p>
              </div>
              <div className="job-box">
                <NavLink to={"/software"} className="f_21 fw">
                  Sales Manager
                </NavLink>
                <p className="f_17 fw">
                  <i class="fa-solid fa-location-dot"></i> Nepal - Onsite
                </p>
              </div>
            </div>
          </div>
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
              <div className="job-box">
                <NavLink to={"/software"} className="f_17 fw">
                  Designer
                </NavLink>
                <p className="f_19 fw">
                  Create intuitive and visually appealing user experiences
                  through design innovation and attention to detail.
                </p>
              </div>
              <div className="job-box">
                <NavLink to={"/software"} className="f_21 fw">
                  UI/UX
                </NavLink>
                <p className="f_17 fw">
                  <i class="fa-solid fa-location-dot"></i> Australia - Remote
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content_box">
          <div className="icon">
            <i class="fa-regular fa-hand"></i>
          </div>
          <p className="fw f_15">
            Jooneli does not discriminate in employment matters on the basis of
            race, color, religion, gender, national origin, age, military
            service eligibility, veteran status, sexual orientation, marital
            status, disability, or any other protected class. We support
            workplace diversity.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
