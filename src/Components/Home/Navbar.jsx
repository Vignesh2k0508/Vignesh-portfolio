import React, { useRef, useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../../Assets/portfolio logo.png"
const Navbar = () => {

  let [fix,setFix]=useState(false)
  let [resumeLink,setResumeLink] = useState("")
  

  let handleResume= ()=>{
    resumeLink= "https://drive.google.com/file/d/1uiOWesOtqY8BMcutbgZdcnz_MCOEFP7k/view?usp=drive_link"
    let link = document.createElement("a");
    link.download = "Vignesh_Resume.pdf"
    link.href = resumeLink;
    link.click();
  }
 

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
              <button id="cv-btn" onClick={handleResume}>Download CV</button>
            </ul>
        </nav> 
        
    </section>
  )
}

export default Navbar