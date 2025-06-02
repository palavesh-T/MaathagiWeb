import React, { useState, useEffect } from "react";
import "../Admin/assete/css/admin.css";
import { useNavigate } from 'react-router-dom'; 
import { SignInApi } from "../service/Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

const Admin = () => {


     const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const [passwordVisible, setPasswordVisible] = useState(false);
     const [error, setError] = useState('');
   const navigate = useNavigate(); 


    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            navigate("/Admin"); 
        }
    }, [navigate]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
            const response = await SignInApi({ user_name, password });

            if (response.status === false) {
                console.log("Login failed");
                setError("Invalid username or password");
            } else {
                console.log("Login Successful");
                localStorage.setItem('authenticated', 'true');
                localStorage.setItem('user', user_name); 
                navigate('/Contactdetails'); 
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("Invalid password");
        }
    };


    return(
        <>
          <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          id="user_name"
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
         <div className="form-group" style={{ position: 'relative' }}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                        }}
        />
         <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className="icon"
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '35%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                    />
                    </div>
                    {error && <div style={{ textAlign: 'center', color: 'red', marginTop: '15px' }}>{error}</div>}
                    <br></br>
        <button type="submit"  value="Login">Login</button>
      </form>
       
    </div>
        </>
    )
}
export default Admin