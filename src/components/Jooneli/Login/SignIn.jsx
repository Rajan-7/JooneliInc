import "./userlogin.css";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";

const URl = "http://localhost:5005/api/auth/register";


const SignIn = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
  });

  // Handling Register Input
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  // Form submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Register Data",register);
    try {
      const result =await axios.post(URl, {
        username: register.username,
        email: register.email,
        contact: register.contact,
        password: register.password,
      });
      if (result) {
        storeTokenInLs(result.data.token);
        alert("Successful Registration");
        setRegister({
          username: "",
          email: "",
          contact: "",
          password: "",
        });
        console.log(result.data.token);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="user-register--section">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="register-heading">Register</div>
          <div className="register-container">
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              id="username"
              name="username"
              required
              value={register.username}
              onChange={handleInput}
            />
          </div>
          <div className="register-container">
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              id="email"
              name="email"
              required
              value={register.email}
              onChange={handleInput}
            />
          </div>
          <div className="register-container">
            <input
              type="number"
              placeholder="Contact number"
              autoComplete="off"
              id="contact"
              name="contact"
              required
              value={register.contact}
              onChange={handleInput}
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
              value={register.password}
              onChange={handleInput}
            />
          </div>
          <div className="register-button">
            <button className="btn" type="submit">
              Sign up
            </button>
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
