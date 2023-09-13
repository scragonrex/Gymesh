import React, { useState } from 'react'
import '../styles/Workout.css'
import { CircularProgress, FormControl, IconButton, MenuItem, useMediaQuery } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SelectMod } from '../components/Utils';
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

    const handleExcerciseValue = (item) => {
        setTag(item);
    }

    const handleBack = () => {
        if (formOpen)
            navigate('/');
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
                'X-RapidAPI-Key': process.env.apiKey,
                'X-RapidAPI-Host': process.env.apiHost
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

    const mobileView = useMediaQuery('(max-width:720px)');

    return (
        <div className='pageContainer'>
            {isLoading && <CircularProgress color='success' />}
            {!mobileView && <div className='backBtn'><div className='btnCont' onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></div></div>}
            {formOpen && <div className="formContainer">
                <h1 className="font-white font-subHeading">What do you want to shape?</h1>
                {mobileView ?
                    <>
                        <SelectMod ide="sm3" title='Excercise' options={bodyParts} onChange={handleExcerciseValue} />
                        <button className="btn" onClick={handleSubmit}>Submit</button>
                    </>

                    : <><div className='display-flex-row' style={{ flexWrap: "wrap", gap: "1em", margin: "1em 0" }}>
                        {bodyParts.map((item, key) => (
                            <div className="tags" onClick={() => handleTag(item, key)} id={key}>{item}</div>
                        ))}
                    </div>
                        <button className="btn" onClick={handleSubmit}>Submit</button></>}
            </div>
            }
            {excerciseOpen &&
                <div className='excerciseCont'>
                    <div className="font-heading">Your Excercises</div>
                    <div className='cardCont'>
                        {excerciseList.map((item, key) => (
                            <div id={key} className="card">
                                <img src={item.gifUrl
                                } alt="gif" style={{ width: "100%" }} />
                                <div className={`${mobileView ? "font-0" : "font-para"}`} style={{ textAlign: "center" }}>{item.name.length > 40 ? item.name.substring(0, 40) + ".." : item.name}</div>
                            </div>
                        ))}
                    </div></div>}
        </div>
    )
}

export default Workout;
