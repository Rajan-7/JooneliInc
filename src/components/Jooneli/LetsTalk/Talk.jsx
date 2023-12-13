import React from "react";
import TalkHeader from "./TalkHeader";
import Footer from "../Footer/Footer";
import "./talk.css";

const Talk = () => {
  return (
    <>
      <TalkHeader />
      <section className="talk-section">
        <div className="talk-heading">Contact Us</div>
        <div className="talk-main--content">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.487246700395!2d85.3049364!3d27.674901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19240dd21323%3A0xc3c94e19f8e6322b!2sJooneli%20Inc.!5e0!3m2!1sen!2snp!4v1702449223717!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="map-image"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-content">
            <div className="contact-title">Get In Touch</div>
            <div className="form-container">
              <form action="" method="POST">
                <div className="grid-two--cols mb-3">
                  <div>
                    <label for="username">Your Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="off"
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label for="username">Your Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="off"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-3 subject">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autocomplete="off"
                    placeholder="Your subject matter"
                  />
                </div>
                <div className="mb-3 message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    autocomplete="off"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <div className="send-message">
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Talk;
