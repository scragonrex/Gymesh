import React from 'react'
import "../styles/Footer.css"
import { AccountCircleOutlined, FlagCircleOutlined, GitHub, Instagram, LinkedIn, ManageSearchRounded, WhatsApp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='font-1'>Created with Love and Passion</div>
            <div className='margin-top-1 font-1'>Contact Us</div>
            <div >scragondragon@gmail.com</div>
            <div className="iconsCont">
              <GitHub/>
              <Instagram/>
              <LinkedIn/>
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
