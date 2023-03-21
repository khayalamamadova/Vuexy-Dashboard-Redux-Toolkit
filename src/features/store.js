import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice/tableSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        tableSlice: tableSlice,
    }
})