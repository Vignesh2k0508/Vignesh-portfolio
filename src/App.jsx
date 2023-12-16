import React from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import "./global.css"
import About from './Components/About';


const App = () => {

  return (
    <>
      <div id="container">
        <Home/>
        <About/>
        <div id="skills">
          <h1>skills</h1>
        </div>
        <div id="projects">
          <h1>projects</h1>
        </div>
        <div id="contact">
          <h1>contact</h1>
        </div>
      </div>
      

      
    </>
    
  )
}

export default App