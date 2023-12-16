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
          <a href="https://www.instagram.com/vicky_zk58?igshid=YzVkODRmOTdmMw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/vignesh-b-213a84205/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/Vignesh2k0508" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default HomeLeftside