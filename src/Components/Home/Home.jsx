import React from 'react'
import HomeLeftside from './HomeLeftside'
import HomeRightside from './HomeRightside'
import Navbar from './Navbar'

const Home = () => {
  return (
    <section id='Home'>
          <Navbar/>
        <div className="intro-info">
          <HomeLeftside/>
          <HomeRightside/>
         
        </div>
       
    </section>
  )
}

export default Home