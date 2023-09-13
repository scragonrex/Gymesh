import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Checkbox, Divider, FormControlLabel, Snackbar } from '@mui/material'
import '../styles/Workout.css'
import '../styles/Profile.css'
import { useSelector } from 'react-redux';
import LeaderBoard from '../components/LeaderBoard';
import { ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    // const mobileView = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const rank = useSelector((state) => state.auth.rank);
    const [weight, setWeight] = useState(user?.weight ? user.weight : "");
    const [age, setAge] = useState(user?.age ? user.age : "");
    const [gender, setGender] = useState(user?.gender ? user.gender : "");
    const [name, setName] = useState(user?.name ? user.name : "");
    const [editOpen, setEditOpen] = useState(!Boolean(user?.age && user?.weight && user?.gender));
    const [alert, setAlert] = useState({ open: false, status: "", message: "" });

    const handleGenderChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
        else
            setGender();
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editOpen === false)
            setEditOpen(true);
        else {
            console.log(age, weight, gender, name);
            // const url = "https://gymesh-backend.onrender.com/profile/addProfile";
            const url = "http://localhost:5000/profile/addProfile";
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ weight, age, gender, name }),
                headers: { Authorization: `Bearer ${token}`, "Content-type": "application/json" },

            });
            const data = await response.json();
            console.log("response", data);
            if (data.status === "success") {
                setEditOpen(false);
                setAlert({
                    status: "success",
                    open: true,
                    message: data.message
                })
            }
            else if (data.status === "error") {
                setWeight(user.weight ? user.weight : "");
                setAge(user.age ? user.age : "");
                setName(user.name ? user.name : "");
                setGender(user.gender ? user.gender : "");
                setEditOpen(false);
                setAlert({
                    status: "error",
                    open: true,
                    message: data.message
                })
            }
        }
    }

    //Modifies the date format and addition
    const handleDate = (date, num) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + num);
        const temp = newDate.getDate() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear();
        return temp;
    }

    //Retrieving completed , progress goals and not completed goals
    const [completedGoalsList, setCompletedGoalsList] = useState([]);
    const [progressGoalsList, setProgressGoalsList] = useState([]);
    const [notCompletedGoalsList, setNotCompletedGoalsList] = useState([]);
    const getUsersGoalInfo = async () => {
        const url = "http://localhost:5000/profile/getUserGoalsInfo";
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`, "Content-type": "application/json" }
        })
        const data = await response.json();
        setCompletedGoalsList(data.completedGoals);
        setProgressGoalsList(data.progressGoals);
        setNotCompletedGoalsList(data.notCompletedGoals);
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert((prev) => {
            return {
                ...prev,
                open: false
            }
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();

        setEditOpen(false);
    }



    useEffect(() => {
        getUsersGoalInfo();
    }, [])

    return (
        <div className='profileCont'>
            <div className="formContainer font-white">
                {editOpen && <div className="font-subHeading ">Complete your Profile!</div>}
                <form>

                    {!editOpen ? <div className='font-heading font-big'>Hi, {name}</div>
                        : <div><label className='margin-0'>Name</label><input type="text" className="inputCont width-100" placeholder='Enter your name' minLength='3' value={name} onChange={(e) => setName(e.target.value)} /></div>}

                    {!editOpen ? <div >Weight: {weight}</div>
                        : <div><label className="margin-0">Weight</label><input id='edit1' className="inputCont width-100" autofocus type="number" placeholder='Enter your Weight' value={weight} min='10' onChange={(e) => setWeight(e.target.value)} /></div>}

                    {!editOpen ? <div>Age: {age}</div>
                        : <div><label className="margin-0">Age</label><input className='inputCont width-100' type="number" placeholder='Enter your Age' min='10' value={age} onChange={(e) => setAge(e.target.value)} /></div>}

                    {!editOpen ? <div>Gender: {gender}</div>
                        :
                        <div className="display-flex-row justify-content-between " >
                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="Male" onChange={handleGenderChange} checked={gender === 'Male'} />} label="Male" />

                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="Female" onChange={handleGenderChange} checked={gender === 'Female'} />} label="Female" />
                        </div>
                    }
                    <div className="btnGroup">
                        <button className="btn width-100" onClick={handleSubmit}>Edit</button>
                        {editOpen && <button className='cancelBtn width-100' onClick={handleCancel}>Cancel</button>}
                    </div>
                </form>
            </div>

            <div className="userCont">
                <p className="font-big">Rank: {rank}</p>
                <Accordion sx={{ backgroundColor: "rgb(41 41 41)", color: "white", minHeight: "3.5em" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore sx={{ color: "white" }} />}
                    >
                        Goals completed: {completedGoalsList?.length}
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: "rgb(41 41 41)" }}>
                        {
                            completedGoalsList?.length > 0 && completedGoalsList.map((item, key) => (
                                <>
                                    <div>
                                        <div className="display-flex-row justify-content-between">
                                            <div>Start date:{handleDate(item.startDate, 0)}</div>
                                            <div>End date: {handleDate(item.startDate, 7)}</div>
                                        </div>
                                        <div className="display-flex-row justify-content-between">
                                            <div>Excercise: {item.excercise}</div>
                                            <div>Frequency: {item.frequency}</div>
                                        </div>
                                    </div>
                                    <div className="margin-top-1 margin-bottom-1">
                                        <Divider sx={{ bgcolor: "white" }} />
                                    </div>
                                </>
                            ))
                        }

                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: "rgb(41 41 41)", color: "white", minHeight: "3.5em" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore sx={{ color: "white" }} />}
                    >
                        Goals uncompleted: {notCompletedGoalsList?.length}
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: "rgb(41 41 41)" }}>
                        {notCompletedGoalsList?.length > 0 && notCompletedGoalsList.map((item, key) => (
                            <>
                                <div>
                                    <div className="display-flex-row justify-content-between">
                                        <div>Start date: {handleDate(item.startDate,0)}</div>
                                        <div>End date: {handleDate(item.startDate,7)}</div>
                                    </div>
                                    <div className="display-flex-row justify-content-between">
                                        <div>Excercise: {item.excercise}</div>
                                        <div>Frequency: {item.frequency}</div>
                                    </div>
                                    <div>Completed: {item.progressValue}%</div>
                                </div>
                                <div className="margin-top-1 margin-bottom-1">
                                    <Divider sx={{ bgcolor: "white" }} />
                                </div>
                            </>
                        ))}
                    
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: "rgb(41 41 41)", color: "white", minHeight: "3.5em" }}>
                    <AccordionSummary onClick={() => navigate('/goal')}
                    >
                        Goals in progress: {progressGoalsList?.length}
                    </AccordionSummary>

                </Accordion>
            </div>

            <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert variant="filled" onClose={handleAlertClose} severity={alert.status} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Profile;
