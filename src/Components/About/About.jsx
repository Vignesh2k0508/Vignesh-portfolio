import React from 'react'
import aboutImg from '../../Assets/about_img.png'

const About = () => {
  return (
    <div id='about'>
      <div className="about-left-side">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
      </div>
      <div className="about-right-side">
          <h3>I'm a MERN Stack Developer</h3>
          <h1>Passionate Web Developer crafting user-centric digital solutions for online impact</h1>
          <div className="about-info">
            <p>Hello there! 👋 I'm Vignesh, a passionate Full Stack Developer based in Bengaluru. With a deep love for turning ideas into functional and aesthetically pleasing digital solutions, I thrive in the dynamic world of web development.</p>

            <p> My journey started with a curiosity about how things work in the digital realm, and it has evolved into a relentless pursuit of creating seamless user experiences. From the elegance of front-end design to the intricacies of back-end functionality, I'm on a mission to craft technology that not only meets but exceeds expectations.</p>

            <p>Coding is my canvas, and every project is a unique masterpiece waiting to unfold. I believe in the power of clean code, intuitive design, and the impact that thoughtful development can have on the user. Each line of code is an opportunity to create something meaningful, and I approach my work with a blend of creativity and technical precision.</p>
{/* 
            <p>Outside of the development environment, you might find me exploring the latest tech trends, collaborating with fellow developers, or indulging in a good book. I'm a firm believer that the best solutions arise from a combination of passion, dedication, and a touch of creativity.</p> */}

            <p>I'm a firm believer that the best solutions arise from a combination of passion, dedication, and a touch of creativity.</p>

            <p>Let's embark on this coding journey together and turn your ideas into digital realities!</p>
          </div>
       
            <a href="#contact">Hire Me</a>
 
      </div>
    </div>
  )
}

export default About