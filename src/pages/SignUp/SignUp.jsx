import React from "react";
import "./signup.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up Page</h1>
      <p className="signup-breadcrumb">Home / Sign Up Page</p>

      <div className="signup-card">
        {/* Social sign up */}
        <div className="signup-buttons">
          <button className="signup-btn social-btn">
            <FaGoogle className="icon" /> Sign Up
          </button>
          <button className="signup-btn social-btn">
            <FaGithub className="icon" /> Sign Up
          </button>
        </div>

        <div className="divider">OR</div>

        {/* Form */}
        <form className="signup-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn primary-btn">
            Sign Up
          </button>
        </form>

        <div className="signup-links">
          <p>
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
