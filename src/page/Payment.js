import React, { useState, useEffect } from 'react';
import Header from "./Header";
import "../assete/css/payment.css";
import {PaymentGatewayApi, ViewBankDetailsApi, ViewQrImagesApi} from "../service/Api";
import axios from 'axios';
import Footer from './Footer';


const Payment = () =>{
      const [details, setDetails] = useState([]);
      const [showPopup, setShowPopup] = useState(false);
        const [images, setImagesPopup] = useState([]);
       useEffect(() => {
                   const fetchData = async () => {
                       try {
                           const response = await ViewBankDetailsApi();
                           if (response && response.bankdetails) {
                               setDetails(response.bankdetails.reverse());
                           }
                       } catch (error) {
                           console.error('Error fetching data:', error);
                       }
                   };
                   fetchData();
               }, []);
                 const fetchImages = async () => {
                           try {
                               const data = await ViewQrImagesApi();
                               setImagesPopup(data.images|| []);
                           } catch (err) {
                              
                               console.error(err);
                           }
                       };
                         useEffect(() => {
                                   fetchImages();
                               }, []);

      
          const [formData, setFormData] = useState({
                                amount: '',
                                name: '',
                                mobile: '',
                                email: '',
                                country: '',
                                address: '',
                                city: '',
                                state: '',
                                pincode: ''
                              });
                            
                              const [errors, setErrors] = useState({});
                            
                              const handlePopup = () => {
                                setShowPopup(true);
                                setErrors({});
                              };
                            
                              const handleClose = () => {
                                setShowPopup(false);
                                setFormData({
                                  amount: '',
                                  name: '',
                                  mobile: '',
                                  email: '',
                                  country: '',
                                  address: '',
                                  city: '',
                                  state: '',
                                  pincode: ''
                                });
                                setErrors({});
                              };
                            
                              const handleChange = (e) => {
                                const { name, value } = e.target;
                                setFormData(prev => ({
                                  ...prev,
                                  [name]: value
                                }));
                              };
                            
                              const validate = () => {
                                const newErrors = {};
                                if (!formData.amount) {
                                  newErrors.amount = 'Amount is required';
                                } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
                                  newErrors.amount = 'Enter a valid amount';
                                }
                                if (!formData.name) {
                                  newErrors.name = 'Name is required';
                                } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
                                  newErrors.name = 'Enter a valid name';
                                }
                              
                                if (!formData.mobile) {
                                  newErrors.mobile = 'Mobile number is required';
                                } else if (!/^\d{10}$/.test(formData.mobile)) {
                                  newErrors.mobile = 'Enter a valid 10-digit mobile number';
                                }
                                if (!formData.email) {
                                  newErrors.email = 'Email is required';
                                } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                                  newErrors.email = 'Enter a valid email address';
                                }
                                if (!formData.country) {
                                  newErrors.country = 'Country is required';
                                } else if (!/^[A-Za-z\s]+$/.test(formData.country)) {
                                  newErrors.country = 'Enter a valid country name';
                                }
                                if (!formData.address) newErrors.address = 'Address is required';
                                if (!formData.city) {
                                  newErrors.city = 'City is required';
                                } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
                                  newErrors.city = 'Enter a valid city name';
                                }
                                if (!formData.state) {
                                  newErrors.state = 'State is required';
                                } else if (!/^[A-Za-z\s]+$/.test(formData.state)) {
                                  newErrors.state = 'Enter a valid state name';
                                }
                                if (!formData.pincode) {
                                  newErrors.pincode = 'Pincode is required';
                                } else if (!/^\d+$/.test(formData.pincode)) {
                                  newErrors.pincode = 'Pincode must contain only digits';
                                } else if (formData.pincode.length !== 6) {
                                  newErrors.pincode = 'Pincode must be 6 digits';
                                }
                            
                                setErrors(newErrors);
                                return Object.keys(newErrors).length === 0;
                              };
                                const handleSubmit = async (e) => {
                                e.preventDefault();
                                if (validate()) {
                                  try {
                                    // const response = await fetch('http://localhost:8080/api/initiate-payment', {
                                    //   method: 'POST',
                                    //   headers: { 'Content-Type': 'application/json' },
                                    //   body: JSON.stringify(formData),
                                    // });
                                    const response = await PaymentGatewayApi(formData);
                                    //const html = await response.text();
                                    // Open payment form in a new tab
                                    //const win = window.open('', '_blank');
                                    const win = window.open('', '_blank');
                                    win.document.write(response);
                                    win.document.close();
                                  } catch (err) {
                                    console.error('Payment initiation error:', err);
                                  }
                                }
                              };
                              
    
    return(
    <>
    <Header/>
     <div className="payment_maathagi_div"></div>
<div className='paytm'>

<div className='payment_heading'>
       <h2>ACCOUNT DETAILS</h2>
       <div class="line_payss"></div>
    </div>
     <div className='payment_gatway_new_div'>
          <div className='payment_gatway_text'>
            <h2>Click Here to pay using credit card</h2>
            {/* <div className='payment_gatway_button'>
            <button onClick={handlePopup}>Pay Now</button>
          </div> */}
        
<button class="button" style={{ "--clr": "#00ad54" }} onClick={handlePopup}>
    <span class="button-decor"></span>
    <div class="button-content">
        <div class="button__icon">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="24">
                <circle opacity="0.5" cx="25" cy="25" r="23" fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"></circle>
                <mask id="icon-payments-cat_svg__a" fill="#fff">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z">
                    </path>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z" fill="#fff"></path>
                <path d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z" fill="#fff" mask="url(#icon-payments-cat_svg__a)"></path>
                <defs>
                    <linearGradient id="icon-payments-cat_svg__paint0_linear_1141_21101" x1="25" y1="2" x2="25" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" stop-opacity="0.71"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <span class="button__text">Payments</span>
    </div>
</button>
          </div>
          {showPopup && (
          <div className='popup_overlay'>
            <div className='popup_form'>
              <h3>Proceed Your Payment</h3>
              <form onSubmit={handleSubmit}>
              <div className='gatway_input_div'>
                <div className='gatway_input_div_1'>
                    <div className='gatway_input_div_2'>
                      <input name="amount" type="text" placeholder='Amount' value={formData.amount} onChange={handleChange}/>
                      {errors.amount && <span className='error'>{errors.amount}</span>}
        
                      <input name="name" type="text" placeholder='Name' value={formData.name} onChange={handleChange} />
                      {errors.name && <span className='error'>{errors.name}</span>}
                      <input name="mobile" type="text" placeholder='Mobile' value={formData.mobile} onChange={handleChange} />
                      {errors.mobile && <span className='error'>{errors.mobile}</span>}
                      <input name="email" type="text" placeholder='Email' value={formData.email} onChange={handleChange} />
                      {errors.email && <span className='error'>{errors.email}</span>}
                      <input name="country" type="text" placeholder='Country' value={formData.country} onChange={handleChange} />
                      {errors.country && <span className='error'>{errors.country}</span>}
                      </div>
                      <div className='gatway_input_div_3'>
                      <textarea name="address" placeholder='Address' value={formData.address} onChange={handleChange} />
                      {errors.address && <span className='error'>{errors.address}</span>}
                      <input name="city" type="text" placeholder='City' value={formData.city} onChange={handleChange} />
                      {errors.city && <span className='error'>{errors.city}</span>}

                      <input name="state" type="text" placeholder='State' value={formData.state} onChange={handleChange} />
                      {errors.state && <span className='error'>{errors.state}</span>}

                      <input name="pincode" type="text" placeholder='Pincode' value={formData.pincode} onChange={handleChange} />
                      {errors.pincode && <span className='error'>{errors.pincode}</span>}
          
                      </div>
                  </div>
                  </div>
                  <div className='popup_buttons'>
                  <button type='submit'>Submit</button>
                  <button type='button' onClick={handleClose}>Close</button>
                </div>
            </form>
            </div>
          </div>
        )}
        </div> 
        <br></br>
    <div className='payment_card_and_qr_div'>
    <div className='payment_card_main_div'> 
    {details.length === 0 ? (
            <p>Loading bank details...</p>
          ) : (
            details.map((detail, index) => (
    <div key={index} className='payment_card_div'>
    <div class="payment_card_div_1">
    <h2> {detail.bank_name}</h2>
    <div class="line_pay"></div>
    <p><label>Account Name</label>: {detail.account_name}</p>
    <p><label>Account Number</label>: {detail.account_number}</p>
    <p><label>IFSC</label>:  {detail.ifsc}</p>
    <p><label>Branch</label>: {detail.branch}</p>
</div>
</div>
            ))
          )}
        </div>
         <div className='payment_OR_pic_add'>
        <h2>UPI QR CODE</h2>
        <div class="line_pay_qr"></div>
        
        {images.length > 0 ? (
          
              <img
                src={`${axios.defaults.baseURL}${images[0].image_url}`}
                alt="QR"
              />
            ) : (
              <p>No QR code available.</p>
            )}
        </div>
        </div>
        </div>
        <Footer/>
    </>
    )
}

export default Payment 
