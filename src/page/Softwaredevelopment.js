import React from "react";
import "../assete/css/software.css";
import Header from "./Header";
import software_pic_1 from "../assete/images/software 1.jpeg";
import { FaLock, FaSearch, FaServer, FaUserShield, FaDatabase, FaMapMarkedAlt,FaRss,FaCreditCard,FaLaptopCode,FaFileInvoiceDollar,FaUniversity,FaMoneyBillWave,FaSms } from 'react-icons/fa';
  import {FaVideo,FaCode,FaSearchDollar,FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaFileAlt,FaMobileAlt,FaSchool,FaSitemap,FaShoppingCart,FaUserClock} from 'react-icons/fa';
import Footer from "./Footer";
import {  useNavigate } from "react-router-dom";
import MetaTitle from '../components/MetaTittle';

const Softwaredevelopment = () =>{

     const navigate = useNavigate();
    
        const phd_peoposal = (path) => {
            navigate(path);
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        };

    return(
        <>
          <MetaTitle title={"Software development | "} />
                      <meta name="description" content="MAATHANGI provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
        <Header/>
        <div className="maathagi_software_div"></div>
        <div className="software_maathagi_div">
            <div className="software_maathagi_div_1">
                <div className="software_maathagi_div_2">
                    <img src={software_pic_1} alt="" />
                </div>
                <div className="software_maathagi_div_3">
                    <div className="software_maathagi_div_4">
                        <h2>Software Development</h2>
                        <p>Software Application Development and Maintenance is a part of Maathangi softwares's Core activity. We offer clients innovative solutions to their software needs using PHP 5, ASP, .NET, JSP, J2EE, Java, Voice XML, XML-HTTP Messaging and AJAX technologies with MySQL, MS SQL, Oracle and MS ACCESS as databse. We also develop applications using Content Management Systems such as Joomla and Worpress to non-critical clients.</p>
                        <p>We offer solutions for integrating new or existing system with front and back-office applications. Provide end-to-end business solution to address the support and software maintenance services. Our company has proven experience in delivering quality offshore software application support to business solutions that run the business round the clock.</p>
                        <p>SAs part of Mobile software application development, at Maathangi softwares, we develop apps for small low-power handheld devices such as personal digital assistants, enterprise digital assistants or mobile phones. These applications are either pre-installed on phones during manufacture, or downloaded by customers from app stores and other mobile software distribution platforms.</p>
                        <p>At Maathangi softwares we have developed mobile, hand-held software for vehicle / fleet management, directory listing, video streaming and tracking</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="software_maathagi_main_div">
            <h2>Software Development Expertise</h2>
            </div>
            <div className="software_maathagi_main_div_1">
                <div className="software_maathagi_main_div_2">
                    <h2><FaLock className="feature-icon" />Highly secured web-based applications.</h2>
                    <h2> <FaSearch className="feature-icon" />Text-based search and pattern matching using Lucene API</h2>
                    <h2><FaServer className="feature-icon" />Implementation of Web Services.</h2>
                    <h2><FaUserShield className="feature-icon" />User tracking</h2>
                    <h2><FaDatabase className="feature-icon" />Automated data update of MLS data</h2>
                    <h2><FaMapMarkedAlt className="feature-icon" /> Google Map and MS Virtual Earth Map integration</h2>
                    <h2><div className="feature-icon"><FaRss /><FaCreditCard /></div> Implementation of RSS feed, Credit card processing</h2>
                    <h2><FaLaptopCode className="feature-icon" /> Content Management Systems web sites and JQuery software</h2>
                    <h2><FaFileInvoiceDollar className="feature-icon" />Billing Software</h2>
                    <h2><FaUniversity className="feature-icon" />College Management</h2>
                    <h2><FaMoneyBillWave className="feature-icon" />Payroll System</h2>
                    <h2><FaSms className="feature-icon" /> Bulk SMS Software</h2>
                </div>
               <div className="software_maathagi_main_div_3">
  <h2><FaVideo className="service-icon" /> Video Conferencing System for TeleMedicine, Training & Research</h2>
  <h2><FaCode className="service-icon" /> HTTP tunneling using Java, PHP and AJAX</h2>
  <h2><FaSearchDollar className="service-icon" /> Search Engine Optimization (SEO)</h2>
  <h2><FaPhoneAlt className="service-icon" /> Interactive Voice Response (IVR) Software</h2>
  <h2><FaEnvelope className="service-icon" /> Bulk E-mailing and queuing, E-mail reader and processor</h2>
  <h2><FaMapMarkerAlt className="service-icon" /> Map based search for real estate</h2>
  <h2><FaFileAlt className="service-icon" /> Document preparation / generation on-the-fly</h2>
  <h2><FaMobileAlt className="service-icon" /> Mobile applications</h2>
  <h2><FaSchool className="service-icon" /> School Management</h2>
  <h2><FaSitemap className="service-icon" /> MLM Software</h2>
  <h2><FaShoppingCart className="service-icon" /> Ecommerce Software</h2>
  <h2><FaUserClock className="service-icon" /> Attendance Management</h2>
</div>
            </div>
        
        <div className="software_maathagi_div_design">
            <div className="software_maathagi_div_design_1">
                <div className="software_maathagi_div_design_2">
                    <h2>We run all kinds of IT services that vow your success</h2>
                </div>
                <div className="software_maathagi_div_design_3">
                    <button onClick={() => phd_peoposal("/Contact")}>Let's talk</button>
                </div>
            </div>
        </div>
        <div className="software_maathagi_design_new_card">
            <div className="software_maathagi_design_new_card_1">
                <div className="software_maathagi_design_new_card_3">
                <div className="software_maathagi_design_new_card_2">
                        <h2>IT Services</h2>
                        <p>At Maathangi, we follow the FDD or RAD or JAD that are experienced by us as successful software development processes. Depending on the project we follow any of these methodologies in mutual consultation with the client. Our development plan, in general, includes the key steps as Requirement Gathering, Software Design, Coding, and Testing. Along with the client, our Business Analyst / Project coordinator does the scoping and sign-off documents once a project is taken up. We will then come up with a document to brief how we are going to kick off the project, which summarizes the results of the Project Initiation stage and recommends the steps to the next stage.</p>
                </div>
                </div>
                 <div className="software_maathagi_design_new_card_3">
                <div className="software_maathagi_design_new_card_2">
                        <h2>Scheduling</h2>
                        <p>After this the Technical Team Lead, will split the broad features into smaller modules / tasks and finalise the milestones for each of these modules. The priorities will be finalized in consultation with the client. Usually these will be loaded in a Project Tracking Tool that will be accessible to all stake holders of the project. Maathangi's On-site Coordinator (if any) or off-site manager will track the development activity and measure the velocity of the team using standard estimation procedures. This helps the Project Manager / On-site coordinator to set the expectation with the client on what he can expect in the coming weeks and months. This enables the client to control and alter priorities based on business priorities.</p>
                </div>
                </div>
           </div>
        </div>
        
        <Footer/>
        </>
    )
}
export default Softwaredevelopment