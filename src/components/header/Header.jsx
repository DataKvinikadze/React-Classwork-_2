import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <img src="/vite.svg" alt="Logo" />
            </div>
            <div className="nav-bar">
              <ul>
                <li>home</li>
                <li>about us</li>
                <li>products</li>
                <li>contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
