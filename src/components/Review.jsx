import React, { useEffect, useState } from 'react'
import "../styles/Review.css"
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { AddCircle } from '@mui/icons-material';
import { Alert, Modal, Snackbar } from '@mui/material';
const Review = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    //-------------------Alert----------------------------//
    const [alert, setAlert] = useState({ open: false, status: " ", message: "" });
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ ...alert, open: false });
    };

    //---------------------Sliding window ----------------//
    const handleReviewIndex = (value) => {
        console.log("active index",value);
        const size = reviewList.length - 1;
        if (value < 0)
            setActiveIndex(size);
        else if (value > size)
            setActiveIndex(0)
        else
            setActiveIndex(value);
    }

    //To make the slider move automatically
    const handleReviewSlider = () => {
        const value = activeIndex+1;
        const size = reviewList.length - 1;
        if (value < 0)
            setActiveIndex(size);
        else if (value > size)
            setActiveIndex(0)
        else
            setActiveIndex(value);
    }

    const [reviewList, setReviewList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [rname, setRname] = useState("");
    const [rdesignation, setRdesignation] = useState("");
    const [review, setReview] = useState("");
    const openReview = () => {
        setModalOpen(true);
    }

    //Adding review API call
    const handleReview = async (e) => {
        e.preventDefault();
        console.log(rname, rdesignation, review)
        const response = await fetch("http://localhost:5000/profile/addReview",
            {
                method: "POST",
                body: JSON.stringify({ rname, rdesignation, review }),
                headers: { "Content-type": "application/json" }
            });

        const data = await response.json();
        getReview();
        setAlert({ open: true, status: data.status, message: data.message });
        setModalOpen(false);

    }


    //Getting review list
    const getReview = async () => {
        const response = await fetch("http://localhost:5000/profile/getReviews",
            {
                method: "GET",
            });
        const data = await response.json();
        setReviewList(data.reviews);
    }


    useEffect(() => {
        if(reviewList?.length===0) getReview();
        const intervalId = setInterval(handleReviewSlider, 2500);
        return () => {
            console.log("unmounted");
            clearInterval(intervalId);
        };
    }, [activeIndex]);

    return (
        <div className='review'>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleAlertClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleAlertClose} severity={alert.status} variant='filled' sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <div>
                <p className="font-headingfont-heading">What are Clients have to say?</p>
                <p className='font-grey'>Reviews add values to our lives. Explore yourself and find about whether our website is good or not.</p>
                <div className="font-grey font-subHeading">Add your review here  <div className="addBtn"><AddCircle onClick={openReview} /></div></div>

            </div>
            <div className="reviewCont">
                <div className='reviewCardCont'>
                    <div className="swipeWindow" style={{ transform: `translateX(-${activeIndex * 100}%` }}>

                        {
                            reviewList?.length > 0 && reviewList.map((item, key) => (
                                <div id={key} className="reviewCard">
                                    <div className="display-flex-row align-item-center gap-2">
                                        <Avatar sx={{ width: 60, height: 60, bgcolor: "purple", fontSize: "2rem" }}>{item.name[0]}</Avatar>
                                        <div>
                                            <div className="font-2">{item.name}</div>
                                            <div className="font-grey">{item.designation}</div>
                                        </div>
                                    </div>
                                    <p className="font-grey margin-top-2">{item.review}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="display-flex-row gap-2 align-item-center">
                    <ArrowCircleLeftOutlinedIcon onClick={() => handleReviewIndex(activeIndex - 1)} sx={{ fontSize: "2rem", cursor: "pointer" }} />
                    {

                        reviewList?.length > 0 && reviewList.map((item, key) => (
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
