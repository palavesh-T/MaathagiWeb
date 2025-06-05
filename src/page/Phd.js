import React from "react";
import "../assete/css/phd.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MetaTitle from '../components/MetaTittle';



const Phd = () =>{

    return(
        <>
          <MetaTitle title={"PHD | "} />
                      <meta name="description" content="MAATHANGI provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
        <Header/>
        <div className="phd_maathagi_div"></div>
           <div className="maathagi_phd_div">
            <h2>Our PHD Services</h2>
            </div>
            <div className="maathagi_phd_div_1">
                    <div className="maathagi_phd_div_2">
                        <div className="maathagi_phd_div_3">
                           
                                <h2><Link to="" className="maathagi_phd_button" ><span>Research Topic Selection</span></Link></h2>
                            
                            
                                <h2><Link to="" className="maathagi_phd_button" ><span>Research Proposal</span></Link></h2>
                          
                            
                                <h2><Link to="" className="maathagi_phd_button" ><span>Literature Review</span></Link></h2>
                           
                            
                                <h2><Link to="" className="maathagi_phd_button" ><span>Research Paper Writing</span></Link></h2>
                            
                        </div>
                         <div className="maathagi_phd_div_3">
                           
                                <h2><Link to="" className="maathagi_phd_button"><span>Implementation</span></Link></h2>
                            
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Journal Assistance</span></Link></h2>
                          
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Synopsis Preparation</span></Link></h2>
                           
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Thesis Writing</span></Link></h2>
                            
                        </div>
                         <div className="maathagi_phd_div_3">
                           
                                <h2><Link to="" className="maathagi_phd_button"><span>MatLab Development</span></Link></h2>
                            
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Python Development</span></Link></h2>
                          
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Java Development</span></Link></h2>
                           
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>VLSI Development</span></Link></h2>
                            
                        </div>
                         <div className="maathagi_phd_div_3">
                           
                                <h2><Link to="" className="maathagi_phd_button"><span>S-Edit Development</span></Link></h2>
                            
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>NS-2 & NS-3 Development</span></Link></h2>
                          
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Simulink Development</span></Link></h2>
                           
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>HFSS Development</span></Link></h2>
                            
                        </div>
                         <div className="maathagi_phd_div_3">
                           
                                <h2><Link to="" className="maathagi_phd_button"><span>Plagiarism Checking</span></Link></h2>
                            
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Grammar Checking</span></Link></h2>
                          
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Proof Reading</span></Link></h2>
                           
                            
                                <h2><Link to="" className="maathagi_phd_button"><span>Language correction</span></Link></h2>
                            
                        </div>
                   
                    </div> 
                  
            </div>
          
            <div className="phd_maathagi_content_div">
                <div className="phd_maathagi_content_div_1">
                    <h2>PhD Assistance Services</h2>
                    <p>We specialize in supporting PhD candidates through every stage of their doctoral journey. Whether you need help in formulating a research question, conducting an extensive literature review, or developing a strong research methodology, our expert guidance ensures academic excellence. We assist with data collection and analysis, helping you apply the right research tools and statistical techniques. Our services also cover thesis writing, structuring, and formatting, ensuring clarity and adherence to academic standards. If you're preparing for your dissertation defense, we provide mock sessions and feedback to boost your confidence. Additionally, we support scholars aiming to publish in top-tier journals, assisting with manuscript preparation, peer review response, and submission guidelines.</p>
                </div>
            </div>
        <Footer/>
        </>
    )
   
}

export default Phd
