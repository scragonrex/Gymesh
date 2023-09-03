import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/LeaderBoard.css";

const LeaderBoard = () => {
  const token = useSelector((state) => state.auth.token);
  const [leaderList, setLeaderList] = useState([{ name: "abhishek", score: "66" }, { name: "abhishek", score: "66" }, { name: "abhishek", score: "66" }]);

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
        <div className="leader">
          <img src="/assets/leader.png" alt="leader" />
          <div className="display-flex-col justify-content-between">
          <div className="display-flex-col">
            <div className="font-5 font-white font-heading">Leaderboard</div>
            <div className="font-grey margin-top-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, totam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, ullam!
            </div>
          </div>
          <div className="leaderBoard">
            <div className="display-flex-col margin-top-3">
              <div className="font-white">{leaderList[1].name}</div>
              <div className="pos">
                {leaderList[1].score}
              </div>
            </div>

            <div className="display-flex-col">
              <div className="font-white">{leaderList[0].name}</div>
              <div className="pos">
                {leaderList[0].score}
              </div>
            </div>

            <div className="display-flex-col margin-top-4">
              <div className="font-white">{leaderList[2].name}</div>
              <div className="pos">
                {leaderList[1].score}
              </div>
            </div>
           
          </div>
          </div>
        </div>
      }
    </>
  )
}

export default LeaderBoard;
