import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaTitle from '../components/MetaTittle';
import "../assete/css/home.css";
import Header from "./Header";
import maathagi_1 from "../assete/homepage/maathagi 1.png";
import "../assete/css/color.css";
import svg_1 from "../assete/SVG/layout-fluid.svg";
import maathgi_2 from "../assete/homepage/maathagi 2.png";
import maathagi_3 from "../assete/homepage/cloud.jpg";
import maathagi_4 from "../assete/homepage/block.webp";
import maathagi_5 from "../assete/homepage/big data.jpg";
import Footer from "./Footer";
const Home = () => {



     const navigate = useNavigate();

    const phd_peoposal = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    };
    

    return(
        <>
          <MetaTitle title=" " />
      <meta name="description" content="MAATHANGI provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
        <Header/>
         <div className='home_div_main'>
        <div className='home_div_add_pic'>
            <div className='homer_cont_divs_over'>
                {/* <h2>Welcome To </h2> */}
            {/* <h4>Sea Sense</h4>  */}
                <h1>Innovative IT Services to Accelerate Your Growth.<span></span><br></br> </h1>
                  
                
                <p>Empowering Your Business with Innovative IT Solutions and Services!.Your Trusted Partner for IT , Development, and Support.</p>

                <div className='hm_bnts'>
                    <button><Link to="/Contact" style={{textDecoration:"none", color: "inherit",border:"none"}} onClick={() => phd_peoposal("/Contact")}>Contact</Link></button>
                </div>
            </div>
        </div>
    </div>

    <div className="maathagi_old_design_inpt">
        <div className="maathagi_old_design_inpt_1">
            <h1>Superior Services</h1>
            <p>We Deliver What We Promise</p>
        </div>
        <div className="maathagi_old_design_inpt_2">
            <div className="maathagi_old_design_inpt_3">
           <div className="maathagi_old_design_inpt_4_wrapper">
  <img src={svg_1} alt="icon" className="custom-icon" />
  
  <div className="maathagi_old_design_inpt_4">
    <h2>Software Development</h2>
    <p>Software development is the process of designing, coding, testing, and maintaining applications or systems to meet user requirements.</p>
  </div>
</div>
<div className="maathagi_old_design_inpt_4_wrapper">
  <img src={svg_1} alt="icon" className="custom-icon" />
             <div className="maathagi_old_design_inpt_4">
                <h2>Networking and Security</h2>
                <p>Networking and Security focuses on connecting systems and protecting data from unauthorized access. It ensures confidentiality, integrity, and availability of information</p>
            </div>
            </div>
            <div className="maathagi_old_design_inpt_4_wrapper">
  <img src={svg_1} alt="icon" className="custom-icon" />
             <div className="maathagi_old_design_inpt_4">
                <h2>Data Science & AI</h2>
                <p>Data Science and Artificial Intelligence (AI) involve analyzing large datasets to extract meaningful insights and automate decision-making.</p>
            </div>
            </div>
            </div>
        </div>
    </div>
        
        <div className="maathangi_home_div">
            <div className="maathangi_home_div_1">
                <div className="maathangi_home_div_2">
                    <img src={maathagi_1} alt="" />
                </div>
                <div className="maathangi_home_div_3">
                    <div className="maathangi_home_div_4">
                        <h1>ABOUT US</h1>
                        <p> We have been delivering innovative IT solutions to over 250+ clients since 2019. Maathangi IT Solutions specializes in developing and implementing cutting-edge technology solutions, tailored to meet diverse business needs, with a commitment to timely delivery and quality assurance. We provide end-to-end services in Software Development, Web & Mobile App Development, Cloud Solutions, and IT Consulting for clients worldwide</p>
                   <div className='rat_tar_lis'>

                        <div className="maathagi_about_more_btn">
                            <div className="maathagi_about_more_btn_1">
                                <button onClick={() => phd_peoposal("/About")} >MORE ABOUT US</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="maathagi_new_text_design">
            <div className="maathagi_new_text_design_1">
                <h1>MAATHANGI <span className="outline-text">INFO RESEARCH</span> AND DEVELOPMENT</h1>
            </div>
        </div>

        <div className="maathagi_new_dign_sub_card">
            <div className="maathagi_new_dign_sub_card_1">
                <div className="maathagi_new_dign_sub_card_2">
                    <h1>creative solutions</h1>
                    {/* <h2>IT Research Needs</h2> */}
                    <div className="maathagi_new_icon_add">
                        <div className="maathagi_new_icon_add_1">
                            <h4>All Technologies</h4>
                            {/* <h5>Our PhD doctorate thesis writing services.</h5> */}
                        </div>
                    </div>
                    <div className="maathagi_new_dign_sub_card_3">
                        <p>We ensure that your project datasuch as source code, application architecture, databases, API keys, design documents, and all related files remains completely confidential and is strictly handled for internal purposes only. Our secure systems and protocols guarantee data privacy and integrity throughout the development lifecycle. We also have a dedicated client support team to assist you with all service-related queries. What sets us apart is our commitment to delivering innovative, secure, and high-quality IT solutions that go beyond what typical service providers offer.</p>
                    </div>
                </div>

                <div className="maathagi_new_dign_sub_card_4">
                    <img src={maathgi_2} alt="" />
                </div>
            </div>
        </div>
<div className="maathagi_new_card_design_back_clr">
    <div className="maathagi_new_card_design_back_clr_1">
         <h2>OUR SERVICES</h2>
        <h3>Comprehensive Solutions For Every Challenge.</h3>
        <div className="maathagi_new_card_design_back_clr_2">
            <div className="maathagi_new_card_design_back_clr_4">
           <div className="maathagi_new_card_design_back_clr_3">
                    <div className="maathagi_div_pic">
                        <img src={maathagi_3} alt="" />
                    </div>
                    <div className="maathagi_contnts_add">
                        <h2>Cloud Computing</h2>
                        <p>Cloud Computing delivers computing resources like storage, servers, and software over the internet, eliminating the need for physical infrastructure. It offers scalability, flexibility, and cost-efficiency for businesses of all sizes.</p>
                    </div>
           </div>
           </div>
            <div className="maathagi_new_card_design_back_clr_4">
            <div className="maathagi_new_card_design_back_clr_3">
                    <div className="maathagi_div_pic">
                        <img src={maathagi_4} alt="" />
                    </div>
                    <div className="maathagi_contnts_add">
                        <h2>Blockchain Technology</h2>
                        <p> Blockchain Technology is a decentralized and distributed ledger system that ensures secure and transparent transactions. It eliminates intermediaries by enabling peer-to-peer transactions with cryptographic security..</p>
                    </div>
           </div>
           </div>
           <div className="maathagi_new_card_design_back_clr_4">
            <div className="maathagi_new_card_design_back_clr_3">
                    <div className="maathagi_div_pic">
                        <img src={maathagi_5} alt="" />
                    </div>
                    <div className="maathagi_contnts_add">
                        <h2>Big Data and Data Analytics</h2>
                        <p>Big Data and Data Analytics involve processing and analyzing massive volumes of structured and unstructured data to uncover insights. It uses advanced tools and frameworks like Hadoop, Spark, and Tableau for storage and visualization.</p>
                    </div>
           </div>
           </div>
        </div>
    </div>
</div>
<div className="phd_good_proposal_tips">
  <h2>Building a Strong IT  and Development Proposal</h2>
  <p>
    A well-structured IT begins with a clear problem statement and defined objectives. Focus on innovative solutions using emerging technologies and modern frameworks. Outline a detailed methodology that includes tools, platforms, and processes.
  </p>
 
</div>  
<Footer/>
        </>
    )
}

export default Home