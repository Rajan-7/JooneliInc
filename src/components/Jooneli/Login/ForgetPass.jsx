import React, { useState } from "react";
import './userlogin.css';

const ForgetPass = () => {
  const [reset,setReset] = useState({
    email:""
  })

  // Handling Reset Password
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Reset email with :",reset);
  }
  
  return (
    <>
      <section className="forget-password--section">
        <form onSubmit={handleSubmit} className="forget-container">
          <div className="heading">Forget Password ?</div>
          <div className="resetemail">
            <p>To reset your password, please enter your email</p>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={reset.email}
              onChange={(e)=>{setReset(e.target.value)}}
            />
          </div>
          <div className="reset-button">
            <button type="submit" className="btn">Resest Password</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgetPass;
