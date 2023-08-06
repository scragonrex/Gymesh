import React, { useEffect, useState } from 'react'
import '../styles/General.css'
import '../styles/GoalsList.css'
import {Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, IconButton, Typography } from '@mui/material';
import { CheckBox, ExpandMore } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const GoalsList = ({item,index}) => {
  const [tasks, setTasks] = useState(0);
  const [goalsList, setGoalsList] = useState();
  const user = useSelector((state)=>state.auth.user);
  const token = useSelector((state)=>state.auth.token);

  const handleTaskChange = (e)=>{
    const id = document.getElementById(`barCont${index}`);
    console.log(id);
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
  }

  const handleDate = (date,num)=>{
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate()+num);
    const temp = newDate.getDate()+"-"+(newDate.getMonth()+1)+"-"+newDate.getFullYear();
    return temp;
  }

  const handleFinalSubmit = async()=>{
    const url = `http://localhost:5000/goals/addScore/${user?._id}`;
    // const url = `https://gymesh-backend.onrender.com/goals/addScore/${user._id}`;

    const response = await fetch(url,{
      method:"POST",
      body:JSON.stringify({score:Math.ceil((tasks/7)*100)}),
      headers:{Authorization:`Bearer ${token}`, "Content-type":"application/json"}
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className='goalCont'>
        <Accordion sx={{backgroundColor:"rgb(41 41 41)", color:"white", minHeight:"4.5em"}}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{color:"white"}} />}
          >
            <div className="barContainer">
             <div>{`${item?.excercise} (${item?.frequency})`}</div>
             <div>{Math.ceil((tasks/7)*100)} %</div>
             <div id={`barCont${index}`} className="bar"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:"rgb(41 41 41)"}}>
          <div style={{position:"relative"}}>
        <div className="display-flex-col width-100">
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,0)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,1)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,2)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,3)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,4)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,5)}
            labelPlacement="end"
          />
        <FormControlLabel
            value="end"
            control={<Checkbox color='success'  onChange={handleTaskChange}/>}
            label={handleDate(item.startDate,6)}
            labelPlacement="end"
          />
        
        </div>
        <div style={{position:"absolute", right:"0", bottom:"0"}}>
        <button className="btn" onClick={handleFinalSubmit}>Final Submit</button>
        </div>
        </div>
          </AccordionDetails>
        </Accordion>
    </div>
    
  )
}

export default GoalsList; 
