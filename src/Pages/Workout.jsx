import React, { useState } from 'react'
import '../styles/Workout.css'
import { CircularProgress, Pagination, colors, useMediaQuery } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SelectMod } from '../components/Utils';
import Page from '../components/Page';
import styled from '@emotion/styled';
import ExcerciseCard from '../components/ExcerciseCard';
const Workout = () => {
    const mobileView = useMediaQuery('(max-width:720px)');
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
                'X-RapidAPI-Key': "a47529c91emsha25daef1e66a341p1ba7adjsn5c4aed17e5e6",
                'X-RapidAPI-Host': "exercisedb.p.rapidapi.com"
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

   //--------------Pagination--------------------------//

   const [page, setPage] = useState(1);
   const handleNextPage = () => {
    const totalPage = Math.ceil(excerciseList?.length/15);
    if(page+1<=totalPage)
    setPage(page+1);
  }
   const handlePrevPage = () => {
    if(page-1>=1)
    setPage(page-1);
  }

//   const handlePage = (event,value)=>{
//     setPage(value)
//   }

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
                        {excerciseList?.slice((page - 1) * 15, ((page - 1) * 15) + 15).map((item, key) => (
                            <ExcerciseCard key={key} item={item}/>
                        ))}
                    </div>
                    
                    <Page count={Math.ceil(excerciseList?.length/15)} page={page} handleNextPage = {handleNextPage} handlePrevPage={handlePrevPage}/>
                    </div>}
        </div>
    )
}

export default Workout;
