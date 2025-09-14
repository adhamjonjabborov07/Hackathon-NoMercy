import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../header/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">  
        <Link to={"/"}><img src={Logo} alt="" /></Link>
      </div>

      <nav className="nav">
        <Link className="pages-style" to="/doctors">
          Doctors
        </Link>
        <Link className="pages-style" to="/contact">
          Contact
        </Link>
      </nav>

      <div className="right">
        <Link to="/login" className="btn btn-primary">
          Sign In
        </Link>
        <Link to="/signUp" className="btn btn-outline">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
