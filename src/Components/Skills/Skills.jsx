import React, { useState } from 'react'
import reactjsIcon from '../../Assets/reactjs-icon.png'
import nodejsIcon from '../../Assets/nodejs-icon.png'
import expressjsIcon from '../../Assets/express-js-icon.png'
import mongodbIcon from '../../Assets/mongodb-icon.webp'
import htmlIcon from '../../Assets/html-icon.png'
import cssIcon from '../../Assets/css-icon.png'
import bootstrapIcon from '../../Assets/bootstrap.png'
import sqlIcon from '../../Assets/sql-icon.png'
import materialuiIcon from '../../Assets/material ui.png'
import jsIcon from '../../Assets/js-icon.png'

const Skills = () => {

  return (
    <div id="skills">
        <h1>skills</h1>

        <div className="skills-icons">
            <div className="icon-imgs">
                <img src={reactjsIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={nodejsIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={mongodbIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={expressjsIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={htmlIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={cssIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={jsIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={sqlIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={materialuiIcon} alt="" />
            </div>
            <div className="icon-imgs">
                <img src={bootstrapIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills