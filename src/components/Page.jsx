import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'
import "../styles/Page.css"
const Page = ({page, count, handleNextPage, handlePrevPage}) => {

  let temp=1;
  if(page>5 && page+5<count)
  {
    temp=page+1
  }
  else if(page+5>=count)
  {
    temp=count-5;
  }
  console.log("temp",temp);
  const [current, setCurrent] = useState(temp);
  console.log("current",current);
  const divs = Array.from({ length: count }, (value, index) => (
    <div className={`pageNo ${index+1===page && "active"}`} key={index}>{index + 1}</div>
  ));
  return (
    <div className='display-flex-row gap-2 align-item-center margin-bottom-2'>
      <div className="pageNo" onClick={handlePrevPage}><ArrowBackIos /></div>
     {divs.slice(temp-2,temp+5)}
     <div className="pageNo" onClick={handleNextPage}><ArrowForwardIos /></div>
    </div>
  )
}

export default Page;
