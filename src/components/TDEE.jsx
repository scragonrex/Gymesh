import React, { useState } from 'react'
import { Checkbox, CircularProgress, FormControlLabel, Slider, useMediaQuery } from '@mui/material'

const TDEE = () => {
    const mobileView = useMediaQuery('(max-width:720px)');
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [result, setResult] = useState('');
    const [activity, setActivity] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleGenderChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
        else
            setGender();
    }

    const getTDEE = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const url = `https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${weight}&height=${height}&activitylevel=${activity}dsd&age=${age}&gender=${gender}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a47529c91emsha25daef1e66a341p1ba7adjsn5c4aed17e5e6',
                'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setResult(data.info)
            console.log(data);
            setIsLoading(false);

        } catch (error) {
            console.error(error);
            setIsLoading(false);

        }
    }

    //---------------------Slider-----------------------------//
    const handleActivityLevel = (value) => {
        if (value === 25)
            setActivity('se');
        if (value === 50)
            setActivity('la');
        if (value === 75)
            setActivity('ma');
        if (value === 100)
            setActivity('va');
    }

    return (
        <div className={`${mobileView ? 'display-flex-col':'display-flex-row'}`}>
            {mobileView && <div className='imageBMI margin-top-1'>
                    <img src="/assets/TDEE.png" alt="TDEE" style={{ width:"60%"}}/>
                </div>}
                <div className="formContainer" style={{ width: mobileView?"100%":"40%", padding:mobileView && "2rem 0.5rem 0 0.5rem"}}>
                <div>
                    <h1 className="font-subHeading text-align-center">Total Daily Energy Expenditure (TDEE)</h1>
                    <div className="font-para font-grey">TDEE is the total amount of calories burned when the activity rate is taken into account</div>
                </div>
                <form onSubmit={getTDEE}>
                    <div className="display-flex-col">
                        <label htmlFor="">Weight</label>
                        <input type="number" required className="inputCont" placeholder='Enter your weight in kg' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="display-flex-col">
                        <label htmlFor="">Height</label>
                        <input type="number" required className="inputCont" placeholder='Enter your height in cm' value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className="display-flex-col">
                        <label htmlFor="">Age</label>
                        <input type="number" required className="inputCont" placeholder='Enter your age' value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Activity level</label>
                        <Slider
                            step={25}
                            valueLabelDisplay="auto"
                            sx={{ color: "#00cd6d" }}
                            onChange={handleActivityLevel}
                            min={25}
                            max={100}
                        />
                    </div>
                    <div className="display-flex-col">
                        <label htmlFor="">Gender</label>
                    <div className="display-flex-row justify-content-between" >
                        <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="male" onChange={handleGenderChange} checked={gender === 'male'} />} label="Male" />

                        <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="female" onChange={handleGenderChange} checked={gender === 'female'} />} label="Female" />
                    </div>
                    </div>
                    <button onClick={getTDEE} className="btn">{isLoading ? <CircularProgress style={{ color: "black", width: "20px", height: "20px" }} /> : "Calculate"}</button>
                </form>
            </div>

             <div className='result'>
               {!mobileView && <div className='imageBMI'>
                    <img src="/assets/TDEE.png" alt="BMI" style={{width:"100%"}}/>
                </div>}
                {result && <div className='font-subHeading text-align-center'>
                   TDEE :<span className="resultNormal">{result.tdee.toFixed(2)}</span>
                </div>}
            </div>
        </div>
    )
}

export default TDEE
