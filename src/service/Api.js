import axios from 'axios';

axios.defaults.baseURL= "https://maathangibackend.seataxi.in/backend/";
 //axios.defaults.baseURL="http://localhost:8080/maathagi-backend/";


 const REGISTER_URL_LOGIN ="Login";
 const UPDATE_PASSWORD_URL ="update_password";
 const CONTACT_API_URL ="add_contactus";
 const VIEW_URL_VIEW_DETAILS = "View_details";
 const DELETE_DETAIL_API_URL = "contact_delete";
 const UPDATE_CONTACT_API_URL = "update_rewrite";


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