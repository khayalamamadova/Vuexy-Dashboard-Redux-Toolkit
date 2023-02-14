import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../common/Api/globalApi";
import { addUser, getUser, removeUser } from "../../utilis/userLocalStorage";

const initialState = {
  user: getUser(),
  isSidebarOpen: false, 
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
      try {
        const response = await customFetch.post("/auth/login", user);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
    }
  );

  export const updateUser = createAsyncThunk(
    'user/updateUser', async (user,thunkAPI) => {
      try {
        const response = await customFetch.patch('/auth/updateUser',user,{
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`
          }
        });
        return response.data
      } catch (error) {
        if(error.response.status === 401) {
          thunkAPI.dispatch(logoutUser())
          return thunkAPI.rejectWithValue('Unauthorized! Logging Out')
        }
        return thunkAPI.rejectWithValue(error.response.data.msg)
      }
    }
  )

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state)=>{
      state.user = null;
      removeUser();
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { user } = payload;
      state.user = user;
      addUser(user)
      toast.success(`Welcome ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
        state.isLoading = true;
      },
      [loginUser.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        addUser(user)
        toast.success(`Welcome back ${user.name}`);
      },
      [loginUser.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
      [updateUser.pending]: (state) => {
        state.isLoading = true;
      },
      [updateUser.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        addUser(user)
        toast.success('User Updated!');
      },
      [updateUser.rejected]: (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      },
  },
});

export const {logoutUser} = userSlice.actions 
export default userSlice.reducer;
