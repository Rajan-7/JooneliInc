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
          <h4 className="sub-heading">Open positions</h4>
          <h2 className="main-heading">Careers at Jooneli</h2>
          <p>
            Join us and help empower the world to develop technology through
            collective knowledge.
          </p>
        </div>
        <div className="selection-wrapper mb_3">
          <div className="selection">
            <div className="s-body">
              <select className="mr_5">
                <option value="">All Department</option>
                <option value="">Software Development</option>
                <option value="">Sales</option>
                <option value="">Designing</option>
              </select>
            </div>
            <div className="s-body">
              <select className="mr_5">
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
                <NavLink to={"/software"}>Software Development</NavLink>
                <p className="f_19">
                  Help build the software to make everyday easy.
                </p>
              </div>
              <div className="job-box m-lb">
                <NavLink to={"/software"}>Senior Software Developer</NavLink>
                <p className="f_19">
                  Help build the software to make everyday easy.
                </p>
              </div>
            </div>
          </div>
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
              <div className="job-box">
                <NavLink to={"/software"}>Software Development</NavLink>
                <p className="f_19">
                  Help build the software to make everyday easy.
                </p>
              </div>
              <div className="job-box">
                <NavLink to={"/software"}>Software Development</NavLink>
                <p className="f_19">
                  Help build the software to make everyday easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
