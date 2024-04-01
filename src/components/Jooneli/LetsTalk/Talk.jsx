import React, { useState } from "react";
import TalkHeader from "./TalkHeader";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./talk.css";

const defaultContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const URL = "http://localhost:5005/api/form/contact";

const Talk = () => {
  const [contact, setContact] = useState(defaultContactForm);

  // Handling the contact Inputs
  const handleContact = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handling contact submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(URL, {
        name:contact.name,
        email:contact.email,
        subject:contact.subject,
        message:contact.message
      });
      if(response){
        alert("Message Delivered successfully");
        setContact(defaultContactForm);
      }
    } catch (error) {
      alert("Message not send successfully");
      console.error(error);
    }
  };

  return (
    <>
      <TalkHeader />
      <section className="talk-section">
        <div className="talk-heading">Contact Us</div>
        <div className="talk-main--content">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.487246700395!2d85.3049364!3d27.674901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19240dd21323%3A0xc3c94e19f8e6322b!2sJooneli%20Inc.!5e0!3m2!1sen!2snp!4v1702449223717!5m2!1sen!2snp"
              width=""
              height=""
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
              <form onSubmit={handleSubmit} method="POST">
                <div className="grid-two--cols mb-3">
                  <div>
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      required
                      placeholder="Enter your name"
                      value={contact.name}
                      onChange={handleContact}
                    />
                  </div>
                  <div>
                    <label for="username">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                      placeholder="Enter your email"
                      value={contact.email}
                      onChange={handleContact}
                    />
                  </div>
                </div>
                <div className="mb-3 subject">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="off"
                    placeholder="Your subject matter"
                    value={contact.subject}
                    onChange={handleContact}
                  />
                </div>
                <div className="mb-3 message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    placeholder="Enter your message..."
                    value={contact.message}
                    onChange={handleContact}
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
