import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <a href="#header">
            <i className="fas fa-globe-europe"></i>
          </a>

          <span className="header-title">my travel journal.</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
