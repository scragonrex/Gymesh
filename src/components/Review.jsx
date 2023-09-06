import React, { useEffect, useState } from 'react'
import "../styles/Review.css"
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { AddCircle } from '@mui/icons-material';
import { Modal } from '@mui/material';
const Review = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleReviewIndex = (value) => {

        const size = index.length-1;
        if (value < 0)
            setActiveIndex(size);
        else if (value > size)
            setActiveIndex(0)
        else
            setActiveIndex(value);

        console.log("value", value)
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

    const [reviewList, setReviewList] = useState(index);
    const [modalOpen, setModalOpen] = useState(false);
    const [rname, setRname] = useState("");
    const [rdesignation, setRdesignation] = useState("");
    const [review, setReview] = useState("");
    const openReview = () => {
        setModalOpen(true);
    }

    const handleReview = async(e) => {
        e.preventDefault();
        console.log(rname,rdesignation,review)
        const response = await fetch("http://localhost:5000/profile/addReview",
        {
            method:"POST",
            body:JSON.stringify({rname,rdesignation,review}),
            headers:{"Content-type":"application/json"}
        });

        const data = await response.json();
    }

    const getReview = async()=>{
        const response = await fetch("http://localhost:5000/profile/getReviews",
        {
            method:"GET",
        });
        const data = await response.json();
        setReview(data.reviews);
    }

    useEffect(() => {
     getReview();
    }, [])
    
    return (
        <div className='review'>
            <div>
                <p className="font-5 font-heading">What are Clients have to say?</p>
                <p className='font-grey'>Reviews add values to our lives. Explore yourself and find about whether our website is good or not.</p>
                <div className="font-grey font-3">Add your review here  <div className="addBtn"><AddCircle onClick={openReview}  /></div></div>
                
            </div>
            <div className="reviewCont">
            <div className='reviewCardCont'>
                <div className="swipeWindow" style={{ transform: `translateX(-${activeIndex * 105}%` }}>

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
                <ArrowCircleLeftOutlinedIcon onClick={() => handleReviewIndex(activeIndex - 1)} sx={{ fontSize: "2rem", cursor: "pointer" }} />
                {

                    index?.length > 0 && index.map((item, key) => (
                        <>{key === activeIndex ? <CircleRoundedIcon sx={{ fontSize: "0.7rem" }} /> : <CircleOutlinedIcon sx={{ fontSize: "0.7rem" }} />
                        }</>
                    ))
                }
                <ArrowCircleRightOutlinedIcon onClick={() => handleReviewIndex(activeIndex + 1)} sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </div>
            </div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}>
                <div className="goalFormContainer">
                    <h2 className='font-white'>Add your review</h2>
                    <form onSubmit={handleReview}>
                        <div className='display-flex-col margin-top-1 margin-bottom-1'>
                            <label htmlFor="" className="font-white">Name</label>
                            <input className='inputCont'
                                name='email'
                                value={rname}
                                onChange={(e) => setRname(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className='display-flex-col margin-top-1 margin-bottom-1'>
                            <label htmlFor="" className="font-white">Designation</label>
                            <input className='inputCont'
                                name='email'
                                value={rdesignation}
                                onChange={(e) => setRdesignation(e.target.value)}
                                placeholder="Enter your designation"
                            />
                        </div>
                        <div className='display-flex-col margin-top-1 margin-bottom-1'>
                            <label htmlFor="" className="font-white">Review</label>
                            <textarea className='inputCont'
                                name='email'
                                rows="3"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required placeholder="Enter your review"
                            />
                        </div>
                        <button className='btn width-100' onClick={handleReview}>Add review</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Review
