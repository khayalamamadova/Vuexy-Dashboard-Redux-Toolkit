import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../common/Api/globalApi";
import { addUser, getUser, removeUser } from "../../utilis/userLocalStorage";
import { logoutUser } from "../userSlice/userSlice";
import { showLoading,hideLoading,getAllJobs } from "../allJobsSlice/allJobsSlice";


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

export const deleteJob = createAsyncThunk(
  'job/deleteJob',
  async (jobId,thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    try{
      const response = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`
        }
      })
      thunkAPI.dispatch(getAllJobs())
      return response.data.msg
    } catch (error) {
      thunkAPI.dispatch(hideLoading()) 
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }

  }
)

export const editJob = createAsyncThunk(
  'job/editJob',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      console.log(jobId);

      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
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
    setEditJob: (state, {payload}) => {
      return {...state,isEditing: true,...payload}
    }
  },
  extraReducers: {
    [createJob.pending]: (state) => {
        state.isLoading = true
    },
    [createJob.fulfilled]: (state) => {
        state.isLoading = false;
        toast.success('Job created successfully')
    },
    [createJob.rejected]: (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload)
    },
    [deleteJob.fulfilled]: (state, {payload})=>{
      toast.success(payload)
    },
    [deleteJob.rejected]: (state, {payload})=>{
      toast.error(payload)
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Job modified successfully');
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  }
});

export const { handleChange, clearValues,setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
