import { CircularProgress, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'

const BMI = () => {
    const mobileView = useMediaQuery('(max-width:720px)');
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState();
    const [isLoading, setIsLoading] = useState(false);
 
    const getBMI = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        console.log(height, weight)
        const url = `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`;
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
            setResult(data.info);
            setIsLoading(false);

        } catch (error) {
            console.error(error);
            setIsLoading(false);

        }
    }
    return (
        <div className={`${mobileView ? 'display-flex-col':'display-flex-row'}`}>
            {mobileView && <div className='imageBMI margin-top-1'>
                    <img src="/assets/BMI.png" alt="BMI" style={{ width:"60%"}}/>
                </div>}
            <div className="formContainer" style={{ width: mobileView?"100%":"40%", padding:mobileView && "2rem 0.5rem 0 0.5rem"}}>
                <div>
                    <h1 className="font-subHeading text-align-center">Body Mass Index (BMI)</h1>
                    <div className="font-para font-grey">BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat</div>
                </div>
                <form onSubmit={getBMI}>
                    <div className="display-flex-col">
                        <label htmlFor="">Weight</label>
                        <input type="number" required className="inputCont" placeholder='Enter your weight in kg' value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="display-flex-col">
                        <label htmlFor="">Height</label>
                        <input type="number" required className="inputCont" placeholder='Enter your height in cm' value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <button onClick={getBMI} className="btn">{isLoading ? <CircularProgress style={{ color: "black", width: "20px", height: "20px" }} /> : "Calculate"}</button>
                </form>
            </div>


            <div className='result'>
                {!mobileView && <div className='imageBMI'>
                    <img src="/assets/BMI.png" alt="BMI" style={{ width:"60%"}}/>
                </div>}
                {result && <div className="display-flex-col gap-2">
                    <div >BMI: <span className={`${result?.bmi > 24.9 || result?.bmi<18.5 ? "resultDanger" : "resultNormal"}`}>
                        {result?.bmi.toFixed(2)}
                        </span></div>
                    <div >Health status: <span  className={`${result?.bmi > 24.9 || result?.bmi<18.5 ? "resultDanger" : "resultNormal"}`}>
                        {result?.health}
                        </span></div>
                    <div >Healthy BMI Range: <span  className={`${result?.bmi > 24.9 || result?.bmi<18.5 ? "resultDanger" : "resultNormal"}`}>
                        {result?.healthy_bmi_range}
                        </span></div>
                </div>}
            </div>
        </div>
    )
}

export default BMI
