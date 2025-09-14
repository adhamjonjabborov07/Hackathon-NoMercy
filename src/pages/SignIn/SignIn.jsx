import React from "react";
import "./signin.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="signin-page">
      <h1 className="signin-title">Sign In Page</h1>
      <p className="signin-breadcrumb">Home / Sign In Page</p>

      <div className="signin-card">
        <div className="signin-buttons">
          <button className="signin-btn social-btn">
            <FaGoogle className="icon" /> Sign In
          </button>
          <button className="signin-btn social-btn">
            <FaGithub className="icon" /> Sign In
          </button>
        </div>

        <div className="divider">OR</div>

        <form className="signin-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signin-btn primary-btn">
            Sign In
          </button>
        </form>

        <div className="signin-links">
          <a href="#">Forget Password?</a>
          <p>
            Not a member yet? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
