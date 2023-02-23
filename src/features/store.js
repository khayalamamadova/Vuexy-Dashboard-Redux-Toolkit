import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "./allJobsSlice/allJobsSlice";
import jobSlice from "./jobSlice/jobSlice";
import tableSlice from "./tableSlice/tableSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        job: jobSlice,
        allJobs: allJobsSlice,
        tableSlice: tableSlice
    }
})