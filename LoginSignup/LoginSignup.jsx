import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../Assets/email_542689.png";
import user_icon from "../Assets/social_14812155.png";
import password_icon from "../Assets/lock_18644106.png";
function LoginSignup() {
  const [action, setACtion] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          ""
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
        {action === "Sign Up" ? (
          ""
        ) : (
          <div className="forgot-password">
            Lost Password <span>Click Here</span>
          </div>
        )}
        <div className="submit-container">
          <div
            onClick={() => setACtion("Sign Up")}
            className={action === "Login" ? "submit gray" : "submit"}
          >
            Sign Up
          </div>
          <div
            onClick={() => setACtion("Login")}
            className={action === "Sign Up" ? "submit gray" : "submit"}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
