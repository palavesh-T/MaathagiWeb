import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Admin/assete/css/viewbankdetails.css";
import Adminheader from "./Adminheader";
import { ViewBankDetailsApi , deleteBankDetailsApi, updateBankDetailsApi } from '../service/Api';

const Viewbankdetails =() =>{

     const [details, setDetails] = useState([]);
         const [showAll, setShowAll] = useState(false);
         const [editId, setEditId] = useState(null); 
         const [editedData, setEditedData] = useState({});
         
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
    
           const toggleShowAll = () => {
            setShowAll(!showAll);
          };
    
          const handleDelete = async (id) => {
            const confirmed = window.confirm("Are you sure you want to delete this bank detail?");
            if (!confirmed) return;
        
            try {
              await deleteBankDetailsApi(id); // Call the delete API
              setDetails((prevDetails) => prevDetails.filter((detail) => detail.id !== id)); // Update state
              //alert("bank detail deleted successfully!");
            } catch (error) {
              console.error("Error deleting bank detail:", error);
              alert("Failed to delete the bank detail. Please try again.");
            }
          };
    
          const handleEdit = (id, data) => {
            setEditId(id);
            setEditedData(data); // Pre-fill input fields with existing data
          };
        
          const handleInputChange = (field, value) => {
            setEditedData((prevData) => ({
              ...prevData,
              [field]: value,
            }));
          };
        
          const handleUpdate = async (id) => {
            try {
              await updateBankDetailsApi(id, editedData); // Call API to update the data
              setDetails((prevDetails) =>
                prevDetails.map((detail) =>
                  detail.id === id ? { ...detail, ...editedData } : detail
                )
              );
              alert("bank detail updated successfully!");
              setEditId(null); // Exit edit mode
            } catch (error) {
              console.error("Error updating bank detail:", error);
              alert("Failed to update the bank detail. Please try again.");
            }
          };
        
        
          // Determine the cards to display
          const firstThreeCards = details.slice(0, 3);
          const remainingCards = details.slice(3);
        
          const unreadCount = details.filter(detail => detail.readed !== "read").length;

    return(
        <>
         <div className='body-div'>
  <Adminheader unreadCount={unreadCount}/>
  <div className='container_dashboard'>
  <div className='index-content'>
  
    <div className='dashboard_main_div '>
    <div className='dashboard_div_1_bank'>
        <div className='btn_bank'>
          <button><Link to="/Bankdetails">Add Bank Details</Link></button>
        </div>
        <div className='krejbgjk'>
            <h2> Bank Details</h2>
        </div>
    <div className='view_dtls_main_div_bank'>
        
    {firstThreeCards.map((detail, index) => (    
                    <div className='view_dlts_div_1_bank' key={index}>
                      <div className='view_div_min_bank'>
                        <div className='view_dtls_card_div_bank'>
                        <button  onClick={() => handleDelete(detail.id)} className="delete_btn_bank">x</button>
                        {editId === detail.id ? (
                <>
                  <input
                    value={editedData.bank_name || ""}
                    onChange={(e) => handleInputChange("bank_name", e.target.value)}
                    placeholder="bank_name"
                  />
                  <textarea
                    value={editedData.account_name || ""}
                    onChange={(e) => handleInputChange("account_name", e.target.value)}
                    placeholder="account_name"
                  />
                  <input
                    value={editedData.account_number || ""}
                    onChange={(e) => handleInputChange("account_number", e.target.value)}
                    placeholder="account_number"
                  />
                  <input
                    value={editedData.ifsc || ""}
                    onChange={(e) => handleInputChange("ifsc", e.target.value)}
                    placeholder="ifsc"
                  />
                  <input
                    value={editedData.branch || ""}
                    onChange={(e) => handleInputChange("branch", e.target.value)}
                    placeholder="branch"
                  />
                  <button onClick={() => handleUpdate(detail.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z"></path></svg></button>
                  <button onClick={() => setEditId(null)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg></button>
                </>
              ) : (
                <>
                        <h2><label>Bank Name</label>: {detail.bank_name}</h2>
                    <h2><label>Account Name</label>: {detail.account_name}</h2>
                    <h2><label>Account Number</label>: {detail.account_number}</h2>
                    <h2><label>IFCS</label>: {detail.ifsc}</h2>
                    <h2><label>Branch</label>: {detail.branch}</h2>
                    <button onClick={() => handleEdit(detail.id, detail)} className='edit_btn'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg></button>
                    </>
              )}
            </div>
          </div>
          </div>
        ))}
        </div>
            {remainingCards.length > 0 && (
        <div className="view_remaining_dtls">
          <div className={`view_dtls_main_div_bank ${showAll ? "expanded" : "collapsed"}`}>
            {showAll &&
              remainingCards.map((detail, index) => (
                <div className="view_dlts_div_1_bank" key={index}>
                  <div className="view_dtls_card_div_bank">
                  {editId === detail.id ? (
        <>
                   <input
            value={editedData.bank_name || ""}
            onChange={(e) => handleInputChange("bank_name", e.target.value)}
            placeholder="bank Name"
          />
          <textarea
            value={editedData.account_name || ""}
            onChange={(e) => handleInputChange("account_name", e.target.value)}
            placeholder="account_name"
          />
          <input
            value={editedData.account_number || ""}
            onChange={(e) => handleInputChange("account_number", e.target.value)}
            placeholder="account_number"
          />
          <input
            value={editedData.ifsc || ""}
            onChange={(e) => handleInputChange("ifsc", e.target.value)}
            placeholder="ifsc"
          />
          <input
            value={editedData.branch || ""}
            onChange={(e) => handleInputChange("branch", e.target.value)}
            placeholder="branch"
         />
          <button onClick={() => handleUpdate(detail.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z"></path></svg></button>
          <button onClick={() => setEditId(null)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg></button>
        </>
      ) : (
        <>
          <h2><label>Bank Name</label>: {detail.bank_name}</h2>
          <h2><label>Account Name</label>: {detail.account_name}</h2>
          <h2><label>Account Number</label>: {detail.account_number}</h2>
          <h2><label>IFSC</label>: {detail.ifsc}</h2>
          <h2><label>Branch</label>: {detail.branch}</h2>
          <button onClick={() => handleDelete(detail.id)} className="delete_btn_bank">x</button>
          <button onClick={() => handleEdit(detail.id, detail)} className="edit_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
            </svg>
          </button>
        </>
      )}
    </div>
  </div>
))}
          </div>
          <div className="show_more_div_bank">
            <button onClick={toggleShowAll} className="show_more_btn">
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
    </div>
 
  </div>
        
        </>
    )
}
export default Viewbankdetails