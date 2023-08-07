import React from 'react'
import '../styles/Home.css'
import '../styles/Workout.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { AccountCircleOutlined, FlagCircle, FlagCircleOutlined, FlagCircleRounded, ManageSearchRounded } from '@mui/icons-material';
const Home = () => {
  const navigate = useNavigate();
  const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <>
     <div className='landingContainer'>
    <div className='mainPage'>
      <div className="pageTitle">
        <div className={`${mobileView?"font-3":"font-4"} ${mobileView?"margin-bottom-2":"margin-bottom-4"} font-bold`}>Unleash Your Fitness Potential, Unleash Your Life</div>
        <p>Your Journey to Fitness Begins Here.Try our newly launched Programmes for better growth</p>
      </div>
      {!mobileView && <div className="flexBox" style={{width:"100%"}}>
        <img src="/assets/mainPageImg.png" alt="mainimage" style={{width:"100%"}} />
      </div>}
    </div> 
    <div className="featuresCont">
      <div className={`${mobileView ? "font-3":"font-4"} ${mobileView && "text-align-center"} font-white font-bold`}>Checkout our new Features!</div>
      <div className="featureCardCont">
      <div className="featureCard" onClick={()=>navigate('/workout')}>
        <div className="display-flex-col" >
        <div className='font-2 font-bold'>Excercise Finder</div>
        <div className='font-white'>Explore various ranges of excercise according to your various muscles</div>
        </div>
        <ManageSearchRounded sx={{fontSize:"5em"}}/>
      </div>
      <div className="featureCard" onClick={()=>navigate('/goal')}>
      <div className="display-flex-col">
        <div className='font-2 font-bold'>Goal Maker</div>
        <div className='font-white'>Create a weeekly plan for your Workouts and gain muscle scores after completion of the goals</div>
        </div>
        <FlagCircleOutlined sx={{fontSize:"5em"}}/>
      </div>
      <div className="featureCard" onClick={()=>navigate('/profile')}>
      <div className="display-flex-col">
        <div className='font-2 font-bold'>Profile</div>
        <div className='font-white font-1'>Setup your Profile for extra evaluations and benefits</div>
        </div>
        <AccountCircleOutlined sx={{fontSize:"5em"}}/>
      </div>
      </div>
    </div>

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