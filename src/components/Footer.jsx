import React from 'react'
import "../styles/Footer.css"
import { AccountCircleOutlined, Facebook, FlagCircleOutlined, GitHub, Instagram, LinkedIn, ManageSearchRounded, WhatsApp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='font-1'>Muscle Grabber</div>
            <div >scragondragon@gmail.com</div>
            <div className="iconsCont">
              <a href="https://github.com/scragonrex/Gymesh-frontend" target="_blank"><GitHub/></a>
              <a href="https://www.linkedin.com/in/abhishek-anand-a55028208/" target="_blank"><LinkedIn/></a>
              <a href="https://www.facebook.com/profile.php?id=100012831764394" target="_blank"><Facebook/></a>
              <Instagram/>
              <Tooltip title="6394323721">
              <WhatsApp/>
              </Tooltip>
            </div>
            <div className='margin-top-1'>Muscle Grabber © 2023</div>
        </footer>
    </div>
  )
}

export default Footer
