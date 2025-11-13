import axios from 'axios';

//axios.defaults.baseURL= "https://maathangibackend.seataxi.in/backend/";
//  axios.defaults.baseURL="http://localhost:8080/maathagi-backend/";
//axios.defaults.baseURL="http://localhost:8080/backend/";
axios.defaults.baseURL="https://maathangibackend.maathangi.com/backend/";

 const REGISTER_URL_LOGIN ="Login";
 const UPDATE_PASSWORD_URL ="update_password";
 const CONTACT_API_URL ="add_contactus";
 const VIEW_URL_VIEW_DETAILS = "View_details";
 const DELETE_DETAIL_API_URL = "contact_delete";
 const UPDATE_CONTACT_API_URL = "update_rewrite";
 const Payment_Gateway_URL ="initiate-payment";
 const BANK_DETAILS_API_URL ="bank_details";
 const VIEW_BANK_URL_VIEW_DETAILS ="View_bank_details";
 const DELETE_BANK_DETAILS_API_URL ="view_bank_delete";
 const UPDATE_BANK_DETAILS_API_URL ="update_bank_details";
 const IMAGE_UPLOAD_QR_API_URL ="qr_image";
 const VIEW_URL_QR_IMAGES ="view_qr_images";
 const DELETE_QR_IMAGE_API_URL ="qr_image_delete";



   export const SignInApi= async (data)=>{
    // axios.post(REGISTER_URL, {data:user})
    try {
        const response = await axios.post(REGISTER_URL_LOGIN, data);
        return response.data; 
      } catch (error) {
        throw error;
      }
  }


    
  export const updateConfirmPassword = async (data) => {
    try {
      const response = await axios.post(UPDATE_PASSWORD_URL, data, {    
      });
      console.log('data',response);
      return response.data; 
    } catch (error) {
      throw error;   
    }
  };


  export const ContactusApi= async (data)=>{
    try {
        const response = await axios.post(CONTACT_API_URL, data);
        return response.data; 
      } catch (error) {
        throw error;
      }
  }


    export const ViewDetailsApi = async () => {
    try {
      const response = await axios.get(VIEW_URL_VIEW_DETAILS);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


    export const deleteDetailApi = async (detailId) => {
    console.log("Detail ID: " + detailId); 
    try {
      const response = await axios.delete(`${DELETE_DETAIL_API_URL}/${detailId}`, {     
      });
      console.log('Delete detail response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


    export const updateContactApi = async (id, rewrite) => {
  try {
    const response = await axios.put(`${UPDATE_CONTACT_API_URL}/${id}`, { rewrite });
    return response.data; // Should return { status: true, message: "Message updated successfully" }
  } catch (error) {
    console.error("Error updating contact rewrite:", error);
    return null;
  }
};




export const PaymentGatewayApi= async (data)=>{
  try {
    const response = await axios.post(Payment_Gateway_URL, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' // 👈 tells axios not to parse the response
    });
    return response.data; // this will be the raw HTML string
  } catch (error) {
    throw error;
  }
}


  export const BankDetailsApi = async (data) => {
    try {
      const response = await axios.post(BANK_DETAILS_API_URL, data); 
      return response.data; 
    } catch (error) {
      throw error; 
    }
  };


  
  export const ViewBankDetailsApi = async () => {
    try {
      const response = await axios.get(VIEW_BANK_URL_VIEW_DETAILS);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  
  export const deleteBankDetailsApi = async (careerId) => {
  
    try {
      const response = await axios.delete(`${DELETE_BANK_DETAILS_API_URL}/${careerId}`);
      console.log('Delete bank details response:', response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting bank details:", error);
      throw error;
    }
  };


    
  export const updateBankDetailsApi = async (careerId, updatedData) => {

  
    try {
      const response = await axios.put(`${UPDATE_BANK_DETAILS_API_URL}/${careerId}`, updatedData);
      console.log("Update bank details response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating bank details:", error);
      throw error;
    }
  };



    export const QrImageApi = async (formData) => {
    try {
      const response = await axios.post(IMAGE_UPLOAD_QR_API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data; 
    } catch (error) {
      throw error;
    }
  }


    export const ViewQrImagesApi = async () => {
    try {
      const response = await axios.get(VIEW_URL_QR_IMAGES);
      return response.data; // Return the data from the response
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };



   export const deleteQrImageApi = async (qrImageId) => {

    console.log("Qr Image ID: " + qrImageId);

    try {
        const response = await axios.delete(`${DELETE_QR_IMAGE_API_URL}/${qrImageId}`);
        
        console.log('Delete QR image response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting QR image:", error);
        throw error;
    }
};

