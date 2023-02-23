import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"


const initialState = {
    users: [],
    isLoading: false
}

export const fetchAsyncTable  = createAsyncThunk(
    'users/fetchAsyncTable',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://dummyjson.com/posts')
            const data = await response.json()
             console.log(data);
            return data
        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    }
) 

export const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [fetchAsyncTable.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAsyncTable.fulfilled]: (state,action) => {
            state.users = action.payload
        },
        [fetchAsyncTable.rejected]: (state,action) => {
            state.isLoading = true
            toast.error(action.payload)
        },
    }
})

export default tableSlice.reducer