import React from "react";
import './/Blog-article.css';

export default function Blog1 () {
    return (
        <div className="blog-article-container">
        <h1 className="blog-title">Hello, World!</h1>
        <h3 className="date">7th November 2023</h3>
        <hr/>
        <p className="blog-writing">Whether it’s the first code, the first portfolio website or the first time switching to a new career… it starts with ‘Hello, World!’</p>
        <p className="blog-writing">I’ve spent the last six years at medical school, studying to be a doctor. As part of my training, I worked in hospitals and GP surgeries in East London across various medical and surgical specialties. I diagnosed patients in A&E, triaged patients in trauma and had my own patient list at GP where I saw just a little bit of everything. Whether I was offering advice about a newborn’s vaccination schedule or doing cannulas and taking bloods, there was a lot I enjoyed about medicine. I met some amazing people, colleagues and patients, who I have no doubt I’ll remember for the rest of my life. </p>
       <div className="medical-me">
        <img src='/react-gh-pages/medical-me.jpeg' alt="it's me" className="image-medical-me" />
        <figcaption className="caption1">A very tired selfie from my anaesthetics rotation.</figcaption>
        </div>
        
        <p className="blog-writing">My decision to leave medicine and spring into tech was definitely a difficult one. In my new adventures, I still have moments of doubt where I wonder if I’ll look back in five years and regret my choices. In the end, I reflected on my time in medical school and what it taught me about the NHS. I looked to my colleagues who were training in the field, some who had been there for only a year and others who had been there for 25 years. I’m pointing out the obvious when I say the landscape has changed, but that feeling was really hammered home during my studies. There’s a lot of burnout and a lot of frustration with the chronically low levels of staff and resources for an ever-growing population. Even without those challenges, the antiquated systems in place are not fit for purpose. I’ve been placed in hospitals that still have completely paper notes - the fact we’re making errors based on the legibility of someone’s handwriting in an era where almost everyone has a smartphone at their fingertips is simply not acceptable.   Personally, I struggled a lot coming to terms with the fact that demand far outweighs the resources available; we inevitably let our patients down because there is not enough to go around, especially poignant during COVID. I went into medicine because I wanted to make a positive difference in someone’s life and I didn’t feel like I was doing the best I could do.</p>
        <p className="blog-writing">In July 2023, after a competitive application process, I was accepted into the full-stack boot camp at the Bright Network Technology Academy. This 13-week course introduced me to important programming languages, like Java and JavaScript, and popular frameworks, including Spring and React. We covered agile methodologies, worked in sprints and undertook retrospectives. I learned version control with Git, test-driven development and how to use the once-mysterious terminal. I also recently competed in their annual hackathon, integrating OpenAI into an app designed to support those having mental health difficulties in the workplace. It’s fun and satisfying, and as I begin my hunt for a permanent role in this field I feel good about the future.</p>
        <p className="blog-writing">Learning everything I have in the last few months has been invigorating. I feel motivated to learn more and more about all things tech, including extra courses in cybersecurity, machine learning, data science and even game development. For the first time in a long time, I don’t have a clear plan for my future… but that’s okay. As my mum said when I confided in her that I didn’t think I had the grades to get into medical school, ‘things have a way of working themselves out’. </p>
        </div>
    )
}
