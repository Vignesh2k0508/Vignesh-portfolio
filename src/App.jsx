import React from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import "./global.css"
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


const App = () => {



  return (
    <>
      <div id="container">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      

      
    </>
    
  )
}

export default App