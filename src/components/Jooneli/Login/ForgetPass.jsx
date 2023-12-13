import React from "react";
import './forgetpass.css';

const ForgetPass = () => {
  return (
    <>
      <section className="forget-password--section">
        <form action="" className="forget-container">
          <div className="heading">Forget Password ?</div>
          <div className="resetemail">
            <p>To reset your password, please enter your email</p>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="reset-button">
            <button className="btn">Resest Password</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgetPass;
