import React, { useState } from 'react'
import "../styles/Review.css"
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
const Review = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleReview = (value) => {
       
        const size = index.length - 3;
        if (value < 0)
            setActiveIndex(size);
        else if (value > size)
            setActiveIndex(0)
        else
        setActiveIndex(value);

        console.log("value",value)
    }
    const index = [{
        name: "Scragon Rex1",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex2",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex3",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex4",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex5",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex6",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    {
        name: "Scragon Rex7",
        designation: "Web Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus "
    },
    ];
   
    return (
        <div className='reviewCont'>
            <div>
                <p className="font-5 text-align-center font-heading">What are Clients have to say?</p>
                <p className='font-grey text-align-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo autem ipsum sequi tempore nihil placeat rem quos tempora perferendis in temporibus harum.</p>
            </div>
    
           
            <div className='reviewCardCont'>
           
           <div className="swipeWindow" style={{ transform: `translateX(-${activeIndex * 34}%` }}>

               {
                   index?.length > 0 && index.map((item, key) => (
                       <div id={key} className="reviewCard">
                           <div className="display-flex-row align-item-center gap-2">
                               <Avatar sx={{ width: 60, height: 60, bgcolor: "purple", fontSize: "2rem" }}>{item.name[0]}</Avatar>
                               <div>
                                   <div className="font-2">{item.name}</div>
                                   <div className="font-grey">{item.designation}</div>
                               </div>
                           </div>
                           <p className="font-grey margin-top-2">{item.description}</p>
                       </div>
                   ))
               }
           </div>
           
       </div>
           
            
           
            <div className="display-flex-row gap-2 align-item-center">
            <ArrowCircleLeftOutlinedIcon onClick={() => handleReview(activeIndex - 1)} sx={{ fontSize: "2rem", cursor:"pointer" }} />
                {
                      
                    index?.length>0 && index.slice(0,index.length-2).map((item,key)=>(
                        <>{key === activeIndex ? <CircleRoundedIcon sx={{fontSize:"0.7rem"}}/> : <CircleOutlinedIcon sx={{fontSize:"0.7rem"}}/>
                        }</>
                    ))
                }
                 <ArrowCircleRightOutlinedIcon onClick={() => handleReview(activeIndex + 1)} sx={{ fontSize: "2rem",cursor:"pointer" }} />
                
            </div>
        </div>
    )
}

export default Review
