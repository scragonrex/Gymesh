import React, { useState } from 'react'
import { Checkbox, FormControlLabel, Slider } from '@mui/material'

const TDEE = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [result, setResult] = useState('');
    const [activity, setActivity] = useState();
    const handleGenderChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
        else
            setGender();
    }

    const getTDEE = async (e) => {
        e.preventDefault();
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
        } catch (error) {
            console.error(error);
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
        <div className='display-flex-row gap-2'>
            <div className="formContainer">
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
                    <div className="display-flex-row justify-content-between " >
                        <label htmlFor="">Gender</label>
                        <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="male" onChange={handleGenderChange} checked={gender === 'male'} />} label="Male" />

                        <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="female" onChange={handleGenderChange} checked={gender === 'female'} />} label="Female" />
                    </div>
                    <button onClick={getTDEE} className="btn">Calculate</button>
                </form>
            </div>
            <div className="formContainer">
                <p>{result.tdee}</p>
            </div>
        </div>
    )
}

export default TDEE
