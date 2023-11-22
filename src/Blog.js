import React from "react";
import './/Blog.css';
import { Link } from "react-router-dom";

export default function Blog () {
    return (
        <div className="blog-container">
                    <div id="blog-title">
                <h1>BLOG</h1>
        </div>

        <div className="blogs">
  <Link to="/blog/hello-world">
    <div className="blog1">
      <h3>Hello, World!</h3>
      <p className="date">8/11/23</p>
      <p className="one-line">Whether it’s the first code, the first portfolio website or the first time switching to a new career… it starts with ‘Hello, World!’</p>
    </div>
  </Link>
</div>
</div>
    )
}
