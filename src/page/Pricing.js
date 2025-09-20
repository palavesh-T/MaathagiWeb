import React from "react"; 
import Header from "./Header";
import "../assete/css/pricing.css";
import python from "../assete/images/python.webp";
import block_chain from "../assete/images/block chain.jpg";
import matlab from "../assete/images/matlab.webp";
import ansys from "../assete/images/ansys 1.jpg";
import cadence from "../assete/images/cadence.png";
import cst from "../assete/images/cst.jpg";
import tanner from "../assete/images/tanner.webp";
import java from "../assete/images/java1.png";
import ns2 from "../assete/images/ns2.png";
import verilog from "../assete/images/verilog.webp";
import comsol from "../assete/images/comsol.png";
import blender from "../assete/images/blender.webp";
import Footer from "./Footer";


const Pricing =() =>{

    return(
        <>
        <Header/>
        <div className="pricing"></div>

          <div className="maathagi_domain_tools">
            <h2>PRICING DETAILS</h2>
          </div>

    <div className="new_tools_topic_div">
            <div className="new_tools_topic_div_1">
                <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={python} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Python</h2>
                            
                              <h1>Python is a powerful, high-level programming language</h1>       
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={block_chain} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Block Chain</h2>
                            <h1>Blockchain is a decentralized, distributed digital ledger technology</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={matlab} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Matlab</h2>
                            <h1>MATLAB (Matrix Laboratory) is a high-performance programming language</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={ansys} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Ansys HFSS</h2>
                            <h1>ANSYS HFSS (High Frequency Structure Simulator) is a leading 3D electromagnetic (EM) simulation software.</h1>
                        </div>
                    </div>
                </div>
            </div>            
              <div className="new_tools_topic_div_1">
                <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={cadence} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Cadence</h2>
                            
                              <h1>Cadence Design Systems is a leading provider of EDA (Electronic Design Automation) tools</h1>       
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={cst} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>CST Studio Suite</h2>
                            <h1>CST Studio Suite (by Dassault Systèmes) is a powerful 3D electromagnetic (EM) simulation software.</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={tanner} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Tanner</h2>
                            <h1>Tanner EDA (by Siemens) is a powerful Electronic Design Automation (EDA) tool used for analog, mixed-signal, MEMS, and IC design.</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={java} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Java</h2>
                            <h1>Java is a powerful, object-oriented, and platform-independent programming language.</h1>
                        </div>
                    </div>
                </div>
            </div>
             <div className="new_tools_topic_div_1">
                <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={ns2} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>NS2 & NS3</h2>
                              <h1>NS2 (Network Simulator 2) and NS3 (Network Simulator 3) are widely used open-source network simulators.</h1>       
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={verilog} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Verilog - (Xilinx and Vivado)</h2>
                            <h1>Verilog HDL (Hardware Description Language) is widely used for digital circuit design and verification.</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={comsol} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Comsol Multiphysics</h2>
                            <h1>COMSOL Multiphysics is a powerful simulation software platform for modeling and solving physics-based problems.</h1>
                        </div>
                    </div>
                </div>
                 <div className="new_tools_topic_div_2">
                    <div className="new_tools_topic_div_3">
                        <img src={blender} alt=""/>
                        <div className="new_tools_conts">
                             <p>Course Duration: 3 Months ₹ 65,000 INR</p>
                            <h2>Blender</h2>
                            <h1>Blender is a free and open-source 3D creation suite used for modeling, animation, rendering, simulation, and video editing.</h1>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <Footer/>
        </>
    )
}

export default Pricing