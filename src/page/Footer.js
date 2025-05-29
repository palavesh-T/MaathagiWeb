import React from "react";
import "../assete/css/footer.css";
import { Link } from "react-router-dom";
import footer_logo from "../assete/Logo/logo.png";

const  Footer = () => {

    return (
        <>
        <footer className="footer">
  <div className="footer-container">
    <div className="footer-section logo-section">
      <img src={footer_logo} alt="Company Logo" className="footer-logo" />
    </div>

    <div className="footer-section quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">About</Link></li>
        <li><Link to="/home">Service</Link></li>
        <li><Link to="/home">Research</Link></li>
        <li><Link to="/home">Contact</Link></li>
      </ul>
    </div>

    <div className="footer-section contact-details">
      <h3>Company Info</h3>
      <p>Sea Sense Interdisciplinary Research and IT Solution (OPC) Pvt. Ltd.</p>
      <p>JJ Arcade, 2nd Floor, Near New Bus Stand,<br />Marthandam - Kanyakumari District, Tamil Nadu - 629165</p>
      <p>Email: info@seasense.in</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  </div>
</footer>

        
        </>
    )


}

export default Footer