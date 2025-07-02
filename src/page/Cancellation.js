import React from "react";
import "../assete/css/cancel.css";
import Header from "./Header";
import Footer from "./Footer";


const Cancellation = () => {

    return(
        <>
        <Header/>
        <div className="cancellation_maathagi_div"></div>
        <div className="cancellation_policy_main_div">
            <div className="cancellation_policy_main_div_1">
                <h2>Cancellation Policy</h2>
                <p>Our warranty only covers satisfaction concerns brought on by maathangi; it does not cover changes to your circumstances or mental condition because we are spending money and time, people, technological resources, and effort on your service or document production. We will retain the fee paid on your account until you are prepared to start the service if you need us to pause processing a service.</p>
                <p>We reserve the right to try our best to finish the service before issuing any refunds. If you are not happy with the service, you will be charged a 20% cancellation fee in addition to the earned money and the government cost. The cancellation fee would not be charged in the event of a change of service.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Cancellation