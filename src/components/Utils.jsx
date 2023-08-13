import { InputLabel, OutlinedInput, Popover, Select, styled } from '@mui/material';
import { useState } from 'react';

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
  const [selectValue, setSelectValue] = useState("");
  const handleChange=(e)=>{
    setSelectValue(e.currentTarget.textContent);
    setMenuOpen(false);
  }
  return (
    <>
    <input onClick={(e)=>setMenuOpen(!menuOpen)} placeholder={title} value={selectValue}/>
      {menuOpen && options?.map((item,key)=>(
        <div id={key} value={item} onClick={handleChange}>{item}</div>
      ))
      }
      </>
  )
}
export { InputLabelX, SelectX, OutlinedInputX, SelectMod };
