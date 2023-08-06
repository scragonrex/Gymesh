import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/authSlice';
import { useMediaQuery } from '@mui/material'
const Navbar = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch() 
  const handleLogout = ()=>{
    dispatch(setLogout())
  }

  const mobileView = useMediaQuery('(max-width:730px)');
  return (
    <div className='navbarContainer'>
      <div className="logo flexBox gap-1 font-green font-bold">
        {/* <div className='imgLogo'></div>  */}
        <h3 className='font-1'>Muscle Grabber</h3></div>
      {mobileView ? (
       null
      ) : <div className="links">
        <ul>
            <li className='font-1 font-green' onClick={()=>navigate('/home')}>Home</li>
            <li className='font-1 font-green' onClick={()=>navigate('/workout')}>Programs</li>
            <li className='font-1 font-green' onClick={()=>navigate('/goal')}>Goal</li>
            <li className='font-1 font-green' onClick={()=>navigate('/profile')}>Profile</li>
            <li className='font-1 font-green' onClick={handleLogout}><button className='btn'>Logout</button></li>
        </ul>
      </div>}
    </div>
  ) 
}

export default Navbar
