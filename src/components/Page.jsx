import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'

const Page = ({page, count, onChange}) => {

  const divs = Array.from({ length: count }, (value, index) => (
    <div key={index}>{index + 1}</div>
  ));
  return (
    <div className='display-flex-row gap-2'>
      <div className="pageNo"><ArrowBackIos/></div>
     {divs}
     <div className="pageNo"><ArrowForwardIos/></div>
    </div>
  )
}

export default Page;
