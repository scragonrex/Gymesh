import React from 'react'
import "../styles/AboutUs.css"
const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <img src="/assets/profile.png" alt="profile" />
      <div className="aboutUsCont">
      <div className="font-4 font-white font-heading">About Us</div>
      <div className="font-grey margin-top-1">Greetings! I'm Abhishek Anand, a B.Tech Mechanical Engineering student at IIT Bhubaneswar. Alongside my studies, I'm diving into Fullstack Web Development with great enthusiasm, driven by my passion for acquiring new web technologies.
      <br />
      <br />
      I developed this application utilizing the following technologies:
      
      <div className="techStacks">
        <div className='btn1'>React Js</div>
        <div className='btn1'>Redux Toolkit</div>
        <div className='btn1'>Material UI</div>
        <div className='btn1'>Node Js</div>
        <div className='btn1'>Express Js</div>
        <div className='btn1'>MongoDb</div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default AboutUs
