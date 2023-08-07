import { InputLabel, OutlinedInput, Select, styled } from '@mui/material';

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

export {InputLabelX,SelectX, OutlinedInputX};
