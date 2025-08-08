import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaTitle from '../components/MetaTittle';
import "../assete/css/home.css";
import Header from "./Header";
import maathagi_1 from "../assete/homepage/maathagi 1.png";
import "../assete/css/color.css";
import svg_1 from "../assete/SVG/layout-fluid.svg";
import maathgi_2 from "../assete/homepage/maathagi 2.png";
import maathagi_3 from "../assete/homepage/maathagi 3.jpeg";
import maathagi_4 from "../assete/homepage/maathagi 4.png";
import maathagi_5 from "../assete/homepage/maathagi 5.png";
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
                <h1>Helping you with any of your research <span></span><br></br>  needs!</h1>
                  
                
                <p>We provide assistance to our Scholars by selecting reliable, relevant and recent base papers in the specific subject area.</p>

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
    <h2>Topic Selection</h2>
    <p>We enable you to choose a topic that fits within your discipline, and gets approved.</p>
  </div>
</div>
<div className="maathagi_old_design_inpt_4_wrapper">
  <img src={svg_1} alt="icon" className="custom-icon" />
             <div className="maathagi_old_design_inpt_4">
                <h2>Plagiarism Reduction</h2>
                <p>Our quality pedagogy offered by experts will completely transform your paper to total perfection.</p>
            </div>
            </div>
            <div className="maathagi_old_design_inpt_4_wrapper">
  <img src={svg_1} alt="icon" className="custom-icon" />
             <div className="maathagi_old_design_inpt_4">
                <h2>Unlimited Revisions</h2>
                <p>We offer unlimited revisions to the work being committed. We do not charge for the Revisions.</p>
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
                        <p> We are serving more than 250+ Ph.D candidates since 2013. Maathangi Research Solutions specializes in creating and delivering research oriented assignments, varied in nature, with an assurance of on-time delivery and content free from plagiarism. We are providing Academic and PhD Thesis-Research Writing Services globally.</p>
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
                    <h2>Research Needs</h2>
                    <div className="maathagi_new_icon_add">
                        <div className="maathagi_new_icon_add_1">
                            <h4>All Technologies</h4>
                            {/* <h5>Our PhD doctorate thesis writing services.</h5> */}
                        </div>
                    </div>
                    <div className="maathagi_new_dign_sub_card_3">
                        <p> We ensure that your research data, like your concept, collected data, interview transcripts, printed copies of these works, soft copies, research articles and every document related to your research is confidential and strictly handled only for the internal purposes. We have an efficient client service team to assist you  with all your service-related queries. Although it may not appear very special to you, we want to tell you how we differentiate our solutions from what you can receive from any other service provider.</p>
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
                        <h2>Base paper selection</h2>
                        <p>We assist in identifying relevant base papers from reputed journals such as IEEE, Springer, and Elsevier. This helps ensure your research is grounded in current, high-impact studies.</p>
                    </div>
           </div>
           </div>
            <div className="maathagi_new_card_design_back_clr_4">
            <div className="maathagi_new_card_design_back_clr_3">
                    <div className="maathagi_div_pic">
                        <img src={maathagi_4} alt="" />
                    </div>
                    <div className="maathagi_contnts_add">
                        <h2>Research Proposal</h2>
                        <p> We support scholars in refining their research ideas based on current trends, feasibility, and academic relevance. This step ensures that your proposal stands out with a strong foundation.</p>
                    </div>
           </div>
           </div>
           <div className="maathagi_new_card_design_back_clr_4">
            <div className="maathagi_new_card_design_back_clr_3">
                    <div className="maathagi_div_pic">
                        <img src={maathagi_5} alt="" />
                    </div>
                    <div className="maathagi_contnts_add">
                        <h2>Implementation</h2>
                        <p>Before implementation begins, we assist in finalizing the research methodology and selecting the appropriate tools, technologies, or simulation platforms to ensure smooth execution of your research plan.</p>
                    </div>
           </div>
           </div>
        </div>
    </div>
</div>
<div className="phd_good_proposal_tips">
  <h2>Making a Good PhD Research Proposal</h2>
  <p>
    A strong research proposal is the foundation of successful PhD research. It should clearly define your research problem, justify the study’s significance, and demonstrate your understanding of the current literature. A well-structured methodology, realistic timeline, and expected outcomes add credibility and depth.
  </p>
 
</div>
<Footer/>
        </>
    )
}

export default Home