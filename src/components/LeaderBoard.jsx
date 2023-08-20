import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const LeaderBoard = () => {
    const token = useSelector((state)=>state.auth.token);
    const [leaderList, setLeaderList] = useState([]);

    const getLeaderBoard = async()=>{
        const url="http://localhost:5000/profile/getLeaderBoard";
        // const url="https://gymesh-backend.onrender.com/getLeaderBoard";
        const response = await fetch(url,{
            method:"GET",
            headers:{Authorization:`Bearer ${token}`, "Content-type":"application/json"}
        });

        const data = await response.json();
        if(data.status==="success")
        {
            setLeaderList(data.users);
        }
    }

    useEffect(()=>{
        if(token)
       { getLeaderBoard();}
    },[])
  return (
    <div>
      
    </div>
  )
}

export default LeaderBoard;
