import React from "react";
import "../assete/css/footer.css";
import { Link , useNavigate } from "react-router-dom";
import footer_logo from "../assete/Logo/logoi 1.png";
import { FiPhone } from 'react-icons/fi';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <h2>Maathangi info Research & IT Solution</h2>
      <p><FontAwesomeIcon icon={faLocationDot} className="phone-loc" />JJ Arcade, 1st Floor, Near New Bus Stand,<br />Marthandam - Kanyakumari District,<br /> Tamil Nadu - 629165</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> admin@maathangi.com</p>
      <p> <FiPhone className="phone-iconss" /> +91 7530066114</p>
    </div>
  </div>
</footer>

        
        </>
    )


}

export default Footer