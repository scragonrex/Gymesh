import React from 'react'
import'../styles/Home.css'
import '../styles/Workout.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
const Home = () => {
  const navigate=useNavigate();  
  const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <>
    <div className='landingContainer'>
    <div className='mainPage'>
      <div className="pageTitle">
        <h1>Unleash Your Fitness Potential, Unleash Your Life</h1>
        <p>Your Journey to Fitness Begins Here.Try our newly launched Programmes for better growth</p>
        <div style={{marginTop:"1rme"}}>
        <h1>Check our features</h1>
          <div className='balance'>
            <button className='btn' onClick={()=>navigate("/goal")}>Goals</button>
            <button className='btn' onClick={()=>navigate("/workout")}>Exercises</button>
          </div>
        </div>
      </div>
      {!mobileView && <div className="flexBox" style={{width:"100%"}}>
        <img src="/assets/mainPageImg.png" alt="mainimage" style={{width:"100%"}} />
      </div>}
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
            <p class="copyright">Muscle Grabber © 2023</p>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
    
  )
} 

export default Home