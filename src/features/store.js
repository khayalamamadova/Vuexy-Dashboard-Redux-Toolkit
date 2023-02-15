import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice/jobSlice";
import userSlice from "./userSlice/userSlice";



export const store = configureStore({
    reducer:{
        user: userSlice,
        job: jobSlice
    }
})