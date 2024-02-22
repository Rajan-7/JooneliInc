import React from "react";
import BankingHeader from "./BankingHeader";
import Footer from "../Footer/Footer";
import "./banking.css";

const Banking = () => {
  return (
    <>
      <BankingHeader />
      <div className="bank-section">
        <div className="bank-heading--section">
          <div className="bank-system--heading">
            <h2 className="main-heading">360 Core Banking System</h2>
            <h3>Always Leading, always Innovative ,Always Trust</h3>
          </div>
          <div className="bank-system--details res_3">
            360 is the most technically advanced banking system available today.
            It combines the most comprehensive and flexible business
            functionality with the most advanced and scalable architecture. This
            gives it unprecedented power to meet the challenges of today and the
            opportunities of tomorrow.
          </div>
        </div>
        <div className="bank-features--section">
          <div className="offerings main-heading">
            What We Offers <span className="color">?</span>
          </div>
          <div className="offerings-list">
            <div className="left-side--list">
              <li>
                <i class="fa-solid fa-mobile-screen"></i>
                <span> Mobile Banking</span>
              </li>
              <li>
                <i class="fa-solid fa-comment"></i>
                <span>Sms Banking</span>
              </li>
              <li>
                <i class="fa-solid fa-tablet-button"></i>
                <span>Tab Banking</span>
              </li>
              <li>
                <i class="fa-solid fa-table-cells-large"></i>
                <span>Collector App</span>
              </li>
              <li>
                <i class="fa-solid fa-calculator"></i>
                <span>Interest Banking</span>
              </li>
              <li>
                <i class="fa-solid fa-satellite-dish"></i>
                <span>
                  More than 130 Reports are available for daily operation and
                  corporate good governance.
                </span>
              </li>
            </div>
            <div className="right-side--list">
              <li>
                <i class="fa-solid fa-face-smile"></i>
                <span>100% tested system and 50+ satisfied customer</span>
              </li>
              <li>
                <i class="fa-solid fa-shield"></i>
                <span>7 Layer Network security</span>
              </li>
              <li>
                <i class="fa-brands fa-codepen"></i>
                <span>Easy compliable with any program & system</span>
              </li>
              <li>
                <i class="fa-solid fa-calendar-days"></i>
                <span>Nepali calender embedded</span>
              </li>
              <li>
                <i class="fa-solid fa-money-check"></i>
                <span>E Banking</span>
              </li>
              <li>
                <i class="fa-solid fa-file"></i>
                <span>PEARLS, NRB and Monthly Cooperative Report embedded</span>
              </li>
            </div>
          </div>
        </div>
        <div className="main-content--section">
          <div className="main-heading">
            Why 360 Core Banking System<span className="color">?</span>
          </div>
          <p className="details res_3">
            360 Core Banking System ensures that the task you carry out would be
            completed 70% faster with minimum amount of errors.
          </p>
          <div className="box-content">
            <div className="content-one">
              <img className="image-img" src="/image/security1.png" alt="" />
              <div className="heading-text">
                <h5>Security</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Security</div>
                <div className="image-description">
                  360 Core Banking System offering secure banking solution with
                  international standards at the lowest cost.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/costeff.jpeg" alt="" />
              <div className="heading-text">
                <h5>Cost Effective</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Cost Effective</div>
                <div className="image-description">
                  360 Core Banking System offering secure banking solution with
                  international standards at the lowest cost.
                </div>
              </div>
            </div>
            <div className="content-one ">
              <img className="image-img" src="/image/accounting.jpeg" alt="" />
              <div className="heading-text">
                <h5>Proper Accounting Principles</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Proper Accounting Principles</div>
                <div className="image-description">
                  360 Core Banking System is also based on the proper accounting
                  principles which means there are less possible chances of
                  accounting errors.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/intcal.jpeg" alt="" />
              <div className="heading-text">
                <h5>Daily Interest Calculation</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Daily Interest Calculation</div>
                <div className="image-description">
                  360 Core Banking System calculates the interest of loans and
                  deposits in a daily basis and also provides detail information
                  about how it is calculated.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/366.webp" alt="" />
              <div className="heading-text">
                <h5>366 Accounting Days</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">366 Accounting Days</div>
                <div className="image-description">
                  360 Core Banking System is made considering the Leap year
                  which most of the current system lacks. Thus, facilitating you
                  to carry out the task even in the 366th day.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/ui.webp" alt="" />
              <div className="heading-text">
                <h5>Easy User Interface</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Easy User Interface</div>
                <div className="image-description">
                  360 Core Banking System is made considering the Leap year
                  which most of the current system lacks. Thus, facilitation you
                  to carry out the task even in the 366th day.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/ai.webp" alt="" />
              <div className="heading-text">
                <h5>AI(Artificial Intelligence)</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">AI(Artificial Intelligence)</div>
                <div className="image-description">
                  360 Core Banking System uses useful AI for transaction
                  processing.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/tchs.jpeg" alt="" />
              <div className="heading-text">
                <h5>Training and Constant Help & Support</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">
                  Training and Constant Help & Support
                </div>
                <div className="image-description">
                  360 team will provide a general training as well as advance
                  training to you at your place and also our team is always
                  ready to help you and support you whenever you need.
                </div>
              </div>
            </div>
            <div className="content-one">
              <img className="image-img" src="/image/over130.avif" alt="" />
              <div className="heading-text">
                <h5>Over 130+ report</h5>
              </div>
              <div className="image-overlay image-primary">
                <div className="image-title">Over 130+ report</div>
                <div className="image-description">
                  360 provides more than 130 reports in detail for you to let
                  you know your financial position and to ensure better
                  governance.
                </div>
              </div>
            </div>
          </div>
          <div className="reports">
            <div className="report-title">
              360 provides more than 130 reports in detail for you to let you
              know your financial position and to ensure better governance. The
              lists of reports are tabulated below:
            </div>
            <div className="report-list">
              <li>
                <i class="fa-solid fa-file-excel"></i>
                <span>Standard Report</span>
              </li>
              <li>
                <i class="fa-solid fa-file-word"></i>
                <span>System Report</span>
              </li>
              <li>
                <i class="fa-solid fa-file-invoice"></i>
                <span>Advanced Report</span>
              </li>
              <li>
                <i class="fa-solid fa-folder-tree"></i>
                <span>Analytical Report</span>
              </li>
            </div>
          </div>
        </div>
        <div className="bank-lower--content">
          <div className="bank-lower--title">
            How do we work <span>?</span>
          </div>
          <div className="bank-lower--details">
            Overall, the complete system architecture is separated into two core
            parts that helps you to Simplify the task you carry with effective
            governance.
          </div>
          <div className="lower-box--container">
            <div className="logo">
              <img src="/image/joonwork.png" alt="" />
            </div>
            <div className="box-details">
              <div className="details-one">
                <div className="icon">
                  <img src="/image/admin.png" alt="" />
                </div>
                <div className="heading">Administrator</div>
                <div className="sub-heading">
                  This section is the admin section.Here you can manage you
                  charts of accounts,delegation of staffs, interest rates,
                  analyzing tools as well as many other things.
                </div>
              </div>
              <div className="details-one">
                <div className="icon">
                  <img src="/image/users.png" alt="" />
                </div>
                <div className="heading">Users</div>
                <div className="sub-heading">
                  It records the transactions, creates accounts, and disburses
                  loans. 360 team has divided it into modules which help to
                  carry out the tasks as per the responsibilities and duties of
                  each department.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Banking;
