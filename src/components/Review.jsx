import React from 'react'
import "../styles/Review.css"
import Avatar from '@mui/material/Avatar';
const Review = () => {
  return (
    <div className='reviewCont'>
        <div>
            <p className="font-5 font-heading">What are Clients have to say?</p>
            <p className='font-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo autem ipsum sequi tempore nihil placeat rem quos tempora perferendis in temporibus harum.</p>
        </div>
        <div>
            <div className="reviewCard">
                <div className="display-flex-row align-item-center gap-2">
               <Avatar sx={{width:60, height:60, bgcolor:"purple"}}>H</Avatar>
               <div>
               <div className="font-2">Scragon Rex</div>
               <div className="font-grey">Scragon Rex</div>
               </div>
                </div>
                <p className="font-grey margin-top-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum repellat at minus </p>
            </div>
        </div>
    </div>
  )
}

export default Review
