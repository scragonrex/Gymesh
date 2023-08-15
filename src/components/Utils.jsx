import { ClickAwayListener, InputLabel, OutlinedInput, Popover, Select, styled } from '@mui/material';
import { useState } from 'react';
import '../styles/Utils.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SelectX = styled(Select)(
  {
    color: "rgb(6, 207, 106) !important",
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(6, 207, 106)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(6, 207, 106)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '.MuiSvgIcon-root ': {
      fill: "rgb(6, 207, 106) !important",
    },
  }
)

const InputLabelX = styled(InputLabel)(
  {
    color: "rgb(6, 207, 106) !important",
    "&.Mui-focused": {
      color: "white"
    }
  }
)

const OutlinedInputX = styled(OutlinedInput)(
  {
    color: "rgb(6, 207, 106) !important",
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(6, 207, 106)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(6, 207, 106)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '.MuiSvgIcon-root ': {
      fill: "rgb(6, 207, 106) !important",
    },

  }
)



const SelectMod = ({ options, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(title);

  const handleChange = (e,reason) => {
    
    setSelectValue(e.currentTarget.textContent);
    const id = document.getElementById("optionCont1");
    const icon = document.getElementById("expandIcon");

    // if(reason==="clickaway");
    // {
    // return;
    // }
    icon.classList.toggle("rotate");
    id.classList.toggle("expanded");
  }
  const handleSelect = () => {
    const id = document.getElementById("optionCont1");
    const icon = document.getElementById("expandIcon");
    icon.classList.toggle("rotate");
    id.classList.toggle("expanded");
  }
  const handleClickAway = ()=>{
    const id = document.getElementById("optionCont1");
    const icon = document.getElementById("expandIcon");
    icon.classList.remove("rotate");
    id.classList.remove("expanded");
  }


  return (

      <ClickAwayListener onClickAway={handleClickAway}>
    <div style={{ position: "relative" }}>
      <div className='selectCont' onClick={handleSelect}>{selectValue} <div id='expandIcon'><ExpandMoreIcon /></div> </div>
      <div className='optionCont' id="optionCont1" >
        {options?.map((item, key) => (
          <div className='option' id={key} value={item} onClick={handleChange}>{item}</div>
          ))
        }
      </div>
      
    </div>
        </ClickAwayListener>
  )
}
export { InputLabelX, SelectX, OutlinedInputX, SelectMod };
