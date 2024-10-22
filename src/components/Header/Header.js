import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const firstPathItem = location.pathname.split("/")[1];

    if (firstPathItem === "") {
      setActiveButton("home");
    } else if (firstPathItem === "listings") {
      setActiveButton("listings");
    } else if (firstPathItem === "about") {
      setActiveButton("about");
    } else if (firstPathItem === "contact") {
      setActiveButton("contact");
    }
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">Little Buddy Street</h1>
        <div className="header__side-nav">
          <button
            className={`header__btn ${activeButton === "home" ? "active" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </button>
          <button
            className={`header__btn ${
              activeButton === "listings" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/listings")}
          >
            Browse
          </button>
          <button
            className={`header__btn ${
              activeButton === "about" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </button>
          <button
            className={`header__btn ${
              activeButton === "contact" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
