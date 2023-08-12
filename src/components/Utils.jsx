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

const InputMod = (props) => {
  const [anchor,setAnchor]=useState(null);
  const { helperText, error } = props;
  const open = Boolean(anchor)
  const handleClose = () => {
    setAnchor(null);
  };
  const handleBlur=()=>{
    return props.onBlur;
  }
  console.log("error", error, helperText)
  return (<>
    <input className='inputCont' type={props.type} placeholder={props.placeholder} onChange={props.onChange} onBlur={handleBlur} value={props.value} required name={props.name}/>
    <Popover
      open={open}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >{props.helperText}</Popover>
  </>
  )
}
export { InputLabelX, SelectX, OutlinedInputX, InputMod };
