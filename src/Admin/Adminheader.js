import React from "react";
import { Link } from "react-router-dom";
import "../Admin/assete/css/adminheader.css";
import adminlogo from "../Admin/assete/image/logoi 1.png";

const Adminheader = () =>{

    return(
        <>
          <div className="admin-header">
      <div className="admin-header-left">
        <img src={adminlogo} alt="Logo" className="admin-logo" />
      </div>
      <div className="admin-header-right">
          <Link to="/Contactdetails" className="admin-menu">Contact Details</Link>
        <Link to="/Changepassword" className="admin-menu">Change Password</Link>
        <Link to="/Admin" className="admin-menu">Logout</Link>
      </div>
    </div>
        </>
    )
}
export default Adminheader