import React from 'react'
import blogImg from '../../Assets/blog-img.jpg'
import danceImg from '../../Assets/dance-img1.avif'
import todoImg from '../../Assets/todo-img1.avif'

const Projects = () => {
  return (
    <div id="projects">
        <h1>projects</h1>
        <div className="projects-container">
            <div className="project">
                <div className="project-image">
                    <img src={blogImg} alt="" />
                </div>
              <div className="project-info">
                <h4>Blog Website</h4>
                <p>Developed a fully functional blog website using React JS, Node.js, Express.js, and MongoDB to manage and publish blog posts.</p>
                <button><a href="https://github.com/Vignesh2k0508/Blogs" target="_blank" rel="noopener noreferrer">view code</a></button>
              </div>
              
              
               
            </div>
            <div className="project">
                <div className="project-image">
                    <img src={danceImg} alt="" />
                </div>
                <div className="project-info">
                    <h4>Dance school app</h4>
                    <p>This application is built with fully functional and responsive of dancing school information     and its academies, branches and the maintenance of records.</p>
                    <button><a href="https://github.com/Vignesh2k0508/Dance-school-app" target="_blank" rel="noopener noreferrer">view code</a></button>
                </div>
               
            </div>
            <div className="project">
                <div className="project-image">
                    <img src={todoImg} alt="" />
                </div>
                <div className="project-info">
                    <h4>To-do List App</h4>
                    <p>Built a simple to-do list app using Node JS, Express JS, EJS and MongoDB. The app allows     users to create, read, update, and delete to-do items.</p>
                    <button><a href="https://github.com/Vignesh2k0508/TodoApp" target="_blank" rel="noopener noreferrer">view code</a></button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Projects