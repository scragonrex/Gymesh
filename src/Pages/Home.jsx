import React from 'react'
import '../styles/Home.css'
import '../styles/Workout.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { AccountCircleOutlined, FlagCircleOutlined, ManageSearchRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import LeaderBoard from '../components/LeaderBoard';
import AboutUs from '../components/AboutUs';
const Home = () => {
  const navigate = useNavigate();
  const mobileView = useMediaQuery('(max-width:720px)');
  const user = useSelector((state)=>state.auth.user)

  const handleSignUp = (e)=>{
    const id = document.getElementById("exploreFeature");
    if(e.currentTarget.innerText==="Explore Us")
    {
      id.scrollIntoView({ behavior: 'smooth' });
    }
    else
    navigate('/signup')
  }
  return (
    <>
     <div className='landingContainer'>
    <div className='mainPage'>
      <img src="/assets/background1.jpg" alt="img1" className="bgImg" />
      <div className="pageTitle">
        <div className={`${mobileView?"font-3":"font-6"} font-bold`}>Elevate Your Fitness Journey with Us!</div>
        <p className=' font-1 text-align-center font-grey'>We're more than just a gym – we're a haven for individuals seeking holistic wellness and growth. Our philosophy revolves around the understanding that true transformation extends beyond the physical.
        </p>
        <button className="btn1" onClick={handleSignUp}><div className='font-3'>{user ? "Explore Us":"Signup Now"}</div></button>
      </div>
      
    </div> 
    <div id="exploreFeature" className="featuresCont">
      <div className="display-flex-col width-50">
      <div className="font-white font-4 font-bold font-heading">Checkout our new Features!</div>
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

      <div className="featureCard" onClick={()=>navigate('/goal')}>
      <div className='cardImg'>
      <img src="/assets/c3.png" alt="c3"  />
      </div>
        <div>
        <div className='font-3 font-white font-bold'>Comming Soon</div>
        <div className='font-grey margin-top-1'>Currently working on the new feature. </div>
        </div>
      </div>
     
     
     
      </div>
    </div>

    <LeaderBoard/>
    <AboutUs/>
    </div>
    <div class="footer-basic">
        <footer>
            <div class="social display-flex-row"><p><i class="icon ion-social-instagram"></i></p><p><i class="icon ion-social-snapchat"></i></p><p><i class="icon ion-social-twitter"></i></p><p><i class="icon ion-social-facebook"></i></p></div>
            <ul class="list-inline">
                <li class="list-inline-item"><p>Home</p></li> 
                <li class="list-inline-item"><p>Services</p></li>
                <li class="list-inline-item"><p>About</p></li>
                <li class="list-inline-item"><p>Terms</p></li>
                <li class="list-inline-item"><p>Privacy Policy</p></li> 
            </ul>
            <p class="copyright">Gymesh © 2023</p>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>

  )
}

export default Home