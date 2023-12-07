import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-section">
        <div className="about-section--1">
          <div className="sub-section--1">
            <img src="/image/coding.jpeg" alt="" />
          </div>
          <div className="sub-section--2">
            <div className="sub-heading">About Us</div>
            <div className="main-heading">
              Inspiring <span className="color-1">Banking Systems</span> with{" "}
              <span className="color-2">IT solutions</span>
            </div>
            <p className="content-1">
              Software applications, often referred to simply as apps, are
              integral to the functioning of computers and devices, serving
              diverse purposes for end-users. These applications can be broadly
              categorized into desktop, web, and mobile applications, each
              tailored to specific platforms.
            </p>
            <p className="content-2">
              The landscape of software applications is dynamic, with developers
              utilizing agile methodologies and iterative practices to respond
              swiftly to user feedback and market demands. Collaboration among
              cross-functional teams, including developers, designers, quality
              assurance specialists, and project managers, is essential for the
              successful creation and maintenance of these applications.
            </p>
          </div>
          <div className="sub-section--3">
            <div className="icon">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div className="contents">
              <div className="heading">Our Mission</div>
              <p className="details">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner so that there is a long-term relationship between
                clients, employees, and other stakeholders.
              </p>
            </div>
          </div>
          <div className="sub-section--4">
            <div className="icon">
              <i class="fa-solid fa-eye-low-vision"></i>
            </div>
            <div className="contents">
              <div className="heading">Our Vision</div>
              <p className="details">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner so that there is a long-term relationship between
                clients, employees, and other stakeholders.
              </p>
            </div>
          </div>
        </div>
        <div className="about-section--2">
          <div className="header-title">
            <div className="sub-header">Globally Renowned & trusted</div>
            <div className="main-header">
              Why <span className="color-3">Choose Us</span>
            </div>
            <p className="header-content">
              Our IT services consist of business and technology experts who
              help to manage business processes of all categories.
            </p>
          </div>
          <div className="header-section">
            <div className="header-section--content">
              <div className="icon-header">
                <div className="icon">
                  <i class="fa-regular fa-clock"></i>
                </div>
              </div>
              <div className="contents">
                <div className="heading">Regular Support</div>
                <p className="details">
                  We assure you that our team is here to promote your regular
                  and continuous development even in a difficult situation. It
                  includes continuous feedback, quality maintenance, and
                  constant motivation to generate qualitative output.
                </p>
              </div>
            </div>
            <div className="header-section--content">
              <div className="icon-header">
                <div className="icon">
                  <i class="fa-solid fa-people-group"></i>
                </div>
              </div>
              <div className="contents">
                <div className="heading">Experienced Team</div>
                <p className="details">
                  We assure you that our team is here to promote your regular
                  and continuous development even in a difficult situation. It
                  includes continuous feedback, quality maintenance, and
                  constant motivation to generate qualitative output.
                </p>
              </div>
            </div>
            <div className="header-section--content">
              <div className="icon-header">
                <div className="icon">
                  <i class="fa-regular fa-clock"></i>
                </div>
              </div>
              <div className="contents">
                <div className="heading">Top Code Quality</div>
                <p className="details">
                  We assure you that our team is here to promote your regular
                  and continuous development even in a difficult situation. It
                  includes continuous feedback, quality maintenance, and
                  constant motivation to generate qualitative output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
