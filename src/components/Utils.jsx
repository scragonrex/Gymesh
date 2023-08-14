import { InputLabel, OutlinedInput, Popover, Select, styled } from '@mui/material';
import { useState } from 'react';
import '../styles/Utils.css'
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

const SelectCont = styled('div')(
  {
    padding: "1rem",
    border: "1.5px solid rgb(6, 207, 106)",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  }
)

const OptionCont = styled('div')({
  position: "absolute",
  width: "100%",
  height: "0",
  borderRadius: "0 0 5px 5px",
  cursor: "pointer",
  backgroundColor: "#121212",
  overflow: "auto",
  transition: "0.3s",
})

const Option = styled('div')({
  padding: "0.5rem 1rem",
  color: "white",
   cursor: "pointer",
   "&:hover":{
    backgroundColor:"#181819",
   },
 

})

const SelectMod = ({ options, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(title);
  const handleChange = (e) => {
    setSelectValue(e.currentTarget.textContent);
    const id = document.getElementById("optionCont");
    id.style.height="0";
  }
  const handleSelect = () => {
    const id = document.getElementById("optionCont");
    id.classList.toggle("expanded");
  }
  


  return (

    <div style={{ position: "relative" }}>
      <SelectCont onClick={handleSelect}>{selectValue}</SelectCont>
      <OptionCont id="optionCont" >
        {options?.map((item, key) => (
          <Option id={key} value={item} onClick={handleChange}>{item}</Option>
        ))
        }
      </OptionCont>
    </div>
  )
}
export { InputLabelX, SelectX, OutlinedInputX, SelectMod };
