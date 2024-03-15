import "./userlogin.css";
import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";

const URL = "http://localhost:5005/api/auth/login";

const UserLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Handling Login Data/inputs
  const handlInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  // Handling login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login data :", login);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const res_data = await response.json();
      // console.log(res_data.message);
      if (response.ok) {
        // Storing The Token In LocalStorage
        storeTokenInLs(res_data.token);
        alert("Login Successfull");
        setLogin({ email: "", password: "" });
        navigate("/");
      } else {
        alert(res_data.moreDetails ? res_data.moreDetails : res_data.message);
      }
    } catch (error) {
      console.error("Invalid Credentials");
    }
  };
  return (
    <div>
      <section className="user-login--section">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="login-heading">Login</div>
          <div className="login-container">
            <li>
              <i className="fa-solid fa-user"></i>Email
            </li>
            <input
              type="email"
              placeholder=""
              autoComplete="off"
              id="email"
              name="email"
              required
              value={login.email}
              onChange={handlInput}
            />
          </div>
          <div className="login-container">
            <li>
              <i className="fa-solid fa-lock"></i>Password
            </li>
            <input
              type="password"
              placeholder=""
              autoComplete="off"
              id="password"
              name="password"
              required
              value={login.password}
              onChange={handlInput}
            />
          </div>
          <div className="forget-pass">
            <Link to="/forgetpass">Forget Password?</Link>
          </div>
          <div className="login-button">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="account">
            Do you have an account? <Link to="/signin">Sign in</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserLogin;
