import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import colorSlice from "./colorSlice";


const store = configureStore({
    reducer:{
        user: userSlice,
        color:colorSlice,
    }
})

export default store