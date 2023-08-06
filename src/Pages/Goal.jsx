import { ArrowBack } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, IconButton, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { InputLabelX, SelectX } from '../components/Utils'
import { useNavigate } from 'react-router-dom';
import '../styles/Workout.css'

const Goal = () => { 
  const navigate = useNavigate();
  const [taskOpen, setTaskOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(true)
  const [task, setTask] = useState(0);

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
    if (formOpen)
      navigate('/home');
    else if (taskOpen) {
      setTaskOpen(false);
      setFormOpen(true);
    }
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

  const handleFormSubmit = () => {
    // console.log("excerciseValue", excerciseValue)
    setFormOpen(false);
    setTaskOpen(true);
  }

  const handleTaskSubmit = () => {
    console.log('totalTask', task)

  }

  const handleChange = (e) => {
    if (e.target.checked)
      setTask(task + 1);
    else
      setTask(task - 1);
  }
  const mobileView = useMediaQuery('(max-width:600px)');
  return (
    <div className='workoutCont'>
      <div className='backBtn'><IconButton onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></IconButton>
      </div>
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

      {taskOpen && <div className='goalFormContainer'>
        <h1 className={`font-white-para ${mobileView ? "font-1" : "font-normal"}`}>Review your Task</h1>
        <p className="font-white">Were you able to complete your assigned goals?</p>
        <div className="display-flex-col" style={{ marginTop: "1rem" }}>
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day1" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day2" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day3" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day4" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day5" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day6" />
          <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" onChange={handleChange} />} label="Day7" />
        </div>
        <Tooltip title="You can lie to anyone, except yourself. So please be honest"><button className="btn" style={{ marginTop: "1rem" }} onClick={handleTaskSubmit}>Submit</button></Tooltip>
      </div>}
    </div >
  )
}

export default Goal;
