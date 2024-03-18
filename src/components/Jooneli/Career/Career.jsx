import React, { useState } from "react";
import CareerHeader from "./CareerHeader";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./career.css";

const Career = () => {
  const jobs = [
    {
      title: "Software Developer",
      position: "Senior software developer",
      description:
        "Design, develop, and maintain software solutions, ensuring functionality, efficiency, and scalability while meeting client requirements.",
      location: "Nepal",
      type: "development",
    },
    {
      title: "Designer",
      position: "UI/UX Developer",
      description:
        "Drive sales growth through effective communication, relationship-building, and strategic planning.",
      location: "Australia",
      type: "design",
    },
    {
      title: "Sales",
      position: "Sales Manager",
      description:
        "Create intuitive and visually appealing user experiences through design innovation and attention to detail.",
      location: "Nepal",
      type: "sales",
    },
  ];
  const [location, setLocation] = useState("Nepal");
  const [type, setType] = useState("all");
  const [work, setWork] = useState(jobs);
  const handleLocationChange = (e) => {
    const location = e.target.value;
    const updatedWork = jobs.filter((value) => value.location === location);
    setWork(updatedWork);
    setLocation(e.target.value);
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setType(type);
    if (type === "all") {
      setWork(jobs);
    } else {
      const updatedWork = jobs.filter((value) => value.type === type);
      setWork(updatedWork);
    }

    setType(e.target.value);
  };

  console.log(type);

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
              <select
                className="mr_5 fw"
                value={type}
                onChange={handleTypeChange}
              >
                <option value="all">All Department</option>
                <option value="development">Software Development</option>
                <option value="sales">Sales</option>
                <option value="design">Designing</option>
              </select>
            </div>
            <div className="s-body">
              <select
                className="mr_5 fw"
                value={location}
                onChange={handleLocationChange}
              >
                <option value="Nepal">Nepal</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        </div>
        <div className="job-container">
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
              {work.map((item, index) => (
                <>
                  <div className="job-box" key={index}>
                    <NavLink to={"/software"} className="f_17 fw">
                      {item.title}
                    </NavLink>
                    <p className="f_19 fw">{item.description}</p>
                  </div>
                  <div className="jobs-details">
                    <NavLink to={"/software"} className="f_21 fw">
                      {item.position}
                    </NavLink>
                    <p className="f_17 fw">
                      <i className="fa-solid fa-location-dot"></i>
                      {item.location},On site
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="content_box">
          <div className="icon">
            <i className="fa-regular fa-hand"></i>
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
