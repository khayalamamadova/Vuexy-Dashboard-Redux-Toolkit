import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../common/Api/globalApi";
import { addUser, getUser, removeUser } from "../../utilis/userLocalStorage";

const initialState = {
  user: getUser(),
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

const userSlice = createSlice({
  name: "user",
  initialState,
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
  },
});

export default userSlice.reducer;
