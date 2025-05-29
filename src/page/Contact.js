import React from "react";
import "../assete/css/contact.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FiPhone } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

const Contact =() =>{

    return(
        <>
        <Header/>
        <div className="contact_maathagi_div"></div>

        <div className="maathagi_contact_div">
            <div className="maathagi_contact_div_1">
                <div className="maathagi_contact_div_2">
                    <h2>Connect with Our Team of Expert</h2>
                    <p>Contcat our team of excellence-driven experts today to bring your project to life.</p>

                    <div className="maathagi_contact_div_3">
                        <div className="maathagi_contact_div_4">
                            <Link to="tel:8637625100" className="flex items-center gap-2"><FiPhone />8637625100</Link>
                        </div>
                        <div className="maathagi_contact_div_4">
                           <Link to="mailto:maathagi@gmail.com" className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} /> maathagi@gmail.com</Link>
                        </div>
                        <div className="maathagi_contact_div_4">
                           <Link to="/location" className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} />Location</Link>
                        </div>
                    </div>

                    <div className="maathagi_contact_div_5">
                        <div className="maathagi_contact_div_6">
                            <div className="maathagi_contact_div_7">
                                <h1>Want to Join Our Talented Team?</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="maathagi_contact_input_divs">
                    <div className="maathagi_contact_input_divs_1">
                        <div className="maathagi_contact_input_divs_2">
                            <div className="maathagi_contact_input_divs_3">
                                <input type="text" placeholder="Name" />
                            </div>
                             <div className="maathagi_contact_input_divs_3">
                                <input type="text" placeholder="Phone" />
                            </div>
                        </div>
                         <div className="maathagi_contact_input_divs_2">
                            <div className="maathagi_contact_input_divs_3">
                                <input type="text" placeholder="Email" />
                            </div>
                             <div className="maathagi_contact_input_divs_3">
                               <select>
                                <option>select</option>
                                <option value="Research Proposal">Research Proposal</option>
                                <option value="Research Paper">Research Paper</option>
                                <option value="Implementation">Implementation</option>
                                <option value="Publication Assistance">Publication Assistance</option>
                                <option value="Polishing">Polishing</option>
                                <option value="Web Hosting">Web Hosting</option>
                                <option value="Email Service">Email Service</option>
                                <option value="SMS Service">SMS Service</option>
                                <option value="Student Management">Student Management</option>
                                <option value="Employee Payroll">Employee Payroll</option>
                                <option value="other">Other</option>
                               </select>
                            </div>
                        </div>
                        <div className="maathagi_contact_textarea_div">
                            <textarea></textarea>
                        </div>
                        <div className="maathagi_contact_button">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="maathagi_contact_card_div">
            <div className="maathagi_contact_card_div_1">
                <div className="maathagi_contact_card_div_3">
                    <div className="maathagi_contact_card_div_4">
                        <FiPhone className="phone-icon" />

                        <Link to="">8637625100</Link>
                    </div>
                     <div className="maathagi_contact_card_div_4">
                        <FontAwesomeIcon icon={faEnvelope} className="phone-icon" />  

                        <Link to="">Addmin@gmail.com</Link>
                         <Link to="">Addmin@gmail.com</Link>
                    </div>
                     <div className="maathagi_contact_card_div_4">
                        <FontAwesomeIcon icon={faLocationDot} className="phone-icon" />

                        <Link to="">Near New Bus Stand
Market Road
Marthandam, K.K. Dist.,
TamilNadu, India - 629 165</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}
export default Contact