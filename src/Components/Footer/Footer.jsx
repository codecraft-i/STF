import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <div className="logo-container">
            <div className="logo-bg">
              <img src="/logo.png" alt="logo" className="logo-img" />
            </div>
            <span className="logo-text">Destination</span>
          </div>
          <p className="social-title">Social Media:</p>
          <div className="social-icons">
            <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/telegram.svg" alt="Telegram" /></a>
            <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
          </div>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <a href="#">About us</a>
          <a href="#">Universities</a>
          <a href="#">Schools</a>
          <a href="#">Short programmes</a>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <p className="contact-title">Contacts</p>
          <p>info@destination.co.uz</p>
          <p>+998 99 696 88 00</p>
          <p>Address: C-5, 68A Qiyot Residential Area,<br /> Tashkent, Uzbekistan</p>
        </div>
      </div>
    </footer>
  );
}