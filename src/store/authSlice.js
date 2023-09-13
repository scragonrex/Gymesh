import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null,
    token:null,
    score:null,
    rank:null,
    // url:"https://gymesh-backend.onrender.com"
    url:"http://localhost:5000",
}

export const authSlice = createSlice({
    name:"auth", 
    initialState,
    reducers:{
        setLogin : (state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.score = action.payload.user.score;
        },
        setLogout : (state,action)=>{
            state.user = null;
            state.token = null;
        },
        setScore : (state,action)=>{
            state.score = action.payload.score;
        },
        setRank :(state,action)=>{
            state.rank = action.payload;
        }
    }
})

export const { setLogin, setLogout, setScore, setRank} = authSlice.actions;
export default authSlice.reducer;