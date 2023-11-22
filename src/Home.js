import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


export default function Home () {
    return (
<div className="home-content" >
  {/* <div className="home-content"       style={{
        backgroundImage: 'url("/home.png")',
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', 
        minHeight: '100vh',// Adjust as needed
      }}></div>     */}

  <div className="left-content">
  <div className="name-image-container">
    <div id="home-content-rebecca">
      <h1>SOFTWARE</h1>
      <h1>ENGINEERING</h1>
    </div>
    <div id="home-content-noelia">
      {/* <h1>one pixel at a time</h1> */}
    </div>
    <div id="home-content-walker">
      <h2>Hi, I'm Rebecca.</h2>
    </div>
    <div id="home-content-walker">
      <p>I'm a medic turned software engineer, 
      trained by an award-winning bootcamp. Experienced with full-stack web development, 
      I have all the tools I need to build reliable software solutions.
      </p>
    </div>
    <div className="buttons-home">
    <Link to="/about"><button id="about-me">About me</button></Link>
    <Link to="/projects"> <button id="about-me">See my work</button></Link>
    </div>
    </div>
  </div>
  <div className="right-content">
  <div className="image-me">
    <img src="mememe.jpeg" alt="it's me" className="image-size" />
  </div>
  </div>
</div>

    )
}
