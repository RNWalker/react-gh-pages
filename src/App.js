
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Header from './Header';
import Footer from './Footer';
import Blog1 from './Blog1';
import Blog2 from './Blog2';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/hello-world" element={<Blog1 />} />
          <Route path="/blog/hackathon" element={<Blog2 />} />
        </Routes>
   
        <Footer/>
      </div>
      
    </BrowserRouter>


  );
}

export default App;
