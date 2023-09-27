import React, { useState } from 'react'

const BMI = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState();

    const getBMI = async (e) => {
        e.preventDefault();
        const url = 'https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=65&height=167';
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
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='display-flex-row'>
            <div className="formContainer">
                <div>
                <h1 className="font-subHeading text-align-center">Body Mass Index (BMI)</h1>
                <div className="font-para font-grey">BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat</div>
                </div>
                <form onSubmit={getBMI}>
                    <div className="display-flex-col">
                        <label htmlFor="">Weight</label>
                        <input type="number" required className="inputCont" placeholder='Enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="display-flex-col">
                        <label htmlFor="">Height</label>
                        <input type="number" required className="inputCont" placeholder='Enter your height' value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <button onClick={getBMI} className="btn">Calculate</button>
                </form>
            </div>
            <div className="result">
                <p>{result?.bmi}</p>
                <p>{result?.health}</p>
                <p>{result?.healthy_bmi_range}</p>
            </div>
        </div>
    )
}

export default BMI
