import React from "react";
import { Link } from "react-router-dom";
import "./userlogin.css";

const SignIn = () => {
  return (
    <>
      <section className="user-register--section">
        <form action="" className="form-container">
          <div className="register-heading">Register</div>
          <div className="register-container">
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="register-container">
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="register-container">
            <input
              type="text"
              placeholder="Contact number"
              autoComplete="off"
              id="contact"
              name="contact"
              required
            />
          </div>
          <div className="register-container">
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="register-container">
            <input
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
              id="confirmpassword"
              name="confirmpassword"
              required
            />
          </div>

          <div className="register-button">
            <button className="btn">Sign up</button>
          </div>
          <div className="account">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignIn;
