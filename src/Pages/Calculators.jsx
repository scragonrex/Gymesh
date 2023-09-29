import React, { useState } from 'react'
import "../styles/Calculators.css"
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import BMI from '../components/BMI';
import BMR from '../components/BMR';
import TDEE from '../components/TDEE';
const Calculators = () => {
  const navigate = useNavigate();
  const mobileView = useMediaQuery('(max-width:700px)');
  const [calculator, setCalculator] = useState('BMI');
  //----------- Back Button-----------------------//
  const handleBack = () => {
    navigate('/');
  }

  const handleCalculator = (e)=>{
    setCalculator(e.currentTarget.innerText);
  }
  return (
    <div className='calculators'>
       {/* {!mobileView && <div className='backBtn'><div className='btnCont' onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></div>
      </div>} */}
        <h1 className="font-heading font-white text-align-center margin-top-1">Check your Health</h1>
      <div className="calculatorCont">
        <div className="display-flex-col">
          <div className="calcOptions">
            <div className={`calcOption ${calculator==="BMI" && "active"}`} 
            onClick={handleCalculator}>
              {/* <img src="/assets/BMI.png" alt="BMI" /> */}
              BMI</div>
            <div className={`calcOption ${calculator==="BMR" && "active"}`} onClick={handleCalculator}>
            {/* <img src="/assets/BMR.png" alt="BMR" /> */}
            BMR</div>
            <div className={`calcOption ${calculator==="TDEE" && "active"}`} onClick={handleCalculator}>
            {/* <img src="/assets/TDEE.png" alt="TDEE" /> */}
            TDEE</div>
          </div>
          {calculator=="BMI" && <BMI/>}
          {calculator=="BMR" && <BMR/>}
          {calculator=="TDEE" && <TDEE/>}
        </div>
      </div>
    </div>
  )
}
 
export default Calculators
