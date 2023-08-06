import { ArrowBack } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, IconButton, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { InputLabelX, SelectX } from '../components/Utils'
import { useNavigate } from 'react-router-dom';
import '../styles/Workout.css'
import { useSelector } from 'react-redux';
import Progress from '../components/Progress';

const Goal = () => { 
  const navigate = useNavigate();
  const user = useSelector((state)=>state.auth.user);
  const token = useSelector((state)=>state.auth.token);
  const [taskOpen, setTaskOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false)

  // eslint-disable-next-line
  const [excerciseList, setExcerciseList] = useState(['Running', 'Cycling', 'Pushups', 'Burpees', 'Pullups'])
  // eslint-disable-next-line
  const [runningOptions, setRunningOptions] = useState(['1 km', '2 km', '4 km', '6 km', '8 km']);
  // eslint-disable-next-line
  const [cyclingOptions, setCyclingOptions] = useState(['3 km', '6 km', '9 km', '12 km']);
  // eslint-disable-next-line
  const [pushupsOptions, setPushupsOptions] = useState(['5 times a day', '10 times a day', '15 times a day', '16 times a day', '22 times a day']);
  // eslint-disable-next-line
  const [burpeesOptions, setBurpeesOptions] = useState(['10 times a day', '20 times a day', '50 times a day', '80 times a day', '100 times a day', '120 times a day']);
  // eslint-disable-next-line
  const [pullupsOptions, setPullupsOptions] = useState(['3 times a day', '6 times a day', '10 times a day', '25 times a day', '50 times a day', '100 times a day']);
  // eslint-disable-next-line
  const [excerciseValue, setExcerciseValue] = useState({ excercise: '', goal: '' });
  const [goalOptions, setGoalOptions] = useState(['select excercise first'])

  const handleBack = () => {
      navigate('/home');
  }

  const handleExcerciseChange = (e) => {
    setExcerciseValue((prev) => { return { ...prev, excercise: e.target.value } });
    if (e.target.value === 'Running')
      setGoalOptions(runningOptions);
    else if (e.target.value === 'Cycling')
      setGoalOptions(cyclingOptions);
    else if (e.target.value === 'Pushups')
      setGoalOptions(pushupsOptions);
    else if (e.target.value === 'Burpees')
      setGoalOptions(burpeesOptions);
    else if (e.target.value === 'Pullups')
      setGoalOptions(pullupsOptions);
  }
  const handleGoalChange = (e) => {
    setExcerciseValue((prev) => { return { ...prev, goal: e.target.value } });
  }

  const handleFormSubmit = async() => {
    // console.log("excerciseValue", excerciseValue)
    setFormOpen(false);
    setTaskOpen(true);
    const startDate=new Date();
    const progress=0;
    const userId = user._id;
    

    const url = "http://localhost:5000/profile/goal";
    const response = await fetch(url, {
      method:"POST", 
      body:JSON.stringify({startDate,progress,userId, excercise:excerciseValue.excercise, frequency:excerciseValue.goal}),
      headers:{ 
        Authorization:`Bearer ${token}`,
        "Content-type":"application/json"
      }
    })
    const data = await response.json();
    console.log("goal created",data);
  }

 


  const mobileView = useMediaQuery('(max-width:600px)');
  return (
    <div className='workoutCont'>
      <div className='backBtn'><IconButton onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></IconButton>
      </div>
      <Progress/>
      {formOpen &&
        <div className="goalFormContainer">
          <h1 className={`font-white ${mobileView ? "font-1" : "font-4"}`} >What's your Goal for this Week?</h1>
          <Box sx={{ minWidth: 120, margin: mobileView ? "1rem 0" : "2rem 0" }}>
            <FormControl fullWidth variant='outlined'>
              <InputLabelX>Excercise</InputLabelX>
              <SelectX
                label="Excercise"
                value={excerciseValue.excercise}
                onChange={handleExcerciseChange}
              >
                {
                  excerciseList.map((item, key) => (
                    <MenuItem id={key} sx={{ color: "white" }} value={item}>{item}</MenuItem>
                  ))
                }
              </SelectX>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant='outlined'>
              <InputLabelX>Goal</InputLabelX>
              <SelectX
                value={excerciseValue.goal}
                label="Goal"
                onChange={handleGoalChange}
              >
                {
                  goalOptions.map((item, key) => (
                    <MenuItem id={key} sx={{ color: "white" }} value={item}>{item}</MenuItem>
                  ))
                }
              </SelectX>
            </FormControl>
          </Box>
          
          <button className="btn" style={{ marginTop: "1rem" }} onClick={handleFormSubmit}>Submit</button>
        </div>}

     
    </div >
  )
}

export default Goal;
