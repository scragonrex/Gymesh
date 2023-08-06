import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:null,
    token:null,
    score:null
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
            console.log("newScore",action.payload.score )
            state.score = action.payload.score;
        }
    }
})

export const { setLogin, setLogout, setScore} = authSlice.actions;
export default authSlice.reducer;