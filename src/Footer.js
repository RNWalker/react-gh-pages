import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer () {
    return (
        <div className="footer">
            <a href="https://github.com/RNWalker" target="_blank" rel="noopener noreferrer">
          <img src="/react-gh-pages/github-mark-white.png" className="footer-icon" alt="Github-logo" />
        </a>
        
            <a href="https://www.linkedin.com/in/rebecca-noelia-walker/" target="_blank" rel="noopener noreferrer">
          <img src="/react-gh-pages/linkedin.png" className="footer-icon" alt="Linkedin-logo" />
        </a>
        </div>

      );
    }