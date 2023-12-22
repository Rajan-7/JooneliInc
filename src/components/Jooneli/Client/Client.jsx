import React from "react";
import ClientHeader from "./ClientHeader";
import Footer from "../Footer/Footer";
import "./client.css";

const Client = () => {
  return (
    <>
      <ClientHeader />
      <div className="client-section">
        <div className="client-list--section">
          <div className="client-list--heading">Our Clients</div>
          <div className="client-container">
            <div className="client">
              <div className="logo">
                <img src="/image/fpay.png" alt="" />
              </div>
              <div className="client-details">
                <div className="client-name">FonePay</div>
                <div className="client-description">
                  Fonepay enables users to effortlessly make transactions, pay
                  bills, and transfer funds using their smartphones. With a
                  user-friendly interface and secure features, Fonepay
                  revolutionizes digital payments, providing a seamless and
                  convenient financial experience.
                </div>
              </div>
            </div>
            <div className="client">
              <div className="logo">
                <img src="/image/fnext.png" alt="" />
              </div>
              <div className="client-details">
                <div className="client-name">FoneNext</div>
                <div className="client-description">
                  Fonenext enables users to effortlessly make transactions, pay
                  bills, and transfer funds using their smartphones. With a
                  user-friendly interface and secure features, Fonepay
                  revolutionizes digital payments, providing a seamless and
                  convenient financial experience.
                </div>
              </div>
            </div>
            <div className="client">
              <div className="logo">
                <img src="/image/floan.png" alt="" />
              </div>
              <div className="client-details">
                <div className="client-name">FoneLoan</div>
                <div className="client-description">
                  Foneloan enables users to effortlessly make transactions, pay
                  bills, and transfer funds using their smartphones. With a
                  user-friendly interface and secure features, Fonepay
                  revolutionizes digital payments, providing a seamless and
                  convenient financial experience.
                </div>
              </div>
            </div>
            <div className="client">
              <div className="logo">
                <img src="/image/fesewa.png" alt="" />
              </div>
              <div className="client-details">
                <div className="client-name">eSewa</div>
                <div className="client-description">
                  Esewa enables users to effortlessly make transactions, pay
                  bills, and transfer funds using their smartphones. With a
                  user-friendly interface and secure features, Fonepay
                  revolutionizes digital payments, providing a seamless and
                  convenient financial experience.
                </div>
              </div>
            </div>
            <div className="client">
              <div className="logo">
                <img src="/image/diyalo.png" alt="" />
              </div>
              <div className="client-details">
                <div className="client-name">Diyalo</div>
                <div className="client-description">
                  Diyalo enables users to effortlessly make transactions, pay
                  bills, and transfer funds using their smartphones. With a
                  user-friendly interface and secure features, Fonepay
                  revolutionizes digital payments, providing a seamless and
                  convenient financial experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-response--section">
          <div className="client-response--heading">
            <div className="main-heading">
              <div className="heading-details">
                <div className="sub-heading">Testomonials</div>
                <div className="heading">
                  What Our <span className="clr">Trustworthy</span> Clients Say
                </div>
              </div>
              <div className="heading-effect"></div>
            </div>
            <div className="main-details">
              Jooneli, being a B2B (Business To Business) company hopes for a
              better client relationship by ensuring long-term benefits and
              quality service. Client satisfaction is not just our business
              obligation but a responsibility.
            </div>
          </div>
          <div className="client-response--details">
            <div className="response-details--box">
              <div className="comment">
                <span className="comment-quote">&#x201c;</span> Jooneli is one
                of the best IT company of Nepal promoting effective & relevant
                digital services to their clients. They provide follow up
                services even after the completion of projects. They also values
                your time & mainly focus on providing the required solutions for
                the issues.
                <span className="comment-quote">&#x201d;</span>
              </div>
              <div className="responser">
                <div className="logo">
                  <img src="/image/team5.jpeg" alt="" />
                </div>
                <div className="logo-details">
                  <div className="name">Henry Howard</div>
                  <div className="designation">CEO,Fooder Company</div>
                </div>
              </div>
            </div>
            <div className="response-details--box">
              <div className="comment">
              <span className="comment-quote">&#x201c;</span> They exceeded my expectations with their exceptional
                expertise, delivering innovative solutions that streamlined our
                operations and significantly enhanced our technological
                capabilities. Their dedicated team's professionalism and
                commitment to customer satisfaction truly set them apart in the
                industry.<span className="comment-quote">&#x201d;</span>
              </div>
              <div className="responser">
                <div className="logo">
                  <img src="/image/team4.webp" alt="" />
                </div>
                <div className="logo-details">
                  <div className="name">Richard Stark</div>
                  <div className="designation">CEO,Globe Bank</div>
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

export default Client;
