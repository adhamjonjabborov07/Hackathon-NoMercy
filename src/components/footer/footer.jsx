import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "../footer/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="logo">
            <Link to={"/"}><img src={Logo} alt="" /></Link>
          </h2>
          <p>
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing. Various versions have evolved over the
            years, sometimes.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="#">Cardiology</Link>
            </li>
            <li>
              <Link to="#">Sports Injury</Link>
            </li>
            <li>
              <Link to="#">Radiology</Link>
            </li>
            <li>
              <Link to="#">Lung Diseases</Link>
            </li>
            <li>
              <Link to="#">Gynecology</Link>
            </li>
            <li>
              <Link to="#">Eye Care</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Doctors</h3>
          <ul>
            <li>
              <Link to="#">Dr. Jessica Joan</Link>
            </li>
            <li>
              <Link to="#">Dr. Alexandra</Link>
            </li>
            <li>
              <Link to="#">Dr. Kimberly</Link>
            </li>
            <li>
              <Link to="#">Dr. Belle Carol</Link>
            </li>
            <li>
              <Link to="#">Dr. Rebecca Rose</Link>
            </li>
            <li>
              <Link to="#">Dr. Stephanie Sue</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="#">Doctors</Link>
            </li>
            <li>
              <Link to="#">Blogs</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <p>Newsletter</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email*" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
