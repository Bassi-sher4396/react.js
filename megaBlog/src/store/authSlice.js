import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
status : false,
userData: null
} 

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers :{ 
        login:(state , action )=>{
            state.status = true;
            state.userData = action.payload.userData
        },
        logout:(state,action)=>{
            state.status = false;
            state.userData = null
        }
    }
})
export const {login,logout} = authSlice.actions;
//login aur logout reducers ke ations hai
export default authSlice.reducer