import { AddCircle, ArrowBack } from '@mui/icons-material';
import { Alert, Box, FormControl, IconButton, MenuItem, Modal, Snackbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { InputLabelX, SelectMod, SelectX } from '../components/Utils'
import { useNavigate } from 'react-router-dom';
import '../styles/Workout.css'
import { useSelector } from 'react-redux';
import GoalsList from '../components/GoalsList';

const Goal = () => {
  const mobileView = useMediaQuery('(max-width:700px)');
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [modalOpen, setModalOpen] = useState(false);
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
  const [goalsList, setGoalsList] = useState();

  const handleBack = () => {
    navigate('/');
  }

  //--------------------------Alert---------------------------//
  const [alert, setAlert] = useState({ status: "", open: false, message: "" });
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ ...alert, open: false });
  };

  const handleExcerciseChange = (e) => {
    console.log(e);
    setExcerciseValue((prev) => { return { ...prev, excercise: e } });
    if (e === 'Running')
      setGoalOptions(runningOptions);
    else if (e === 'Cycling')
      setGoalOptions(cyclingOptions);
    else if (e === 'Pushups')
      setGoalOptions(pushupsOptions);
    else if (e === 'Burpees')
      setGoalOptions(burpeesOptions);
    else if (e === 'Pullups')
      setGoalOptions(pullupsOptions);
  }
  const handleGoalChange = (e) => {
    setExcerciseValue((prev) => { return { ...prev, goal: e } });
  }

  const handleFormSubmit = async () => {
    // console.log("excerciseValue", excerciseValue)
    const startDate = new Date();
    const progress = [];
    const userId = user._id;

    // const url = "https://gymesh-backend.onrender.com/goals/createGoal";
    const url = "http://localhost:5000/goals/createGoal";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ startDate, progress, userId, excercise: excerciseValue.excercise, frequency: excerciseValue.goal }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json"
      }
    })
    const data = await response.json();
    if (data.status === "success")
      getGoals();

    setModalOpen(false);
    setAlert({status:data.status,open:true,message:data.msg})
  }

  const getGoals = async () => {
    // const url = "https://gymesh-backend.onrender.com/goals/getGoals";
    const url = `http://localhost:5000/goals/getGoals`;
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`, "Content-type": "application/json" }
    })

    const data = await response.json();
    const goals = data.filter((item) => item.userId === user._id)
    console.log("goals arrived", goals);
    setGoalsList(goals);
  }

  const handleAddBtn = () => {
    console.log("add")
    setModalOpen(true);
  }

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, [])



  return (
    <div className='workoutCont' style={{ justifyContent: "flex-start" }}>
       <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleAlertClose} severity={alert.status} variant='filled' sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
      <div className='backBtn'><div className='btnCont' onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></div>
      </div>
      <div className='goalsListCont'>
        <div className='font-4 text-align-center font-white'>Your Goals</div>{
          goalsList?.length > 0 ?
            goalsList?.map((item, key) => (
              <GoalsList item={item} id={key} index={key + 1} getGoals={getGoals} />
            )) : <div className='font-3 font-white text-align-center'>No Goals Available. Click on the + icon to continue</div>
        }
      </div>
      <div className='addBtn addBtnPos' onClick={handleAddBtn}><AddCircle sx={{ color: "rgb(6, 207, 106)", fontSize: "4rem" }} /></div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}>
        <div className="goalFormContainer">
          <h1 className={`font-white ${mobileView ? "font-1" : "font-4"}`} >What's your Goal for this Week?</h1>
          <Box sx={{ minWidth: 120, margin: mobileView ? "1rem 0" : "2rem 0" }}>
              <SelectMod
                title="Excercise"
                options={excerciseList}
                ide="sm1"
                // value={excerciseValue.excercise}
                onChange={handleExcerciseChange}
              >
                {/* {
                  excerciseList.map((item, key) => (
                    <MenuItem id={key} sx={{ color: "white" }} value={item}>{item}</MenuItem>
                  ))
                } */}
              </SelectMod>
          </Box>

          <Box sx={{ minWidth: 120 }}>
              <SelectMod
                // value={excerciseValue.goal}
                ide="sm2"
                title="Goal"
                options={goalOptions}
                onChange={handleGoalChange}
              >
                {/* {
                  goalOptions.map((item, key) => (
                    <MenuItem id={key} sx={{ color: "white" }} value={item}>{item}</MenuItem>
                  ))
                } */}
              </SelectMod>
          </Box>

          <button className="btn" style={{ marginTop: "1rem" }} onClick={handleFormSubmit}>Submit</button>
        </div>
      </Modal>



    </div >
  )
}

export default Goal;
