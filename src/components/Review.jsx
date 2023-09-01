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
        name: "Scragon Rex",
        designation: "React Developer",
        description: "I've used this website for research, and it's been a helpful resource"
    },
    {
        name: "Eren",
        designation: "Backend Developer",
        description: "The search function is efficient, making it easy to find specific information"
    },
    {
        name: "Logan",
        designation: "Android Developer",
        description: "The website's responsiveness on mobile devices is impressive. It's been a reliable source of information"
    },
    {
        name: "Abhishek",
        designation: "ML Enthusiastic ",
        description: "The content is top-notch, and the user experience is excellent. Keep up the great work!"
    },
    {
        name: "Vivek",
        designation: "Data Scientist",
        description: " It's user-friendly, but it could benefit from more frequent updates in certain sections"
    },

 
    ];
   
    return (
        <div className='reviewCont'>
            <div>
                <p className="font-5 text-align-center font-heading">What are Clients have to say?</p>
                <p className='font-grey text-align-center'>Reviews add values to our lives. Explore yourself and find about whether our website is good or not</p>
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
