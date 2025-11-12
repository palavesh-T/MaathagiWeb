import React, { useState } from 'react';
import "../Admin/assete/css/bankdetails.css";
import Adminheader from "./Adminheader";
import { Link } from 'react-router-dom';
import { BankDetailsApi } from '../service/Api';

const Bankdetails = () =>{
      const [formData, setFormData] = useState({
            bank_name: '',
            account_name: '',
            account_number: '',
            ifsc: '',
            branch: '',
           
          });
          const [errorMessage, setErrorMessage] = useState('');
          const [successMessage, setSuccessMessage] = useState('');
        
          const handleChange = (e) => {
            const { id, value } = e.target;
          
          if (id === "bank_name") {
            const onlyLetters = /^[A-Za-z\s]+$/;
            if (!onlyLetters.test(value)) {
              setFormData({ ...formData, [id]: '' }); 
              return;
            } 
          }
          if (id === "account_number") {
            const onlyNumbers = /^[0-9]*$/;
            if (!onlyNumbers.test(value)) {
              setErrorMessage("Account number should contain only numbers.");
              return;
            } else if (value.length > 18) {
              setErrorMessage("Account number cannot exceed 18 digits.");
              return;
            }else if (value.length > 0 && value.length < 9) {
              setErrorMessage("Account number must be at least 9 digits.");
              setFormData({ ...formData, [id]: value });
              return;
            }
            setErrorMessage(""); // Clear error message
          }
        
          setFormData({ ...formData, [id]: value });
        };
      
        
          const handleSubmit = async () => {
            if (
                 formData.bank_name.trim() === '' ||
                formData.account_name.trim() === '' ||
                formData.account_number.trim() === '' ||
                formData.ifsc.trim() === '' ||
                formData.branch.trim() === '' 
                
              ) {
               
          return;
        }
        
                     try {       
                        console.log("data ",formData );
                     const response = await BankDetailsApi(formData);
                     console.log('Form data saved:', response.data);
                     setSuccessMessage(' submitted successfully!');
                     setFormData({
                      bank_name:'',
                        account_name: '',
                        account_number: '',
                        ifsc: '',
                        branch: ''

                     });
                     setTimeout(() => {
                        setSuccessMessage('');
                        setErrorMessage('');
                      }, 2000);
                    } catch (error) {
                        console.error('Error submitting form:', error);
                        setErrorMessage('Failed to submit bank details.');
                      }
          };
          

    return(
        <>
         <div className='body-div'>
        <Adminheader/>
        <div className='container_dashboard'>
        <div className='index-content'>
           
            <div className='dashboard_main_div '>
            <div className='dashboard_div_bank'>
               <div className='btn_bank_new'>
                        <button><Link to="/Viewbankdetails">View Bank Details</Link></button>
                      </div>
                      <div className='add_bank_conts'>
                       <h2>Add Bank Details</h2>
                       </div>
                <div className='bankdetails_main_details'>
                    <div className='bankdetails_1'>
                    <h2>Bank Name</h2>
                    <input type="text" id="bank_name" placeholder='Enter your Bank Name' value={formData.bank_name} onChange={handleChange}/>
                            <h2>Account Name</h2>
                            <textarea type="text" id="account_name" placeholder='Enter your Account Name' value={formData.account_name} onChange={handleChange}/>
                            <h2>Account Number</h2>
                            <input type="text" id="account_number"placeholder='Enter your Account Number' value={formData.account_number} onChange={handleChange}/>
                            {errorMessage && <p className="error">{errorMessage}</p>}
                            <h2>IFSC</h2>
                            <input type="text" id="ifsc" placeholder='Enter your IFSC' value={formData.ifsc} onChange={handleChange}/>
                            <h2>Branch</h2>
                            <input type="text" id="branch" placeholder='Enter your Branch' value={formData.branch} onChange={handleChange}/>
                            <div className='bank_btn'>
                             <button onClick={handleSubmit}>Submit</button>
                            </div>
                           
                            
          {successMessage && <p className="success">{successMessage}</p>}
        </div>
                    </div>
                </div>

                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Bankdetails