import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../store/authSlice';
import { useMediaQuery } from '@mui/material'
import Sidebar from './Sidebar';
import { Bolt } from '@mui/icons-material';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.auth.user);
  const score = useSelector((state)=>state.auth.score); 
  const mobileView = useMediaQuery('(max-width:730px)');
  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/login')
  }
  return (
    <div className='navbarContainer'>
      
      <div className="logo flexBox gap-1 font-green font-bold">
        <div className='logoCont'>
        <div className={mobileView?'font-2':'font-subHeading'}>Muscle Grabber</div></div>
        </div>
      {mobileView ? (<div><Sidebar/></div>) : <div className="links">
        <ul className='font-white'>
          <li className='font-para' onClick={() => navigate('/')}>Home</li>
          <li className='font-para' onClick={() => navigate('/workout')}>Programs</li>
          <li className='font-para' onClick={() => navigate('/goal')}>Goal</li>
          <li className='font-para' onClick={() => navigate('/profile')}>Profile</li>
          <li className='font-para font-bold font-white' ><Bolt/>{score}</li>
          {user && <li className='font-para font-green' onClick={handleLogout}><button className='btn'>Logout</button></li>}
        </ul>
      </div>}
    </div>
  )
}

export default Navbar
