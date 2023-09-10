import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Features.css"
const Features = () => {
    const navigate = useNavigate();
  return (
    <div className="features">
      <img src="/assets/featuresBg.png" alt="feature" />
      <div id="exploreFeature" className="featuresCont">
      <div className="display-flex-col">
      <div className="font-white font-5 font-bold font-heading">Checkout our new Features!</div>
      <div className="margin-top-1 font-grey">Use these features to enhance your your workout experience. Every feature has there own benefits and functionality. So have fun with playing it. </div>
      </div>
      <div className="featureCardCont">
      <div className="featureCard" onClick={()=>navigate('/workout')}>
        <div className='cardImg'>
        <img src="/assets/c1.png" alt="c1"  />
        </div>
        <div>
        <div className='font-3 font-white font-bold'>Excercise Finder</div>
        <div className='font-grey margin-top-1'>Explore various ranges of excercise according to your various muscles</div>
        </div>
      </div>

      <div className="featureCard" onClick={()=>navigate('/goal')}>
      <div className='cardImg'>
      <img src="/assets/c2.png" alt="c2"  />
      </div>
        <div>
        <div className='font-3 font-white font-bold'>Goal Maker</div>
        <div className='font-grey margin-top-1'>Create a weeekly plan for your Workouts and gain muscle scores after completion of the goals</div>
        </div>
      </div>

      <div className="featureCard" >
      <div className='cardImg'>
      <img src="/assets/c3.png" alt="c3"  />
      </div>
        <div>
        <div className='font-3 font-white font-bold'>Coming Soon</div>
        <div className='font-grey margin-top-1'>Currently working on the new feature. </div>
        </div>
      </div>
     
     
     
      </div>
      </div>
    </div>
  )
}

export default Features
