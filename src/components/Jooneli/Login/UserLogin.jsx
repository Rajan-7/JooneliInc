import React from "react";
import { Link } from "react-router-dom";
import "./userlogin.css";

const UserLogin = () => {
  
  return (
    <div>
      <section className="user-login--section">
        <form action="" className="form-container">
          <div className="login-heading">Login</div>
          <div className="login-container">
            <li>
              <i class="fa-solid fa-user"></i>Username
            </li>
            <input
              type="text"
              placeholder=""
              autoComplete="off"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="login-container">
            <li>
              <i class="fa-solid fa-lock"></i>Password
            </li>
            <input
              type="text"
              placeholder=""
              autoComplete="off"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="forget-pass">
            <Link to="/forgetpass">Forget Password?</Link>
          </div>
          <div className="login-button">
            <button className="btn">Login</button>
          </div>
          <div className="account">
            Do you have an account? <Link to='/signin' >Sign in</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserLogin;
