import React from 'react'
import "../styles/Review.css"
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const Review = () => {
  return (
    <div className='reviewCont'>
        <div>
            <p className="font-5 text-align-center font-heading">What are Clients have to say?</p>
            <p className='font-grey text-align-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo autem ipsum sequi tempore nihil placeat rem quos tempora perferendis in temporibus harum.</p>
        </div>
        <div className='reviewCardCont'>
            <div className="reviewCard">
                <div className="display-flex-row align-item-center gap-2">
               <Avatar sx={{width:60, height:60, bgcolor:"purple", fontSize:"2rem"}}>H</Avatar>
               <div>
               <div className="font-2">Scragon Rex</div>
               <div className="font-grey">Scragon Rex</div>
               </div>
                </div>
                <p className="font-grey margin-top-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus </p>
            </div>
            <div className="reviewCard">
                <div className="display-flex-row align-item-center gap-2">
               <Avatar sx={{width:60, height:60, bgcolor:"purple", fontSize:"2rem"}}>H</Avatar>
               <div>
               <div className="font-2">Scragon Rex</div>
               <div className="font-grey">Scragon Rex</div>
               </div>
                </div>
                <p className="font-grey margin-top-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus </p>
            </div>
            <div className="reviewCard">
                <div className="display-flex-row align-item-center gap-2">
               <Avatar sx={{width:60, height:60, bgcolor:"purple", fontSize:"2rem"}}>H</Avatar>
               <div>
               <div className="font-2">Scragon Rex</div>
               <div className="font-grey">Scragon Rex</div>
               </div>
                </div>
                <p className="font-grey margin-top-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus </p>
            </div>

            <div className='cardLeft'>
            <ArrowCircleLeftOutlinedIcon sx={{fontSize:"2rem"}} />
            </div>

            <div  className='cardRight'>
            <ArrowCircleRightOutlinedIcon sx={{fontSize:"2rem"}} />
            </div>
        </div>
    </div>
  )
}

export default Review
