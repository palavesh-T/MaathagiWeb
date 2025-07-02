import React from "react";
import "../assete/css/privacy.css";
import Header from "./Header";
import Footer from "./Footer";


const Privacypolicy = () =>{

    return(
        <>
        <Header/>
        <div className="privacy_maathagi_div"></div>

        <div className="privacy_policay_main_div">
            <div className="privacy_policay_main_div_1">
                <h2>Privacy Policy</h2>
                <p>Your information is used by us to deliver and enhance the service. You consent to the collection and use of information in line with this policy by using the Service. Terms used in this Privacy Policy, unless otherwise specified, have the same meanings as those found in our Terms & Conditions, which are available at www.maathangi.com. Data protection laws in other countries may differ from those in your state, province, country, or other government entity where your data, including personal data, may be moved to and stored.</p>
                <p>Please be advised that we will transfer and process your data, including personal data, in India if you would want to furnish us with information while you are not in India.</p>
                <p>Your input of this information and acceptance of this privacy policy constitute your assent to this transfer.</p>
                <p>The security of your data and other personal information is of the utmost importance to maathangi, and we will take every precaution to protect it. Rest assured that your personal information will never be transferred to any other organization or country without proper controls in place.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Privacypolicy