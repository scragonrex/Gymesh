import React, { useState } from 'react'
import '../styles/Workout.css'
import { CircularProgress, FormControl, IconButton, MenuItem, useMediaQuery } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { InputLabelX, SelectX } from '../components/Utils';
const Workout = () => {
    const navigate = useNavigate(); 
    const [formOpen, setFormOpen] = useState(true);
    const [excerciseOpen, setExcerciseOpen] = useState(false);
    const [tag, setTag] = useState(''); 
    const [excerciseList, setExcerciseList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [bodyParts, setBodyParts] = useState([
        "back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs", 
        "neck",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist"
    ]) 

    const handleTag = (item, key) => {
        setTag(item);
        const all = document.querySelectorAll(".tags");
        all.forEach((item) => item.style.cssText = 'border:none; color:white;');
        document.getElementById(key).style.cssText = 'border:2px solid rgb(6, 207, 106); color:rgb(6, 207, 106);';
    }

    const handleBack = () => {
        if (formOpen)
            navigate('/home');
        else if (excerciseOpen) {
            setExcerciseOpen(false);
            setFormOpen(true);
        }
    }

    const handleSubmit = async () => {
        setFormOpen(false);
        setIsLoading(true);
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${tag}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a47529c91emsha25daef1e66a341p1ba7adjsn5c4aed17e5e6',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setExcerciseList(result);
            setIsLoading(false);
            setExcerciseOpen(true);
        } catch (error) {
            setFormOpen(true);
            console.error(error);
            setIsLoading(false);
        }
    }

    const mobileView = useMediaQuery('(max-width:600px)');

    return (
        <div className='workoutCont'>
            {isLoading && <CircularProgress color='success' />}
            <div className='backBtn'><IconButton onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></IconButton></div>
            {formOpen && <div className="formContainer">
                <div>
                    <h1 className={`font-white ${mobileView ? "font-1" : "font-4"}`}>What do you want to shape?</h1>
                </div>
                {mobileView?<> <FormControl fullWidth>
                    <InputLabelX  >Exercise</InputLabelX>
                  <SelectX
           
                    // value={age}
                    label="Age"
                  // onChange={handleChange}
                  >
                  {bodyParts.map((item, key) => (
                    <MenuItem sx={{ color: "white" }} className="tags" onClick={() => handleTag(item, key)} id={key} value={item}>{item}</MenuItem>
                ))}
                  </SelectX>
                </FormControl>
                <button className="btn" onClick={handleSubmit}>Submit</button></>:<><div className='display-flex-row' style={{ flexWrap: "wrap", gap: "1em", margin: "1em 0" }}>
                    {bodyParts.map((item, key) => (
                        <div className="tags" onClick={() => handleTag(item, key)} id={key}>{item}</div>
                    ))}
                </div>
                <button className="btn" onClick={handleSubmit}>Submit</button></>}
            </div>}
            {excerciseOpen &&
                <div className='excerciseCont'>
                    <h1 className="font-white">Your Excercises</h1>
                    <div className='cardCont'>
                        {excerciseList.map((item, key) => (
                            <div id={key} className="card"> 
                                <img src={item.gifUrl
                                } alt="gif" style={{ width: "100%" }} />
                                <div className='font-white' style={{ textAlign: "center" }}>{item.name}</div>
                            </div>
                        ))}
                    </div></div>}
        </div>
    )
}

export default Workout
