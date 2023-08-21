import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/LeaderBoard.css";

const LeaderBoard = () => {
  const token = useSelector((state) => state.auth.token);
  const [leaderList, setLeaderList] = useState([{name:"abhishek", score:"66"},{name:"abhishek", score:"66"},{name:"abhishek", score:"66"}]);

  const getLeaderBoard = async () => {
    const url = "http://localhost:5000/profile/getLeaderBoard";
    // const url="https://gymesh-backend.onrender.com/getLeaderBoard";
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`, "Content-type": "application/json" }
    });

    const data = await response.json();
    if (data.status === "success") {
      setLeaderList(data.users);
    }
  }

  useEffect(() => {
    if (token) { getLeaderBoard(); }
  }, [])
  return (
    <>
      {leaderList && 
        <div className="leaderBoard">
        <div className="font-4 font-white">Leaderboard</div>
          <div className='display-flex-row justify-content-between width-100 margin-top-2'>
        <div className="scoreCont">
        <img src="/assets/silver.png" alt="s2" />
          <div className='text-align-center'>
          <div>{leaderList[1].name}</div> 
          <div className='batch'>{leaderList[1].score}</div>
          </div>
          </div>
        <div className="scoreCont">
          <img src="/assets/gold.png" alt="s1" />
          <div className='text-align-center'>
          <div>{leaderList[0].name}</div> 
          <div className='batch'>{leaderList[0].score}</div>
          </div>
          </div>
        <div className="scoreCont">
        <img src="/assets/bronze.png" alt="s3" />
        <div className='text-align-center'>
          <div>{leaderList[2].name}</div> 
          <div className='batch'>{leaderList[2].score}</div>
          </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default LeaderBoard;
