import React from "react";
import MetaTitle from '../components/MetaTittle';
import Header from "./Header";
import "../assete/css/service.css";
import { Link } from "react-router-dom";
import web_design from "../assete/about/website design.jpg";
import college_design from "../assete/about/college website.jpg";
import industry_design from "../assete/about/industry.jpg";
import Footer from "./Footer";
import { FaUsers,FaHandshake, FaPiggyBank  } from "react-icons/fa";
import service_pic_2 from "../assete/images/service pic 2.jpg";

const Service = () =>{

    return(
        <>
          <MetaTitle title={"Service | "} />
                      <meta name="description" content="MAATHANGI provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
        <Header/>
        <div className="service_maathagi_div"></div>

        <div className="service_maathagi_new_design_div">
            <div className="service_maathagi_new_design_div_1">
                <div className="service_maathagi_new_design_div_2">
                    <h2>High-Quality Work Experiences</h2>
                </div>
                <div className="service_maathagi_new_design_div_3">
                    <p>Welcome to Sea Sense Research, where we empower scholars with expert support and guidance. Our services include research proposal development, literature review assistance, data analysis, manuscript preparation and academic coaching.</p>
                </div>
                <div className="service_maathagi_new_design_div_4">
                    <button>Contact</button>
                    </div>
            </div>
        </div>

        <div className="maathagi_service_div">
            <div className="maathagi_service_div_1">
                <div className="maathagi_service_div_3">
                <div className="maathagi_service_div_2">
                    <h2>Solutions</h2>
                    <button><Link to="#">Topic Selection</Link></button>
                    <button><Link to="#">Probem Identification</Link></button>
                    <button><Link to="#">Literature Survey</Link></button>
                    <button><Link to="#">Data Collection</Link></button>
                    <button><Link to="#">Implementation</Link></button>
                    <button><Link to="#">Manuscript Preparation</Link></button>
                    <button><Link to="#">Synopsis Writing</Link></button>
                    <button><Link to="#">Journal/Conference Publication</Link></button>
                    <button><Link to="#">Thesis writing</Link></button>
                    <button><Link to="#">Language Polishing</Link></button>
                    <button><Link to="#">Document Editing/ Formatting</Link></button>
                </div>
            </div>
            <div className="maathagi_service_div_4">
                <div className="maathagi_service_div_5">
                    <h2>Research & Development</h2>
                    <p>It is considered very important for a research student or research scholar to prove their research skills to the doctoral committee through paper work. Here comes the professional support from MAATHANGI in writing the PhD doctoral thesis work in the way that how University / committee expects. A Doctorate in Philosophy (PhD or DPhil) is one of the highest academic degrees next to Masters. In order to conduct research in an area, PhD researchers require deep knowledge in their interest areas and the working experience on research problem. Our PhD doctorate thesis writing services
                        </p>
                        <h2>Why Us?</h2>
                        <p>MAATHANGI has a strong foundation and ability in undertaking the research and analysis work with a network of doctorate and research guides who would assist in completion of PhD /doctorate /DBA and its related services. Our team comprised of experienced professors, young and dynamic researchers, relevant subject matter expertise, industry professionals who provide continuous support to understand the real world situation, research methodologists, data collection team (both online and offline) statistician team (including econometrician, biostatistician), developers, copy editors (including manuscript editors) and proof readers (manuscript proof readers/thesis proof readers), and formatting and referencing team.
                        </p>
                </div>
            </div>
        </div>
        </div>

        <div className="about_maathagi_web_design">
            <div className="about_maathagi_web_design_1">
                <div className="about_maathagi_web_design_2">
                    <div className="about_maathagi_web_design_3">
                        <img src={web_design} alt="" />
                       
                    </div>
                     <div className="about_maathagi_web_design_4">
                        <h2>Personal Website</h2>
                        </div>
                </div>
                 <div className="about_maathagi_web_design_2">
                    <div className="about_maathagi_web_design_3">
                        <img src={college_design} alt="" />
                       
                    </div>
                    <div className="about_maathagi_web_design_4">
                        <h2>College & School Website</h2>
                        </div>
                </div>
                 <div className="about_maathagi_web_design_2">
                    <div className="about_maathagi_web_design_3">
                        <img src={industry_design} alt="" />
                    </div>
                    <div className="about_maathagi_web_design_4">
                        <h2>Industrial Website</h2>
                        </div>
                </div>
            </div>
        </div>

        <div className="maathagi_new_design_project">
            <div className="maathagi_new_design_project_1">
                <div className="maathagi_new_design_project_2">
                    <div className="maathagi_new_design_project_3">
                       <FaUsers  className="consult-icon" />
                    </div>
                    <div className="maathagi_new_design_project_4">
                        <h2>Expert Team</h2>
                        <p>Our team comprises industry professionals with years of experience.
We bring deep technical knowledge and creative problem-solving.</p>
                    </div>
                </div>
                <div className="maathagi_new_design_project_2">
                    <div className="maathagi_new_design_project_3">
                     < FaHandshake className="consult-icon" />
                    </div>
                    <div className="maathagi_new_design_project_4">
                        <h2>Free Consultation</h2>
                        <p>We offer a no-obligation consultation to understand your needs.
Speak directly with our experts to explore the best solutions.</p>
                    </div>
                </div>
                <div className="maathagi_new_design_project_2">
                    <div className="maathagi_new_design_project_3">
                      <FaPiggyBank  className="consult-icon"/>
                    </div>
                    <div className="maathagi_new_design_project_4">
                        <h2>Lowest Cost</h2>
                        <p>We deliver high-quality services at the most competitive prices.
Our streamlined processes help reduce unnecessary expenses.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="new_service_maathagi_div">
            <div className="new_service_maathagi_div_1">
                <h2>Project Result & Benefits of Project</h2>
                <p>Our project delivers measurable results aligned with your goals.Experience improved efficiency, performance, and outcomes.Custom solutions ensure lasting value beyond implementation.We focus on both immediate impact and long-term gains.Your success is the ultimate benefit of our work.</p>
            </div>
            <div className="new_service_maathagi_div_2">
                <img src={service_pic_2} alt=""/>
            </div>
        </div>

        <div className="about_maathagi_background_pic_div">
            <div className="about_maathagi_background_pic_div_1">
                <div className="about_maathagi_background_pic_div_2">
                    <h2>Experience</h2>
                    <p> Our team heads have rich experience in the field of research for more than 15 years especially in the development of questionnaire, research design, quantitative and qualitative study designs, and statistical analysis. The technical heads will guide you through your research journey and drive you to achieve your PhD completion dream. There is complete support at every stage from the identification of PHD topic to the final document.</p>
                    <h2>PhD thesis writing services from MAATHANGI</h2>
                    <p>MAATHANGI guide you for complete PhD doctorate thesis services such as</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Service