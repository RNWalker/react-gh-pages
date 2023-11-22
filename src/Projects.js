import React, { useState } from "react";
import './Projects.css';

export default function Projects() {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  // const [hover1, setHover1] = useState(false);

  const Hover1Data = "This project is the backend for a virtual pet game where a user interacts with their pets, feeding and playing with them. Inspired by a Tamagotchi, if you ignore the pet for too long it dies. This project was built with Java, Spring and PostgreSQL.";
  const onHover1 = (e) => {
    e.preventDefault();
    setHover1(true);
  };

  const onHover1Over = (e) => {
    e.preventDefault();
    setHover1(false);
  };

  const Hover2Data = "This project is the frontend for an e-commerce media shop.  It uses the backend built by another team at the boot camp, calling in data stored about the products in the media shop. This project was built with JavaScript and React.";
  const onHover2 = (e) => {
    e.preventDefault();
    setHover2(true);
  };

  const onHover2Over = (e) => {
    e.preventDefault();
    setHover2(false);
  };

  const Hover3Data = "This is a full stack project, utilising all the technologies we learned in the bootcamp: Java, Spring, PostgreSQL, JavaScript and React. The system is designed for a warehouse employee to assign themselves orders. Once they have packed an order, it is automatically assigned to a delivery truck.";
  const onHover3 = (e) => {
    e.preventDefault();
    setHover3(true);
  };

  const onHover3Over = (e) => {
    e.preventDefault();
    setHover3(false);
  };


  
  return (

    <div className="projects-container">

      <h1 className="projects-title">PROJECTS</h1>

      {/* <p className="info">Since I have started pursuing software development, I have undertaken backend, frontend, fullstack and personal projects.</p> */}
      <div className="projects">
      
      <div id="project-1">
        <h3 className="title-of-project">Virtual Pet</h3>
        <a href="https://github.com/RNWalker/BackEndProjectGroup4" target="_blank" rel="noopener noreferrer">
        <div className="flex-center">
        {hover1 && <p className={hover1} id="hover">{Hover1Data}</p>}
          <img onMouseEnter = {(e) => onHover1(e)}
          onMouseLeave = {(e) => onHover1Over(e)}
          src="/virtualPetBackend.png" className="project-icon" alt="Virtual Pet Backend" />
        </div>
        </a>
        </div>
       
        <div id="project-2">
        <h3 className="title-of-project">E-Commerce Media Shop</h3>
        <a href="https://github.com/RNWalker/bnta_front_end_project" target="_blank" rel="noopener noreferrer">
        <div className="flex-center">
        {hover2 && <p className={hover2} id="hover">{Hover2Data}</p>}
          <img onMouseEnter = {(e) => onHover2(e)}
          onMouseLeave = {(e) => onHover2Over(e)}src="/butterfly.png" className="project-icon" alt="Virtual Pet Backend" />
          </div>
        </a>
        </div>
        
        <div id="project-3">
        <h3 className="title-of-project">Warehouse Management System</h3>
        <a href="https://github.com/RNWalker/Capstone_Frontend" target="_blank" rel="noopener noreferrer">
        {hover3 && <p className={hover3} id="hover">{Hover3Data}</p>}
          <img onMouseEnter = {(e) => onHover3(e)}
          onMouseLeave = {(e) => onHover3Over(e)}
          src="/warehouse.png" className="project-icon" alt="Virtual Pet Backend" />
        </a>
        </div>
       
       <div id="project-4">
        <h3 className="title-of-project">Hackathon</h3>
        <a href="https://github.com/RNWalker/Capstone_Frontend" target="_blank" rel="noopener noreferrer">
          <img src="/comingsoon.png" className="project-icon" alt="Virtual Pet Backend" />
        </a>
        </div>
        
        <div id="project-5">
        <h3 className="title-of-project">Blockchain</h3>
        <a href="https://github.com/RNWalker/Capstone_Frontend" target="_blank" rel="noopener noreferrer">
          <img src="/comingsoon.png" className="project-icon" alt="Virtual Pet Backend" />
        </a>
        </div>
       
        <div id="project-6">
        <h3 className="title-of-project">Just A Tree</h3>
        <a href="https://github.com/RNWalker/Capstone_Frontend" target="_blank" rel="noopener noreferrer">
          <img src="/comingsoon.png" className="project-icon" alt="Virtual Pet Backend" />
        </a>
        </div>
      </div>
      </div>
  );
}
