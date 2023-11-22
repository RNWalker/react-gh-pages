import React from "react";
import './/About.css';

export default function About () {
    return (
        <div className="about-container">
            <div id="about-title">
                <h1>ABOUT</h1>
                <div className="software">
                {/* <p>Software done differently</p></div> */}
            </div>
            </div>


            <div className="who-am-i-container">
                
                <div class="text-container">
                    <h3  >WHO AM I?</h3>
                    <h4 class="snippy">Hi, I'm Rebecca</h4>
                    {/* <p>After graduating from medical school in July 2023, 
                    I made a pivotal decision to chart a new course in my life. </p> */}
                    <p> After studying for six years to achieve my medical degree, I decided
                     to break away from the conventional path and pursue a career in tech. </p>
                      <p>What truly ignited my passion was 
                      the prospect of building and creating something innovative. After a competitive application process, I gained a place in the Bright
                       Network Technology Academy, a full-stack
                     tech bootcamp that taught me about both back and front end technologies.</p>
                </div>
                
                
                    <div className="image-moi">
                        <img src="/moi.png" alt="it's me" className="image-size" />
                    
                </div>
            </div>


            <div className="education-container">

             <div className="image-education">
    <img src="/groupphoto.jpeg" alt="it's me" className="image-size" />
  </div>

            <div className="education title">
            <div class="text-container">
                <h3>EDUCATION</h3>
                <h4 class="snippy">From medicine to software</h4>
                <p> 
                    I studied Medicine at Barts and the London School of Medicine and Dentistry, 
                where I worked in hospital and
                GP surgeries, helping diagnose 
                and treat patients. </p>
                
                <p>In 2021, I completed a BSc in Experimental Pathology, working with 
                 keloid scars. I received First Class honours. </p>

                <p>In September 2023, I finished the full stack bootcamp with BNTA. I worked with 
                technologies including Java, Spring, JavaScript and React. 
                </p>
                </div>
                </div>
            </div>

        <div className="work-experience-container">
            <div id="about-work-experience">
            <div class="text-container">
                <h3>WORK EXPERIENCE</h3>
                <h4 class="snippy">I'm lab tested</h4>
                <p>During my Bachelors degree, I learned to process large amounts of genetic data using R. I was able to process the data to extrapolate insights, identify genes of interest, and graphically visualise the data using various charts. </p>
                <p>Between May 2021 and July 2021, I was employed by the Blizard Institute to adapt and deploy the code 
                I used during my degree to another data set associated with cutaneous research.</p>
            </div>
            </div>
            <div className="image">
  <div className="image-science">
    <img src="/science.jpeg" alt="it's me" className="image-size" />
  </div>
</div>
</div>

<div className="hobbies-container">
                <div className="image">
                    <div className="image-hobbies">
                        <img src="/sunflower.jpeg" alt="it's me" className="image-size"/>
                    </div>
                    </div>

            <div id="about-hobbies">
            <div class="text-container">
                <h3>HOBBIES AND INTERESTS</h3>
                <h4 class="snippy">I like thinking creatively</h4>
                <p>I love getting messy and doing art to relax and clear my head. I enjoy needle-felting, painting, crocheting and clay. </p>

                <p> I have 8 pet rats that drive me mad by chewing everything, but I wouldn’t change them for the world.</p>

                <p>I bake a lot. One of my favourite bakes at the moment is a Brunsviger. It’s a Danish coffee cake that has all the best bits of a cinnamon roll with all the delightful carbs expected of bread.

</p>
            </div>


            </div>
            </div>

{/* 
            <div className="about-awards">
                <h3 className="awards-title">Awards</h3>
                <p>Innovator Award BNTA</p>

                <p>Published in the Journal of Holistic Healthcare and Integrative Medicine </p>

                <p>Project Play Colours</p>

                <p>Academic Merit in Year 4</p>

                <p>Roy Alexander Briggs GP Prize</p>

                <p>Editor-in-Chief Circadian Magazine</p>

                <p>1st place in BL Dermatology Society National Undergraduate Conference
</p>
            </div> */}
        </div>
    );
}
