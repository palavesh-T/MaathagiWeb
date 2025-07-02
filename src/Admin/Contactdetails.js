import React, { useState, useEffect } from 'react';
import "../Admin/assete/css/contactdeatils.css";
import Adminheader from "./Adminheader";
import { ViewDetailsApi , deleteDetailApi} from '../service/Api';
import Adminfooter from './Adminfooter';
//import moment from 'moment-timezone';


const Contactdetails = () =>{

      const [details, setDetails] = useState([]);
        const [showPopup, setShowPopup] = useState(false);
        const [detailToDelete, setDetailToDelete] = useState(null);
  

 //const nowInKolkata = moment().tz('Asia/Kolkata');

 //console.log(nowInKolkata.format('YYYY-MM-DD h:m:i'));

    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await ViewDetailsApi();
                    if (response && response.contact_details) {
                        setDetails(response.contact_details.reverse());
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, []);
    
        const handleDelete = async () => {
            try {
                await deleteDetailApi(detailToDelete);
                setDetails(details.filter(detail => detail.id !== detailToDelete));
                setShowPopup(false);
            } catch (error) {
                console.error('Error deleting detail:', error);
            }
        };
    
        const openDeletePopup = (id) => {
            setDetailToDelete(id);
            setShowPopup(true);
        };
    
        const closeDeletePopup = () => {
            setShowPopup(false);
        };

         // Add these functions inside your component (before the return statement)
const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
};

// const formatTime = (timeString) => {
//     if (!timeString || typeof timeString !== 'string') return 'N/A';
//     const parts = timeString.split(':');
//     if (parts.length < 2) return 'N/A'; 
//     const [hours, minutes] = parts;
//     const hour = parseInt(hours, 10);
//     if (isNaN(hour)) return 'N/A';
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const hour12 = hour % 12 || 12;
//     return `${hour12}:${minutes.padStart(2, '0')} ${ampm}`;
// };


    return(
        <>
        <Adminheader/>
         <div className="contact-container">
        <h2>Contact Details</h2>
        <table className="contact-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Date</th>
              {/* <th>Time</th> */}
            <th>Delete</th> 
            </tr>
          </thead>
          <tbody>
            
              {details.length > 0 ? (
  details.map((item, index) => (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.service_type}</td>
      <td style={{ maxWidth: '300px', maxHeight: '100px', overflow: 'auto' }}>{item.message}</td>
      <td>{formatDate(item.date)}</td>
      {/* <td>{formatTime(item.time)}</td> */}
       <td><button onClick={() => openDeletePopup(item.id)}>Delete</button></td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="9">No contact details found.</td>
  </tr>
)}
          </tbody>
        </table>
      </div>
      {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h3>Are you sure you want to delete?</h3>
                        <div className="popup-buttons">
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={closeDeletePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <Adminfooter/>
        </>
    )
}

export default Contactdetails