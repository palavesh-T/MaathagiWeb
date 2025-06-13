import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cmpy_logo from "../assete/Logo/logo.png";
import "../assete/css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {motion, useScroll} from 'framer-motion';
import { useLocation } from 'react-router-dom';



const Header = () =>{

     const [menuOpen, setMenuOpen] = useState(false);
  //const [dropdownOpen, setDropdownOpen] = useState(null);
  //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
//   const toggleDropdown = (dropdown) => {
//     setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
//   };

  const handleScroll = () => {
    setMenuOpen(false);
    //setDropdownOpen(null);
  };

//   const updateIsMobile = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    //window.addEventListener('resize', updateIsMobile);

    const handleScrollForHeader = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('blue');
        } else {
          headerRef.current.classList.remove('blue');
        }
      }
    };

    window.addEventListener('scroll', handleScrollForHeader);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      //window.removeEventListener('resize', updateIsMobile);
      window.removeEventListener('scroll', handleScrollForHeader);
    };
  }, []);

  const navigate = useNavigate();

  const phd_peoposal = () => {
    navigate("");
    

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };
  const {scrollYProgress} =useScroll()

const location = useLocation();

    
return (
<>
<motion.div
      style={{scaleX:scrollYProgress,
        position:'fixed',
        top:0,
        right:0,
        left:0,
        height:1,
        background:"blue",
        transformOrigin:"0%",
        zIndex: 9999,
    }}
    ></motion.div>

  <div className='header_mani'>
      <div className='header_div_main'>
        <div className='header_pic'>
          <Link to="/Home"><img src={cmpy_logo} alt="Company Logo"/></Link>
        </div>
        <div className='addres_add addrs_chg_div'>
       
          <h2>Address <FontAwesomeIcon icon={faMapMarkerAlt} className='location_icon' /></h2>
          
          <p>JJ Arcade, First Floor, Near New Bus Stand, Marthandam, Tamil Nadu.</p>
        </div>
        <div className='addres_add email_chg_div'>
          <h2>Email <FontAwesomeIcon icon={faEnvelope} /></h2>
          <p>admin@maathangi.com</p>
        </div>
        <div className='mb_di_fa_ic'>
        <div className='menu_icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
            <div className='social_icons_div_fonts'>
    <a href="https://www.facebook.com/seasensesoftwares/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF}  style={{color:"#fff"}}/>
    </a>
    <a href="https://www.instagram.com/sea_sense_research?igsh=MWVnYTNxZ3Noc3A1bg==" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} style={{color:"#fff"}}/>
    </a>
    <a href="https://www.linkedin.com/company/sea-sense-softwares/mycompany/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} style={{color:"#fff"}} />
    </a>
    <a href="https://wa.me/8526700700" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp}  style={{color:"#fff"}}/>
    </a>
  </div>

      </div>
          </div>
      </div>
    </div>
    <div className={`main_menu_div ${menuOpen ? 'open' : ''}`}>
      <div className='add_menus_div'>
        <ul>
         <li>
  <Link to="/Home" onClick={phd_peoposal} className={location.pathname === "/Home" ? "active-menu" : ""}>HOME</Link>
</li>
          
         <li>
  <Link to="/About" onClick={phd_peoposal} className={location.pathname === "/About" ? "active-menu" : ""}>ABOUT</Link>
</li>
        <li>
  <Link to="/Service" onClick={phd_peoposal} className={location.pathname === "/Service" ? "active-menu" : ""}>SERVICES</Link>
</li>
         <li>
  <Link to="/Domains" onClick={phd_peoposal} className={location.pathname === "/Domains" ? "active-menu" : ""}>DOMAINS</Link>
</li>
       <li>
  <Link to="/Phd" onClick={phd_peoposal} className={location.pathname === "/Phd" ? "active-menu" : ""}>PHD SERVICES</Link>
</li>
           <li>
  <Link to="/Softwaredevelopment" onClick={phd_peoposal} className={location.pathname === "/Softwaredevelopment" ? "active-menu" : ""}>SOFTWARE DEVELOPMENT</Link>
