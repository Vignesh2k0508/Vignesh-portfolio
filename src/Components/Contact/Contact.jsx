import React, { useState } from 'react'
import { GrMail } from "react-icons/gr";
import { RiPhoneFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";


const Contact = () => {
    
   
    
  return (
    <div id="contact">
      <h1>contact</h1>
      <div className="contact-info">
        <div className="icon-container">
            <div className="icon1">
                <GrMail />
            </div>
            
            <div className="contact-details">
                <h1>Email</h1>
                <p>bvignesh220@gmail.com</p>
            </div>
        </div>
        <div className="icon-container">
            <div className="icon2">
                <RiPhoneFill />
            </div>         
            <div className="contact-details">
                <h1>Phone</h1>
                <p>+91 73490 68129</p>
            </div>
        </div>
        {/* <div className="icon-container">
            <RiLinkedinFill />
        </div> */}
      </div>
      <footer>Developed by Vignesh B © 2023</footer>
     
    </div>
  )
}

export default Contact