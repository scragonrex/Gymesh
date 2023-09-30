import { useMediaQuery } from '@mui/material';
import React from 'react'
 
const ExcerciseCard = ({key,item}) => {
  const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <div id={key} className="card">
                                <img src={item.gifUrl
                                } alt="gif" style={{ width: "100%" }} />
                                <div className="display-flex-row gap-2">
                                    <span className="resultNormal">{item?.bodyPart}</span>
                                    <span className="resultInfo">{item?.target}</span>
                                </div>
                                <div className={`${mobileView ? "font-0" : "font-bigger-para"}`}>{item.name.length > 30 ? item.name.substring(0, 30) + ".." : item.name}</div>
                            </div>
  )
}

export default ExcerciseCard
