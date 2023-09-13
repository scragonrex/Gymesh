import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Features.css"
import { useMediaQuery } from '@mui/material';
const Features = () => {
    const navigate = useNavigate();
    const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <div className="features">
      {!mobileView && <img src="/assets/featuresBg.png" alt="feature" />}
      <div id="exploreFeature" className="featuresCont">
      <div className="display-flex-col">
      <div className="font-white font-bold font-heading">Checkout our new Features!</div>
      {mobileView && <img src="/assets/featuresBg.png" alt="feature" />}
      <div className="margin-top-1 font-para font-grey">Use these features to enhance your your workout experience. Every feature has there own benefits and functionality. So have fun with playing it. </div>
      </div>
      <div className="featureCardCont">
      <div className="featureCard" onClick={()=>navigate('/workout')}>
        <div className='cardImg'>
        <img src="/assets/c1.png" alt="c1"  />
        </div>
        <div>
        <div className='font-subHeading font-white font-bold'>Excercise Finder</div>
        <div className='font-grey margin-top-1 font-para'>Explore various ranges of excercise according to your various muscles</div>
        </div>
      </div>

      <div className="featureCard" onClick={()=>navigate('/goal')}>
      <div className='cardImg'>
      <img src="/assets/c2.png" alt="c2"  />
      </div>
        <div>
        <div className='font-subHeading font-white font-bold'>Goal Maker</div>
        <div className='font-grey margin-top-1 font-para'>Create a weeekly plan for your Workouts and gain muscle scores after completion of the goals</div>
        </div>
      </div>

      <div className="featureCard" >
      <div className='cardImg'>
      <img src="/assets/c3.png" alt="c3"  />
      </div>
        <div>
        <div className='font-subHeading font-white font-bold'>Coming Soon</div>
        <div className='font-grey margin-top-1 font-para'>Currently working on the new feature. </div>
        </div>
      </div>   
      </div>
      </div>
    </div>
  )
}

export default Features
