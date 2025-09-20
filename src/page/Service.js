import React from "react";
import MetaTitle from '../components/MetaTittle';
import Header from "./Header";
import "../assete/css/service.css";
import { Link, useNavigate } from "react-router-dom";
import web_design from "../assete/about/website design.jpg";
import college_design from "../assete/about/college website.jpg";
import industry_design from "../assete/about/industry.jpg";
import Footer from "./Footer";
import { FaUsers,FaHandshake, FaPiggyBank  } from "react-icons/fa";
import service_pic_2 from "../assete/images/service pic 2.jpg";

const Service = () =>{

         const navigate = useNavigate();
    
        const phd_peoposal = (path) => {
            navigate(path);
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        };
        

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
                    <p>Welcome to Maathangi IT Solutions, where we empower businesses and individuals with cutting-edge technology services. Our offerings include software development, web and mobile application design, cloud integration, data analytics, cybersecurity solutions, and IT consulting.</p>
                </div>
                <div className="service_maathagi_new_design_div_4">
                    <button onClick={() => phd_peoposal("/Contact")} >Contact</button>
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
                    <h2>Artificial Intelligence & Machine Learning</h2>
                    <p>AI and ML are transforming industries by enabling predictive analytics, automation, and intelligent decision-making. From chatbots to fraud detection, businesses rely on AI for efficiency and innovation. </p>
                    <h2>Web & Mobile App Development</h2>
                    <p>From responsive websites to cross-platform apps, development focuses on performance, user experience, and integration with APIs. Frameworks like React, Angular, and Flutter dominate the market.</p>
                        <h2>Why Us?</h2>
                        <p>MAATHANGI has a strong foundation and expertise in delivering advanced IT solutions and technology-driven projects. Our team consists of experienced software architects, innovative developers, skilled UI/UX designers, data scientists, cybersecurity specialists, cloud engineers, and quality assurance professionals. We also have experts in emerging technologies such as AI, machine learning, IoT, and blockchain, ensuring cutting-edge solutions for diverse business needs. Additionally, our support team provides continuous assistance with project planning, implementation, testing, and deployment to meet real-world industry standards.
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
                <p>Our project delivers measurable results aligned with your goals. Experience improved efficiency, performance, and outcomes. Custom solutions ensure lasting value beyond implementation. We focus on both immediate impact and long-term gains. Your success is the ultimate benefit of our work.</p>
            </div>
            <div className="new_service_maathagi_div_2">
                <img src={service_pic_2} alt=""/>
            </div>
        </div>

        <div className="about_maathagi_background_pic_div">
            <div className="about_maathagi_background_pic_div_1">
                <div className="about_maathagi_background_pic_div_2">
                    <h2>Experience</h2>
                    <p> Our team heads have over 15 years of rich experience in IT, specializing in system design, software development, project management, and data analysis. The technical heads will guide you through your IT journey and drive you to achieve your goals. We provide complete support at every stage, from initial concept to final implementation.</p>
                   
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Service