import React, { useRef, useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../../Assets/portfolio logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {

  let [fix,setFix]=useState(false)
  let [resumeLink,setResumeLink] = useState("")
  let [toggleLink,setToggleLink] = useState(false)
  let getMenu= useRef()

  let handleResume= ()=>{
    resumeLink= "https://drive.google.com/file/d/1uiOWesOtqY8BMcutbgZdcnz_MCOEFP7k/view?usp=sharing"
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


  let handleLinks=()=>{
    setToggleLink(!toggleLink)
    console.log(toggleLink);
  }

  let removeLinks =()=>{
    if(getMenu.current.classList.contains('menu')){
      getMenu.current.classList.remove('show-links')

    }
    else{
      getMenu.current.classList.add('show-links')
    }
    setToggleLink(!toggleLink)
  }

 

  return (
    <section className={fix ? 'nav-header fixed-nav' : 'nav-header'}>
        <nav>
            <div className="logo"><img src={logo}  alt="" /></div>
            <button class="nav-toggle" onClick={handleLinks}>
             {!toggleLink ? <GiHamburgerMenu  /> : <ImCross/>} 
              
            </button>
          
            <ul ref={getMenu} className={toggleLink ? "menu show-links" : "menu"}>
              <li><a href="#" className='links' onClick={removeLinks}>Home</a></li>
              <li><a href="#about" className='links' onClick={removeLinks}>About</a></li>
              <li><a href="#skills" className='links' onClick={removeLinks}>Skills</a></li>
              <li><a href="#projects" className='links' onClick={removeLinks}>Projects</a></li>
              <li><a href="#contact" className='links' onClick={removeLinks}>Contact</a></li>
              <button id="cv-btn" onClick={handleResume} className='links'>Download CV</button>
            </ul>
        </nav> 
        
    </section>
  )
}

export default Navbar