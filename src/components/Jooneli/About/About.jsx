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
              Jooneli inspire banking systems by introducing transformative
              technologies such as digital channels, artificial intelligence,
              and blockchain, enhancing efficiency, security, and customer
              experience. Through innovations like data analytics and fintech
              collaborations, they empower banks to adapt, evolve, and stay
              competitive in a rapidly changing financial landscape.
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
              <i class="fa-regular fa-eye"></i>
            </div>
            <div className="contents">
              <div className="heading">Our Vision</div>
              <p className="details">
                Our effort is endless to make Softbenz Infosys a systematic and
                qualitative company in the IT sector. Every business requires
                digital identification in today’s era. Digital marketing is not
                a luxury but a necessity for your brand identification. Website
                is the most reliable tool for digital marketing which is even
                suggested by legal authorities in the case of Nepal.
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
