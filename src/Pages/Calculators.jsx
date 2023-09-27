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
       {!mobileView && <div className='backBtn'><div className='btnCont' onClick={handleBack}><ArrowBack sx={{ color: "white", fontSize: "2rem" }} /></div>
      </div>}
      <div className="calculatorCont">
        <h1 className="font-heading text-align-center">Check your Health</h1>
        <div className="display-flex-row">
          <div className="calcOptions">
            <div className="calcOption" onClick={handleCalculator}>BMI</div>
            <div className="calcOption" onClick={handleCalculator}>BMR</div>
            <div className="calcOption" onClick={handleCalculator}>TDEE</div>
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
