import React from 'react'
import "../styles/AboutUs.css"
import { useMediaQuery } from '@mui/material';
const AboutUs = () => {
  const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <div className='aboutUs'>
      {!mobileView && <img src="/assets/profile.png" alt="profile" />}
      <div className="aboutUsCont">
      <div className="font-heading font-white ">About Us</div>
      {/* {!mobileView && <img src="/assets/profile.png" alt="profile" />} */}
      <div className="font-grey font-para margin-top-1">Greetings! I'm Abhishek Anand, a B.Tech Mechanical Engineering student at IIT Bhubaneswar. Alongside my studies, I'm diving into Fullstack Web Development with great enthusiasm, driven by my passion for acquiring new web technologies.
      <br />
      <br />
      I developed this application utilizing the following technologies:
      <div className="techStacks">
        <div className='btn1'>React Js</div>
        <div className='btn1'>Node Js</div>
        <div className='btn1'>MongoDb</div>
        <div className='btn1'>Redux Toolkit</div>
        <div className='btn1'>Material UI</div>
        <div className='btn1'>Express Js</div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default AboutUs
