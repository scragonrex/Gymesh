import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

const BMR = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [result, setResult] = useState('');    
    const handleGenderChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
        else
            setGender();
    }

    const getBMR = async(e)=>{
        e.preventDefault();
        const url = `https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`;
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
    if(data.info.err) {console.log("working"); setResult(data.info.err)}
    else
    setResult(data.info.bmr);
} catch (error) {
	console.error(error);
}
    }
  return (
    <div className='display-flex-row gap-2'>
    <div className="formContainer">
        <div>
        <h1 className="font-subHeading text-align-center">Basal Mass Index (BMR)</h1>
        <div className="font-para font-grey">BMR is the number of calories required to keep your body functioning at rest</div>
        </div>
        <form onSubmit={getBMR}>
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
            <div className="display-flex-row justify-content-between " >
                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="male" onChange={handleGenderChange} checked={gender === 'male'} />} label="Male" />

                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="female" onChange={handleGenderChange} checked={gender === 'female'} />} label="Female" />
                        </div>
            <button onClick={getBMR} className="btn">Calculate</button>
        </form>
    </div>
    <div className="formContainer">
        <p>{result}</p>
    </div>
</div>
  )
}

export default BMR
