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
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    }
) 

export const deleteRow = createAsyncThunk(
    'users/deleteRow',
    async (id,{rejectedValue, dispatch}) => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`, {
                method: 'DELETE',
            })
            console.log(response);
            if(!response.ok) {
                throw new Error('Server error.Can\'t delete a task')
            }
            dispatch(removeRow({id}))
        } catch (error) {
            return rejectedValue(error.message)
        }
    }
)

export const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {
        removeRow: (state,action) => {
            state.users = state.users.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers:{
        [fetchAsyncTable.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAsyncTable.fulfilled]: (state,action) => {
            state.isLoading = false

            state.users = action.payload
        },
        [fetchAsyncTable.rejected]: (state,action) => {
            state.isLoading = false
            toast.error(action.payload)
        },
        [deleteRow.pending]: (state)=> {
            state.isLoading = true
        },
        [deleteRow.fulfilled]: (state,action)=> {
            state.isLoading = false
            state.users = action.payload
        },
        [deleteRow.rejected]: (state,action)=> {
            state.isLoading = false
            toast.error(action.payload)
        },


    }
})

export const {removeRow} = tableSlice.actions
export default tableSlice.reducer
