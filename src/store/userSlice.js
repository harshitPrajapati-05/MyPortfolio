
import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    name:"",
    email:"",
    isActive:true,
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        newState:(state,action)=>{
            const{ name , email} = action.payload;
            state.name=name;
            state.email=email;
            state.isActive=false;
        },
        
        isActive:(state)=> state.isActive=false,

        defaultState:(state)=>{
            state.email="Sir";
            state.name="Sir@gmail.com"

        }
    }
})

export const {  newState ,defaultStat, isActive }  = userSlice.actions ;
export default userSlice.reducer;