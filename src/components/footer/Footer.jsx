import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="copy-right">Copy-right: {currentYear}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;