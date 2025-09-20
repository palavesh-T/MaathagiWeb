import React, { useState, useEffect } from 'react';
import "../Admin/assete/css/contactdeatils.css";
import Adminheader from "./Adminheader";
import { ViewDetailsApi , deleteDetailApi, updateContactApi} from '../service/Api';
import Adminfooter from './Adminfooter';
//import moment from 'moment-timezone';


const Contactdetails = () =>{

        const [details, setDetails] = useState([]);
        const [showPopup, setShowPopup] = useState(false);
        const [detailToDelete, setDetailToDelete] = useState(null);
        const [editMessages, setEditMessages] = useState({});
        const [editMode, setEditMode] = useState({});

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

const handleEditClick = (id) => {
  setEditMode(prev => ({ ...prev, [id]: true }));

  setEditMessages(prev => ({ ...prev, [id]: details.find(d => d.id === id)?.rewrite || "" }));
};

   const handleEditChange = (id, value) => {
        setEditMessages(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = async (id) => {
        try {
            const newMessage = editMessages[id];
            if (!newMessage || newMessage.trim() === "") {
                alert("rewrite cannot be empty");
                return;
            }

            const response = await updateContactApi(id, newMessage);
            if (response && response.status) {
                
                setDetails(prevDetails =>
                    prevDetails.map(item =>
                        item.id === id ? { ...item, message: newMessage } : item
                    )
                );
                 setEditMode(prev => ({ ...prev, [id]: false }));
                 setEditMessages(prev => ({ ...prev, [id]: "" }));
                alert("rewrit updated successfully!");
            } else {
                alert("Failed to update message");
            }
        } catch (error) {
            console.error("Error updating message:", error);
        }
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
               <th>Remark</th>
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
            <td>
                             {editMode[item.id] ? (
                              <>
                                  <textarea
                                            value={editMessages[item.id] || ""}
                                            onChange={(e) => handleEditChange(item.id, e.target.value)}
                                            placeholder="Rewrite message"
                                            style={{ width: '100px', height: '60px',resize: 'none',overflow: 'auto' }}
                                        />
                                         <br />
                                        <button type="button"
                                            onClick={() => handleSave(item.id)}
                                            style={{ backgroundColor: 'blue', color: 'white', padding: '4px 4px', marginTop: '5px' }}
                                        >
                                            Save
                                        </button>
                                        
                                    </>
                                ) : (
                                  <>
                                  <div
                                      style={{
                                        width: '100px',
                                        height: '50px',
                                        overflow: 'auto',       
                                        whiteSpace: 'pre-wrap',  
                                        wordBreak: 'break-word', 
                                        border: '1px solid #ddd', 
                                        padding: '2px', fontSize:"12px"
                                      }}
                                    >
                                      {item.rewrite || "N/A"}
                                    </div>
                                    <br />
                                    <button type="button"
                                      onClick={() => handleEditClick(item.id)}
                                      style={{ backgroundColor: 'orange', color: 'white', padding: '4px 8px', marginTop: '5px' }}
                                    >
                                      Edit
                                    </button>
                                  </>
                                )}
                              </td>
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