import React from 'react'
import '../styles/General.css'
import '../styles/Progress.css'
import {Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ExpandMore } from '@mui/icons-material';
const Progress = () => {
  return (
    <div className='goalCont'>
      <div className='progressCont font-white'>
      {/* <div className='display-flex-row justify-content-between'>
        <div>Pushups 10 times a day</div>
        <div className="btnCont"><ExpandMore/></div>
      </div>
      <div style={{position:"relative"}}>
        <div className="bar"></div>
      <div className="progressBar">
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      </div>
      </div> */}
      <Accordion sx={{backgroundColor:"rgb(41 41 41)", color:"white", height:"4rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{color:"white"}} />}
          
        >
           <div>Pushups 10 times a day</div>
           <div className="bar"></div>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"rgb(41 41 41)"}}>
        <div>
        
      <div className="progressBar">
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      <div className='checkBtn'><CheckCircleIcon color="success" />06/08/2023</div>
      </div>
      </div>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
    
  )
}

export default Progress
