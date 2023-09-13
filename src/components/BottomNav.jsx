import { AccountCircle, DirectionsRun, Flag, Home, PowerSettingsNew } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { setLogout } from '../store/authSlice';
 
const BottomNav = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/login')
  }
  return (
    <div className='bottomNav'>
      <div className={`tabs ${location.pathname==="/workout" && "active"}`} onClick={()=>navigate('/workout')}><DirectionsRun/> Excercise</div>
      <div className={`tabs ${location.pathname==="/goal" && "active"}`} onClick={()=>navigate('/goal')}><Flag/> Goals</div>
      <div className={`tabs ${location.pathname==="/" && "active"}`} onClick={()=>navigate('/')}><Home/> Home</div>
      <div className={`tabs ${location.pathname==="/profile" && "active"}`} onClick={()=>navigate('/profile')}><AccountCircle/> Profile</div>
      <div className="tabs" onClick={handleLogout}><PowerSettingsNew/> Logout</div>
    </div>
  )
}

export default BottomNav
