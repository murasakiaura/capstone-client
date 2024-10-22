import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; 2024 Adopt an Animal. All rights reserved.
        </p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
