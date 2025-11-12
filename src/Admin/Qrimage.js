import React, { useState, useEffect } from 'react';
import "../Admin/assete/css/qrimage.css";
import Adminheader from "./Adminheader";
import { QrImageApi, ViewQrImagesApi , deleteQrImageApi } from '../service/Api';
import axios from 'axios'; 

const Qrimage =() =>{
      const [QR_image, setImage] = useState(null);
    const [images, setImagesPopup] = useState([]);
    const [, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (images.length > 0) {
          alert('Only one QR image can be uploaded at a time. Please delete the existing image first.');
          return;
      }

        const formData = new FormData();
        formData.append('QR_image', QR_image);
        try {
            const response = await QrImageApi(formData);
            console.log(response);  
            alert('Image uploaded successfully');
            setSuccessMessage('Image uploaded successfully');
            setImage(null);
            fetchImages();

            // Auto-hide success message after 2 seconds
            setTimeout(() => setSuccessMessage(''), 2000);
          } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image');
          }
        };

        const fetchImages = async () => {
            try {
                const data = await ViewQrImagesApi();
                setImagesPopup(data.images|| []);
            } catch (err) {
                setError('Failed to fetch images');
                console.error(err);
            }
        };

        const handleDelete = async (qrImageId) => {
          
            try {
                await deleteQrImageApi(qrImageId);
               
                setImagesPopup(images.filter(image => image.id !== qrImageId));
                alert(' QR Image deleted successfully');
            } catch (err) {
                setError('Failed to delete image');
                console.error(err);
            }
        };


        useEffect(() => {
            fetchImages();
        }, []);


    return(
        <>
         <div className='body-div'>
    <Adminheader/>
    <div className='container_dashboard'>
    <div className='index-content'>
  
    <div className='dashboard_main_div'>
    <div className='dashboard_div_qr'>    
    <div className='qrdetails_main_details'>
    <div className='qrdetails_1'>
        <h2>Add QR Image</h2>
        <input type="file" onChange={handleImageChange} disabled={images.length > 0} />
        <div className='qr_btn'>
            <button onClick={handleSubmit} disabled={images.length > 0}>{images.length > 0 ? 'QR Already Exists' : 'Submit'}</button>
           <p><i><small>Notes: If you wante to change QR please delete previous one</small></i></p>
        </div>
        {successMessage && <p className='success-message'>{successMessage}</p>}
        </div>
        <div className='view_popup_div'>
              <div className='view_popup_div_main'> 
                <h2>View QR</h2>
                <div className='popup_images_grid'>
                {images.length > 0 ? (
                            images.map((image, index) => (
                                <div key={index} className='popup_image_item'>
                                    <img src={ axios.defaults.baseURL+''+image.image_url} alt="QR" />
                                     <button className='delete_btn' onClick={() => handleDelete(image.id)}>X</button> 
                                </div>
                        ))
                      ) : (
                        <p>No QR available. Please upload one.</p>
                    )}
                </div>
            </div>
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
export default Qrimage