</li>
          {/* <li onMouseEnter={!isMobile ? () => toggleDropdown('phd') : null} onMouseLeave={!isMobile ? () => toggleDropdown(null) : null} onClick={isMobile ? (e) => { e.stopPropagation(); toggleDropdown('phd'); } : null}>
              <Link to="#">Research Service <span className="arrow">&#9662;</span></Link>
              <div className={`dropdown-content ${dropdownOpen === 'phd' ? 'open' : ''}`}>
                <Link to="/Phdtopicselection" onClick={phd_peoposal} >Research Topic Selection</Link>
                <Link to="/Phdproposal" onClick={phd_peoposal}>Research Proposal</Link>
                <Link to="/Researchpaper" onClick={phd_peoposal}>Research paper Writing</Link>
                <Link to="/Journalassistance" onClick={phd_peoposal}>Journal Assistance</Link>
                <Link to="/Synopsis" onClick={phd_peoposal}>Synopsis Preparation</Link>
                <Link to="/Thesis" onClick={phd_peoposal}>Thesis Writing</Link>
              </div>
            </li> */}
           {/* <li onMouseEnter={!isMobile ? () => toggleDropdown('development') : null} onMouseLeave={!isMobile ? () => toggleDropdown(null) : null} onClick={isMobile ? () => toggleDropdown('development') : null}>
              <Link to="#">Development Service <span className="arrow">&#9662;</span></Link>
              <div className={`dropdown-content ${dropdownOpen === 'development' ? 'open' : ''}`}>
                <Link to="/Matlab" onClick={phd_peoposal}>Matlab Development</Link>
                <Link to="/Python" onClick={phd_peoposal}>Python Development</Link>
                <Link to="/Java" onClick={phd_peoposal}>Java Development</Link>
                <Link to="/Vlsi" onClick={phd_peoposal}>VLSI Development</Link>
                <Link to="/#" onClick={phd_peoposal}>S-EDIT Development</Link>
                <Link to="/#" onClick={phd_peoposal}>NS-2 & NS-3 Development</Link>
                <Link to="/#" onClick={phd_peoposal}>Simulink Development</Link>
                <Link to="/#" onClick={phd_peoposal}>HFSS Development</Link>
              </div>
            </li> */}
            {/* <li onMouseEnter={!isMobile ? () => toggleDropdown('addon') : null} onMouseLeave={!isMobile ? () => toggleDropdown(null) : null} onClick={isMobile ? () => toggleDropdown('addon') : null}>
              <Link to="#">Add-On-Service <span className="arrow">&#9662;</span></Link>
              <div className={`dropdown-content ${dropdownOpen === 'addon' ? 'open' : ''}`}>
                <Link to="/Plagiarism" onClick={phd_peoposal}>Plagiarism Checking</Link>
                <Link to="/Grammer" onClick={phd_peoposal}>Grammar Checking</Link>
                <Link to="/Proof" onClick={phd_peoposal}>Proof Reading</Link>
                <Link to="/Language" onClick={phd_peoposal}>Language correction</Link>
                <Link to="/Literature" onClick={phd_peoposal}>Literature Review</Link>
              </div>
            </li> */}
         <li>
  <Link to="/Contact" onClick={phd_peoposal} className={location.pathname === "/Contact" ? "active-menu" : ""}>CONTACT</Link>
</li>
          <div className='social_icons_div'>
 <div className="tooltip">
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <span className="tooltiptext">Facebook</span>
  </div>
  <div className="tooltip">
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <span className="tooltiptext">Instagram</span>
  </div>
  <div className="tooltip">
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <span className="tooltiptext">LinkedIn</span>
  </div>
  <div className="tooltip">
    <a href="/#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
    <span className="tooltiptext">WhatsApp</span>
  </div> 
</div>

        </ul>
      </div>
    </div>
   </>
)
}

export default Header;