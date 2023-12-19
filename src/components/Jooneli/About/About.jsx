import React from "react";
import AboutHeader from "./AboutHeader";
import Footer from "../Footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <AboutHeader />
      <div className="about-section">
        <div className="about-section--1">
          <div className="sub-section--1">
            <img src="/image/about2.jpeg" alt="" />
          </div>
          <div className="sub-section--2">
            <div className="sub-heading">About Us</div>
            <div className="main-heading">
              Inspiring <span className="color-1">Banking Systems</span> with{" "}
              <span className="color-2">IT solutions</span>
            </div>
            <p className="content-1">
              Jooneli Inc Pvt. Ltd. is an nepali software company that develops
              and provides the Jooneli Software suite. Our flagship product, 360
              Core Banking Software and Jooneli Trading is a comprehensive
              business management software used for accounting, inventory
              management, financial reporting, payroll processing, tax
              management, and more. Jooneli Inc caters to businesses across
              various company and has a significant presence. Jooneli Inc have a
              network of authorized partners who offer implementation, training,
              and support services. Jooneli Inc allows multi-user access to
              data, enabling collaboration.
            </p>
          </div>
          <div className="sub-section--3">
            <div className="icon">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div className="contents">
              <div className="heading">Our Mission</div>
              <p className="details">
                Our mission is to develop, produce, and sell software products
                that meet the needs of our customers, while creating our values.
                Ultimately, the mission of our company is to provide software
                products that are reliable, effective, and easy to use, while
                also creating value for customers, employees.
              </p>
            </div>
          </div>
          <div className="sub-section--4">
            <div className="icon">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <div className="contents">
              <div className="heading">Our Values</div>
              <p className="details">
                We strive to provide excellent customer service and support, and
                continuously improve our products based on customer feedback. We
                believe in constant innovation and improvement and operate with
                the highest levels of integrity and ethics. We believe that
                teamwork is essential to their success.
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
                  Jooneli always selects experienced professionals as its team
                  member who can bring positive changes to the company’s working
                  conditions. We assure you that our members possess technical,
                  conceptual, and human skills.
                </p>
              </div>
            </div>
            <div className="header-section--content">
              <div className="icon-header">
                <div className="icon">
                  <i class="fa-solid fa-code"></i>
                </div>
              </div>
              <div className="contents">
                <div className="heading">Top Code Quality</div>
                <p className="details">
                  Our high code quality is important to determine the overall
                  status of your project. Quality is the basis to measure how
                  safe, secure and reliable your codebase is. Maintenance of
                  high quality is not difficult for Jooneli to develop
                  safety-critical systems on your project.
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
