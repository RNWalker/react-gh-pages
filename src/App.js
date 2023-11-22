
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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/hello-world" element={<Blog1 />} />
        </Routes>
   
        <Footer/>
      </div>
      
    </BrowserRouter>


  );
}

export default App;
