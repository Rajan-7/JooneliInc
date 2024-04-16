import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Mainbody = () => {
  const { cnews } = useAuth();
  // console.log(cnews[0].image);
  return (
    <>
      <main className="main">
        <div className="main-heading">
          Our solutions connect people to financial services in simple, secure
          and affordable ways.
        </div>
        <div className="main-content">
          <div className="main-content--1">
            <div className="icon">
              <img src="/image/aboutus.png" alt="" />
            </div>
            <div className="heading">About Us</div>
            <p>
              Empowering innovation through cutting-edge technology, our IT
              company is dedicated to providing unparalleled solutions
            </p>
          </div>
          <div className="main-content--1">
            <div className="icon">
              <img src="/image/milestone.png" alt="" />
            </div>
            <div className="heading">Milestones</div>
            <p>
              With a journey marked by relentless dedication and technological
              prowess, our milestones reflect a history of transformative
              achievements.
            </p>
          </div>
          <div className="main-content--1">
            <div className="icon">
              <img src="/image/leader.png" alt="" />
            </div>
            <div className="heading">Leadership</div>
            <p>
              At the helm of our IT company, visionary leaders blend expertise
              and passion, steering the team with a shared commitment to
              innovation.
            </p>
          </div>
        </div>
      </main>
      <div className="boxes">
        <div className="side-flex">
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Enablling financial access</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Digitizing Industry </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="box-content">
              <div className="hover-effect"></div>
              <div className="heading">Adding Value</div>
            </div>
          </div>
        </div>
        <div className="right-grid">
          <div className="box1">
            <img src="/image/mobile111.jpeg" alt="" />
            <div className="heading">Fintech with the banks</div>
            <p className="sub-heading">
              Banksmart, our mobile banking solutin, search over 10M people
              through 50+ banks
            </p>
          </div>
          <div className="box1">
            {/* <img src="/image/joonsewa.png" alt="" className="sewa" /> */}
            <img src="/image/sewajoon.jpg" alt="" />
            <div className="heading">Hands-on-learning</div>
            <p className="sub-heading">
              With 80K+ agents across Nepal, eSewa reaches out to every part of
              the country
            </p>
          </div>
          <div className="box1">
            <img src="/image/remittance.jpeg" alt="" />
            <div className="heading">Introducing eRemittance</div>
            <p className="sub-heading">
              With digital mode of transfers, eSewa money transfer aims to
              revolutionized the way Nepalese send & receive money
            </p>
          </div>
          <div className="box1">
            <img src="/image/fonee.jpeg" alt="" />
            <div className="heading">Digital Payment</div>
            <p className="sub-heading">
              Fonepay connects consumers, banks and businesses into
              interoperable network to faciliates payments and fund transfer
              between them
            </p>
          </div>
        </div>
      </div>
      <div className="photo-news">
        <div className="photo-info">
          <div className="img-container">
            <Link>
              <img src="/image/water.jpeg" alt="" />
            </Link>
            <div className="overlay">
              "Continuously at the forefront of innovation & reliability, our
              financial software has been rigorously over 4,257,360 hours by
              satisfying customer. Tailor specifically for cooperative, it
              provides invaluable, offering assistant & practicality at every
              turn..."
              <div className="name">Jooneli</div>
              <div className="info">IT company</div>
              <div className="action">
                <button className="btn">Read More</button>
              </div>
              <div className="forward-backward">
                <i className="fa-solid fa-less-than"></i>
                <i className="fa-solid fa-greater-than"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="news">
          <h1 className="news-heading">Corporate News</h1>
          {/* <div className="news-div--1"> */}
          {cnews.map((curC, ind) => {
            {/* console.log(curC.image); */}
            console.log(`http://localhost:5005/image/${curC.image}`)
            return (
              <div className="news-div--1 mb-t" key={ind}>
                <div className="image-section">
                  <img
                    src={`http://localhost:5005/image/${curC.image}`}
                    alt="Cnews Images"
                    height="200"
                    width="200"
                  />
                </div>
                <div className="news-section">
                  <div className="news-section--heading">
                    {curC.description}
                  </div>
                  <div className="news-date">{curC.date}</div>
                </div>
              </div>
            );
          })}
          {/* </div> */}
          {/* <div className="news-div--1 mb-t">
            <div className="image-section">
              <img src="/image/meeting.jpeg" alt="" />
            </div>
            <div className="news-section">
              <div className="news-section--heading">
                Esewa money transfer continues with the “Hamro Digital Desh”
                initiative, aiming to…
              </div>
              <div className="news-date">Sep 18, 2023</div>
            </div>
          </div> */}
          {/* <div className="news-div--1 mb-t">
            <div className="image-section">
              <img src="/image/gathering.jpeg" alt="" />
            </div>
            <div className="news-section ">
              <div className="news-section--heading">
                Jooneli is participating in CAN Info-Tech at Bhrikutimandap
                where...
              </div>
              <div className="news-date">Sep 07, 2023</div>
            </div>
          </div> */}
          {/* <div className="news-div--1 mb-t">
            <div className="image-section">
              <img src="/image/esewa.jpeg" alt="" />
            </div>
            <div className="news-section">
              <div className="news-section--heading">
                Esewa money transfer partner with saudi arabia-based Enjaz
                payments services...
              </div>
              <div className="news-date">Aug 22, 2023</div>
            </div>
          </div> */}
          <div className="news-button">
            <button>Read all news</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
