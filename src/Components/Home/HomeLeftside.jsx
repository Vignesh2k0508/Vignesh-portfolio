import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HomeLeftside = () => {
  return (
    <div className="left-side-container">
      <div className="left-side">
        <h1 id='hello-word'>Hello, I'm</h1>
        <h1 id='name'>Vignesh B</h1>
        <h3>A <span style={{color:"#1cbe59"}}>Full stack developer</span> from <span style={{color:"#8067f0"}}>Bengaluru</span></h3>
        <p>I'm Innovative Web Developer based in Bengaluru, and I'm very passionate and dedicated to my work.</p>
        <div className="btns">
          <a href="#about">About me</a>
          <div className="icons">
          <FaInstagram />
          <FaLinkedinIn />
          <FaGithub/>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default HomeLeftside