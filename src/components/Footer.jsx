import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected</h2>
        <p className="footer-description">
          Follow us on social media to stay updated with new lessons and tips!
        </p>
        <div className="footer-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaTelegram />
          </a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2024 English Learning Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


