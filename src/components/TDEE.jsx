import React, { useState } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

const TDEE = () => {
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

    const getTDEE = async(e)=>{
        e.preventDefault();
        const url = 'https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=81&height=172&activitylevel=msdsd&age=26&gender=male';
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
	console.log(data);
} catch (error) {
	console.error(error);
}
    }
  return (
    <div className='display-flex-row'>
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
            
            <div className="display-flex-row justify-content-between " >
                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="male" onChange={handleGenderChange} checked={gender === 'male'} />} label="Male" />

                            <FormControlLabel sx={{ color: "#75756b" }} control={<Checkbox color="success" value="female" onChange={handleGenderChange} checked={gender === 'female'} />} label="Female" />
                        </div>
            <button onClick={getTDEE} className="btn">Calculate</button>
        </form>
    </div>
    <div className="result">
        <p>{result}</p>
    </div>
</div>
  )
}

export default TDEE
