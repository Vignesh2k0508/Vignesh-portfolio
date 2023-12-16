import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../../Assets/portfolio logo.png"
const Navbar = () => {

  let [fix,setFix]=useState(false)


  function setFixed(){
    if(window.scrollY >= 75){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  
  window.addEventListener("scroll",setFixed)


  return (
    <section className={fix ? 'nav-header fixed-nav' : 'nav-header'}>
        <nav>
            <div className="logo"><img src={logo}  alt="" /></div>
            <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <button id="cv-btn">Download CV</button>
            </ul>
        </nav> 
        
    </section>
  )
}

export default Navbar