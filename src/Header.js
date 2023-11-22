import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="one">
          <Link to="/">Rebecca Walker</Link>
        </div>
        <div className="two">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}