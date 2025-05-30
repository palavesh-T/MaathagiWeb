import React from "react";
import "../assete/css/footer.css";
import { Link , useNavigate } from "react-router-dom";
import footer_logo from "../assete/Logo/logoi 1.png";

const  Footer = () => {

    const navigate = useNavigate();

  const phd_peoposal = () => {
    navigate("");
    

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

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
        <li><Link to="/Home" onClick={phd_peoposal}>Home</Link></li>
        <li><Link to="/About" onClick={phd_peoposal}>About</Link></li>
        <li><Link to="/Service" onClick={phd_peoposal}>Service</Link></li>
        <li><Link to="/Privacypolicy" onClick={phd_peoposal}>Privacy Policy</Link></li>
        <li><Link to="/Terms" onClick={phd_peoposal}>Terms & Condition</Link></li>
          <li><Link to="/Cancellation" onClick={phd_peoposal}>Cancellation Policy</Link></li>
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