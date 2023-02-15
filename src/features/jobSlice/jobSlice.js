import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../common/Api/globalApi";
import { addUser, getUser, removeUser } from "../../utilis/userLocalStorage";
import { logoutUser } from "../userSlice/userSlice";


const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const response = await customFetch.post("/jobs", job, {
        headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging out!");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
        state.isLoading = true
    },
    [createJob.fulfilled]: (state) => {
        state.isLoading = false;
        toast.success('Job created successfully')
    },
    [createJob.pending]: (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload)
    }
  }
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
