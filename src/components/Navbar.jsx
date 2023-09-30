import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../store/authSlice';
import { useMediaQuery } from '@mui/material'
import { Bolt } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state)=>state.auth.user);
  const score = useSelector((state)=>state.auth.score); 
  const mobileView = useMediaQuery('(max-width:730px)');
  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/login')
  } 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <div className={`navbarContainer ${isScrolled ? 'blur' : ''}`}>
      <div className="logo flexBox gap-1 font-green font-bold">
        <div className='logoCont'>
        <div className={mobileView?'font-bigger-para text-align-center':'font-subHeading'}>Muscle Grabber</div></div>
        </div>
      {mobileView ? "" : <div className="links">
        <ul className='font-white'>
          <li className={`font-para ${location.pathname==="/" && "active"}`} onClick={() => navigate('/')}> Home</li>
          <li className={`font-para ${location.pathname==="/workout" && "active"}`}  onClick={() => navigate('/workout')}>Excercises</li>
          <li className={`font-para ${location.pathname==="/goal" && "active"}`}  onClick={() => navigate('/goal')}>Goals</li>
          <li className={`font-para ${location.pathname==="/profile" && "active"}`}  onClick={() => navigate('/profile')}>Profile</li>
          <li className='font-para font-bold font-white' ><Bolt/>{score}</li>
          {user && <button className='btn' onClick={handleLogout}>Logout</button>}
        </ul>
      </div>}
    </div>
  )
}

export default Navbar
