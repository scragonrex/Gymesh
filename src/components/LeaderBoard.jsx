import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import "../styles/LeaderBoard.css";
import { Bolt } from '@mui/icons-material';
import { Divider, useMediaQuery } from '@mui/material';
import { setRank } from '../store/authSlice';

const LeaderBoard = () => {
  const mobileView = useMediaQuery('(max-width:720px)');
  const token = useSelector((state) => state.auth.token);
  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

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
      let rank = "Not recorded";
      data.users.forEach((item, index) => {
        if (item?.name === userInfo?.name && item?.score === userInfo?.score)
          rank = index + 1;
      })
      dispatch(setRank(rank));
    }
  }

  useEffect(() => {
    if (token) { getLeaderBoard(); }
  }, [])
  return (
    <>
      {leaderList &&
        <div className="leader">
          {!mobileView && <img src="/assets/leader.png" alt="leader" />}
          <div className="display-flex-col justify-content-between">
            <div className="display-flex-col">
              <div className="font-white font-heading">Leaderboard</div>
              {mobileView && <img src="/assets/leader.png" alt="leader" />}
              <div className="font-grey font-para margin-top-1">Discover the platform where champions seize their well-deserved positions of glory and distinction. Explore your personal score and engage in spirited competition with fellow participants, as you endeavor to ascend to the pinnacle of success and radiate in the limelight
              </div>
            </div>
            <div className="leaderCont">
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

                <div className="display-flex-col margin-top-5">
                  <div className="font-white">{leaderList[2].name}</div>
                  <div className="pos">
                    {leaderList[1].score}
                  </div>
                </div>

              </div>
              <div className="leaderTable">
                <tr>
                  <th className='rankCell'>Rank</th>
                  <th className='nameCell'>Name</th>
                  <th className='scoreCell'>Score</th>
                </tr>
                <Divider sx={{ bgColor: "grey" }} />
                {leaderList.map((item, index) => (
                  <tr className={`${item.name == userInfo?.name && "activeUser"}`}>
                    <td className='rankCell'>{index + 1}</td>
                    <td className='nameCell'><div className="display-flex-row gap-2 align-item-center"><Avatar sx={{ bgcolor: "purple" }}>{item.name[0]}</Avatar>{item.name}</div></td>
                    <td className='scoreCell'><div className="display-flex-row gap-1 align-item-center"><Bolt sx={{ color: "green" }} />{item.score} </div></td>
                  </tr>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default LeaderBoard;
