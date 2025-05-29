import React from "react";
import Header from "./Header";
import "../assete/css/about.css";
import about_maathagi from "../assete/SVG/badge-check.svg";
import about_maathagi_1 from "../assete/about/maathagi about.jpg";
import puzzle_pic_1 from "../assete/about/puzzle_228431.png";
import high_abot from "../assete/about/inovation.png";
import user_abt from "../assete/about/intraction (1).png";
import add_ab_pic_2 from "../assete/about/16.jpg";
import Footer from "./Footer";
const About = () =>{

    return(
        <>
        <Header/>
            <div className="maathagi_about_div">

            </div>
            <div className="maathagi_about_div_1">
                <div className="maathagi_about_div_2">
                    <div className="maathagi_about_div_3">
                        <h2>Creative solutions</h2>
                        <h3>Research Needs</h3>

                        <div className="maathagi_about_div_4">
                            <div className="maathagi_about_div_5">
                                <img src={about_maathagi} alt="" />
                            </div>
                            <div className="maathagi_about_div_6">
                                <h1>All Technologies</h1>
                                <p>Our PhD doctorate thesis writing services.</p>
                            </div>
                        </div>
                        <p>We ensure that your research data, like your concept, collected data, interview transcripts, printed copies of these works, soft copies, research articles and every document related to your research is confidential and strictly handled only for the internal purposes. We have an efficient client service team to assist you 24×7 with all your service-related queries. Although it may not appear very special to you, we want to tell you how we differentiate our solutions from what you can receive from any other service provider.</p>
                    </div>
                    <div className="maathagi_about_div_7">
                        <img src={about_maathagi_1} alt="" />
                    </div>
                </div>

            </div>


            {/*old web design */}

              <div className='back_stage_view_div'>
            <div className='back_stage_view_div_1'>
               <div className='cont_over'>
                <h3  >WE ARE ALWAYS BEST</h3>
               
               </div>
               <div className='adbout_add_card_div'>
                <div className='adout_add_card_div_1'>
                    <div className='adbu_fl_card_div'>
                    <div className='about_card_1'>
                        <div className='about_card_2'  >
                            <img src={puzzle_pic_1} alt="" />
                        </div>
                        <div className='abou_cont_div_cot'>
                            <h2>Topic selection</h2>
                            <p>Choosing the right topic is the first step in any successful project or research. It should align with your interests and the goals of your study or work.</p>
                        </div>
                    </div>
                    <div className='about_card_1'>
                        <div className='about_card_2'>
                            <img src={high_abot} alt="" />
                        </div>
                        <div className='abou_cont_div_cot'>
                            <h2>Problem identification</h2>
                            <p>Identifying the problem is a crucial step in any problem-solving process. It involves understanding the issue clearly and recognizing its impact.</p>
                        </div>
                    </div>
                    <div className='about_card_1'>
                        <div className='about_card_2' >
                            <img src={user_abt} alt="" />
                        </div>
                        <div className='abou_cont_div_cot'>
                            <h2>Implementation</h2>
                            <p>Implementation is the process of putting plans and ideas into action. It involves executing strategies using the available tools and resources.</p>
                        </div>
                    </div>
                    </div>
                    <div className='add_about_pic_div'>
                    <img src={add_ab_pic_2} alt="" />
                </div>
                </div>
               
               </div>
            </div>
        </div>

        {/*old design close*/}
        <div className="about_new_contents">
            <div className="about_new_contents_1">
                <h1>maathagi info research solution</h1>
                <p>we are furnishing individuals in all technologies and domains by fulfilling their desires in Research & Development sector through efficient training methodologies.</p>
            </div>
        </div>

        <div className="about_maathagi_card_div">
            <div className="about_maathagi_card_div_1">
                 <div className="about_maathagi_card_div_2">
                    <div className="about_maathagi_card_div_3">
                    <h2>WHO WE ARE</h2>
                    <p>We are serving more than 250+ Ph. D candidates since 2013. Maathangi Research Solutions specializes in creating and delivering research oriented assignments, varied in nature, with an assurance of on-time delivery and content free from plagiarism. We are providing Academic and PhD Thesis-Research Writing Services globally.</p>
                </div>
                
            </div>
                <div className="about_maathagi_card_div_2">
                    <div className="about_maathagi_card_div_3">
                    <h2>OUR MISSION</h2>
                    <p>Our roadmap starts with our mission. It declares our purpose as a company and serves as the standard against which we weigh our actions and decisions.</p>
                    <p>To create value and make a difference</p>
                    <p>To inspire those who we connect with</p>
                    <p>To provide an undeniable customer service experience</p>
                </div>
                
            </div>
            
             <div className="about_maathagi_card_div_2">
                    <div className="about_maathagi_card_div_3">
                    <h2>OUR VALUES</h2>
                    <p>Our values serve as a compass for our actions and validate how we operate as people and a company.The ability to own a vision and the fortitude to execute that vision.</p>
                    <p>To leverage our collective intellect</p>
                    <p>Being committed inside and out</p>
                    <p>What we do, we do well</p>
                </div>
                
            </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}
export default About