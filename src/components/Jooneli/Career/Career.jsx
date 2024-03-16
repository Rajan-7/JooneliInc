import React, { useState } from "react";
import CareerHeader from "./CareerHeader";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./career.css";

const Career = () => {
  const jobs = [
    {
      title: "Software Developer",
      description:
        "Develop, and maintain software solutions, ensuring and jalkjflkajkljfakljfklajsklfj",
      location: "Nepal",
      type: "development",
    },
    {
      title: "Software Developer",
      description:
        "Develop, and maintain software solutions, ensuring and jalkjflkajkljfakljfklajsklfj",
      location: "Nepal",
      type: "development",
    },
    {
      title: "Soley",
      description:
        "Develop, and maintain software solutions, ensuring and jalkjflkajkljfakljfklajsklfj",
      location: "Aus",
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
    if(type === "all"){
      setWork(jobs);
      setType(type);
    }
    const updatedWork = jobs.filter((value) => value.type === type);
    setWork(updatedWork);
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
              <select className="mr_5 fw" value={type} onChange={handleTypeChange}>
                <option value="all">All Department</option>
                <option value="development">Software Development</option>
                <option value="sales">Sales</option>
                <option value="design">Designing</option>
              </select>
            </div>
            <div className="s-body">
              <select className="mr_5 fw" value={location} onChange={handleLocationChange}>
                <option value="Nepal">Nepal</option>
                <option value="Aus">Australia</option>
              </select>
            </div>
          </div>
        </div>
        <div className="job-container">
          <div className="job-box--container">
            <div className="jb-wrapper bb-color">
             {
                 work.map((item,index)=>(
                  <div className="job-box" key={index}>
                <NavLink to={"/software"} className="f_17 fw">
                 {item.title}
                </NavLink>
                <p className="f_19 fw">
                  {item.description}
                </p>
              </div>
                 ))
             }  
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
