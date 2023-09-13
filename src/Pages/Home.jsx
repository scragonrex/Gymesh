import React from 'react'
import '../styles/Home.css'
import '../styles/Workout.css'
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip, useMediaQuery } from '@mui/material';

import { useSelector } from 'react-redux';
import LeaderBoard from '../components/LeaderBoard';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Review from '../components/Review';
import Features from '../components/Features';
const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user)

  const handleSignUp = (e) => {
    const id = document.getElementById("exploreFeature");
    if (e.currentTarget.innerText === "Explore Us") {
      id.scrollIntoView({ behavior: 'smooth' });
    }
    else
      navigate('/signup')
  }
  return (
    <>
      <div className='landingContainer'>
          <img src="/assets/background1.jpg" alt="img1" className="bgImg" />
        <div className='mainPage'>
          <div className="pageTitle">
            <div className="font-big font-bold text-align-center">Elevate Your Fitness Journey with Us!</div>
            <p className="font-para text-align-center font-grey">We're more than just a gym – we're a haven for individuals seeking holistic wellness and growth. Our philosophy revolves around the understanding that true transformation extends beyond the physical.
            </p>
            <button className="btn1" onClick={handleSignUp}><div className='font-subHeading'>{user ? "Explore Us" : "Signup Now"}</div></button>
          </div>

        </div>
      </div>
      <Features/>
      <LeaderBoard />
      <Review />
      <AboutUs />
      <Footer />
    </>

  )
}

export default Home;