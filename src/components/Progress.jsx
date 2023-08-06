import React, { useState } from 'react'
import '../styles/General.css'
import '../styles/Progress.css'
import {Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CheckBox, ExpandMore } from '@mui/icons-material';

const Progress = () => {
  const [tasks, setTasks] = useState(0);
  const handleTaskChange = (e)=>{
    const id = document.getElementById("barCont");
    if(e.target.checked)
    {
      setTasks(tasks+1);
      console.log(((tasks+1)/7)*100);
      id.style.width=`${((tasks+1)/7)*100}%`;
    }
  else{
     setTasks(tasks-1);
     console.log(((tasks-1)/7)*100);

     id.style.width=`${((tasks-1)/7)*100}%`;
    }
    console.log("task", tasks);
    

  }
  return (
    <div className='goalCont'>
      <div className='progressCont font-white'>
      <Accordion sx={{backgroundColor:"rgb(41 41 41)", color:"white", height:"4.5rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{color:"white"}} />}
        >
          <div className="barContainer">
           <div>Pushups 10 times a day</div>
           <div>{Math.ceil((tasks/7)*100)} %</div>
           <div id="barCont" className="bar"></div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"rgb(41 41 41)"}}>
        <div style={{position:"relative"}}>
      <div className="display-flex-col width-100">
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      <FormControlLabel
          value="end"
          control={<Checkbox color='success' name='1' onChange={handleTaskChange}/>}
          label="End"
          labelPlacement="end"
        />
      
      </div>
      <div style={{position:"absolute", right:"0", bottom:"0"}}>
      <button className="btn" >FinalSubmit</button>
      </div>
      </div>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
    
  )
}

export default Progress
