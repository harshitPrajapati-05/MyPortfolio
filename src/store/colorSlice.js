import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    primaryClr:"blue",
    secondaryClr:"black",
    isChanged:false,
}


const colorSlice = createSlice({
    name:"color",
    initialState,
    reducers:{
        setColor:(state,action)=>{
            const {primaryClr ,secondaryClr}= action.payload;
            state.primaryClr=primaryClr;
            state.secondaryClr=secondaryClr;
            state.isChanged=true;

        },
        defaultColor: state=>{
            state.primaryClr='#F5AC0E';
            state.backgroundClr="black";
            state.isChanged=false;
        }

    }
})

export const {setColor ,defaultColor}= colorSlice.actions;
export default colorSlice.reducer;