import React, { useState } from 'react';
import "../assete/css/contact.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FiPhone } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import { ContactusApi } from '../service/Api';
import MetaTitle from '../components/MetaTittle';

const Contact =() =>{

      const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    service_type: '',
    user_message: '',
  });
  
  const [errorMessage, setErrorMessage] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  

  const handleSubmit = async () => {
    let errors = {};
  
    // Validation for all fields
    if (!/^[A-Za-z\s]+$/.test(formData.user_name.trim())) {
      errors.user_name = 'Enter your Name';
    }
  
    if (!/^[0-9]{10}$/.test(formData.user_phone.trim())) {
      errors.user_phone = 'Phone number must be 10 digits.';
    }
  
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.user_email.trim())) {
      errors.user_email = 'Enter a valid email address.';
    }
  
    if (formData.service_type.trim() === '' || formData.service_type === 'select*') {
      errors.service_type = 'Please select a service type.';
    }
  
    if (formData.user_message.trim() === '') {
      errors.user_message = 'Message cannot be empty.';
    }
  
    // If errors exist, display them and stop submission
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      setTimeout(() => {
        setErrorMessage(''); // Clear error messages after 5 seconds
      }, 2000);
      return;
    }
  
    try {
      setErrorMessage('');
         const submissionDate = new Date().toISOString();
    
    // Create form data with submission date
    const formDataWithDate = {
      ...formData,
      submission_date: submissionDate
    };
      const response = await ContactusApi(formDataWithDate);
      console.log('Form data saved:', response.data);
  
      setSuccessMessage(' submitted successfully!');
      setFormData({
        user_name: '',
        user_phone: '',
        user_email: '',
        service_type: '',
        user_message: '',
      });
  
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error saving form data:', error);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };
  
    return(
        <>
        <Header/>
          <MetaTitle title={"Contact | "} />
                      <meta name="description" content="MAATHANGI provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
        <div className="contact_maathagi_div"></div>

        <div className="maathagi_contact_div">
            <div className="maathagi_contact_div_1">
                <div className="maathagi_contact_div_2">
                    <h2>Connect with Our Team of Expert</h2>
                    <p>Contact our team of excellence-driven experts today to bring your project to life.</p>

                    <div className="maathagi_contact_div_3">
                        <div className="maathagi_contact_div_4">
                            <Link to="tel:7530066114" className="flex items-center gap-2"><FiPhone style={{color:"#fff"}} />7530066114</Link>
                        </div>
                        <div className="maathagi_contact_div_4">
                           <Link to="mailto:admin@maathangi.com" className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} style={{color:"#fff"}} /> admin@maathangi.com</Link>
                        </div>
                        <div className="maathagi_contact_div_4">
                           <Link to="/location" className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} style={{color:"#fff"}} />Location</Link>
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
                                <input type="text" placeholder="Name" id="user_name" value={formData.user_name} onChange={handleChange} autoComplete='off' />
                                 {errorMessage.user_name && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_name}</div>}
                            </div>
                             <div className="maathagi_contact_input_divs_3">
                                <input type="text" placeholder="Phone" id="user_phone" value={formData.user_phone} onChange={handleChange} />
                                 {errorMessage.user_phone && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_phone}</div>}
                            </div>
                        </div>
                         <div className="maathagi_contact_input_divs_2">
                            <div className="maathagi_contact_input_divs_3">
                                <input type="text" placeholder="Email" id="user_email" value={formData.user_email} onChange={handleChange} autoComplete='off' />
                                {errorMessage.user_email && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_email}</div>}
                            </div>
                             <div className="maathagi_contact_input_divs_3">
                               <select  id="service_type" onChange={handleChange} autoComplete='off'>
                                <option id="service_type" value={formData.service_type} autoComplete='off'>select</option>
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
                               {errorMessage.service_type && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.service_type}</div>}
                            </div>
                        </div>
                        <div className="maathagi_contact_textarea_div">
                            <textarea id='user_message' placeholder='message' value={formData.user_message} onChange={handleChange}></textarea>
                            {errorMessage.user_message && <div className="error-message" style={{ color: 'red',fontSize:"10px" }}>{errorMessage.user_message}</div>}
                        </div>
                        <div className="maathagi_contact_button">
                            <button onClick={handleSubmit} >SUBMIT</button>
                             {successMessage && <div className="success-message" style={{ color: '#fff' }}>{successMessage}</div>}
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
                            <h2>Phone</h2>
                        <Link to="tel:7530066114">91+ 7530066114</Link>
                    </div>
                     <div className="maathagi_contact_card_div_4">
                        <FontAwesomeIcon icon={faEnvelope} className="phone-icon" />  
                          <h2>Email</h2>
                        <Link to="mailto:admin@maathangi.com">admin@maathangi.com</Link>
                        
                    </div>
                     <div className="maathagi_contact_card_div_4">
                        <FontAwesomeIcon icon={faLocationDot} className="phone-icon" />
                          <h2>Registered Office</h2>
                        <Link to="">Poovanvilai, Thirithuvapuram, Madichal Post, Kanyakumari District, Tamil Nadu - 629 163</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}
export default Contact