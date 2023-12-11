import React from "react";
import CareerHeader from "./CareerHeader";
import Footer from "../Footer/Footer";
import "./career.css";

const Career = () => {
  return (
    <>
      <CareerHeader />
      <div className="career-section">
        <div className="career-heading--section">
          <div className="main-heading">Relish Work and Thrive Together</div>
          <p className="main-details">
            A healthy mind is the source of all innovations. Providing the best
            possible benefits and any support required, we want to ensure that
            our team doesn’t have to worry about life outside of work.
          </p>
        </div>
        <div className="career-main--section">
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div className="content-details">
              <div className="content-heading">
                Training,Learning & Development
              </div>
              <div className="content-details">
                We are obsessed with constantly developing our competencies.
                Hence, we determine the training needs for our people from the
                performance review that we conduct bi- yearly.
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-people-roof"></i>
            </div>
            <div className="content-details">
              <div className="content-heading">
                Generous parental & personal leaves
              </div>
              <div className="content-details">
                We provide parental and personal leaves while still being paid
                your usual salary. We provide 12 business days off as annual
                paid holidays.
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div className="content-details">
              <div className="content-heading">
                Social security & financial bonuses
              </div>
              <div className="content-details">
                SSF is a contribution-based social security scheme, the employee
                contributes 10 % and the employer adds 20% of the basic salary
                per month( 30% of the basic salary of the employee) every month.
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-people-group"></i>
            </div>
            <div className="content-details">
              <div className="content-heading">Employee social gathering</div>
              <div className="content-details">
                Work relationships are incredibly important to employee
                well-being. As humans, we crave contact and connection with
                other people. It’s important for employers to understand just
                how important social connections in the workplace really are.
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-bowl-food"></i>
              {/* <i class="fa-solid fa-utensils"></i> */}
            </div>
            <div className="content-details">
              <div className="content-heading">
                Healthy Food & Refreshment Program
              </div>
              <div className="content-details">
                When a workplace can help employees to make wise food choices,
                as part of a workplace health program, it can influence the
                person’s long-term health and wellness.
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="logo">
              <i class="fa-solid fa-house-laptop"></i>
            </div>
            <div className="content-details">
              <div className="content-heading">Distributed Remote Work</div>
              <div className="content-details">
                Remote work is a discipline for the individual worker, but
                distributed work is a discipline for the entire organization. We
                all employees work in separate locations and communicate via
                online platforms.
              </div>
            </div>
          </div>
        </div>
        <div className="career-job--section">
          <div className="heading">Current Job Openings</div>
          <div className="job-container">
            <div className="job-container--one">
              <div className="job-heading">Mobile Developer</div>
              <div className="job-details">
                We are looking for an experienced Mobile developer who is well
                adopted to best practices around software engineering.Who
                understand the business values of the work they put in & adopt
                the new environment.
              </div>
            </div>
            <div className="job-container--one">
              <div className="job-heading">Software Designer</div>
              <div className="job-details">
                We are looking for an experienced designer who is well adopted
                to best practices around software engineering. Who creates and
                design the user interface & experience of software application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
