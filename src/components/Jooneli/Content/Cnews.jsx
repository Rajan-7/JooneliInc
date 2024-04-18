import React from "react";
import CHeader from "./C-Header";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./content.css";
import { useAuth } from "../store/auth";

const Cnews = () => {
  const { cnews } = useAuth();
  return (
    <>
      <CHeader />
      <section className="cnews-section">
        <div className="c_heading container">
          <h1>News</h1>
        </div>
        <div className="c_contents container grid grid-three-cols">
          {cnews.map((cur, ind) => {
            return (
              <NavLink className="c_nav">
                <div className="c_portal" key={ind}>
                  <div className="image">
                    <img
                      src={`http://localhost:5005/image/${cur.image}`}
                      alt="Corporate News"
                      height="250"
                      width="100%"
                    />
                  </div>
                  <h2>{cur.heading}</h2>
                  <p>{cur.description}</p>
                  <div className="date">{cur.date}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cnews;
