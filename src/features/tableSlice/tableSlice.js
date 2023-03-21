import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const USERS_URL = 'http://localhost:3001/users';


const initialState = {
  users: [],
  isLoading: false,
  firstName: "",
  lastName: "",
  username: "",
  departmentOptions: [
    "Product Management",
    "Research and Development",
    "Sales",
    "Marketing",
    "Support",
    "Legal",
    "Engineering",
    "Human Resources",
  ],
  department: "",
  titleOptions: [
    "Developer II",
    "Sales Associate",
    "Professor",
    "Software Test Engineer IV",
    "Geological Engineer",
    "Operator",
    "VP Accounting",
    "Financial Analyst",
    "Geologist III",
    "Programmer Analyst I",
    "VP Quality Control",
    "Assistant Manager",
    "Research Nurse",
    "Cost Accountant",
    "Senior Cost Accountant",
    "Sales Representative",
    "Recruiting Manager",
    "Structural Analysis Engineer",
    "Quality Engineer",
  ],
  title: "",
  cityOptions: [
    "Arvada",
    "West Windsor",
    "Manchester",
    "Yarmouth",
    "Nashville",
    "Fayetteville",
    "Montgomery",
    "Salinas",
    "Savannah",
    "Anchorage",
    "O'Neals",
    "Washington",
  ],
  city: "",
  genderOptions: ["female", "male"],
  gender: "",
  isEditing: false,
  editJobId: "",
};

// get users
export const fetchAsyncTable = createAsyncThunk(
  "users/fetchAsyncTable",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USERS_URL)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// delete user
export const deleteRow = createAsyncThunk(
  "users/deleteRow",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(`${USERS_URL}/${id}`);
      dispatch(removeRow({id}));
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// create user
export const createUser = createAsyncThunk(
  'users/createUser',
  async({firstName,lastName,username,department,title,city,gender}, {rejectWithValue, dispatch}) => {
    try {
      const response = await axios.post(USERS_URL,{firstName,lastName,username,department,title,city,gender})
      toast.success('User created successfully')

      dispatch(clearValues())
      return response.data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// edit user
export const editUser = createAsyncThunk(
  'users/editUser',
  async({id,user,navigate}, {rejectWithValue,dispatch}) => {
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, user)
      toast.success('User modified successfully...')
      navigate('/')
      dispatch(clearValues())
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    removeRow: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.gender = "";
      state.city = "";
      state.title = "";
      state.department = "";
    },
    updateUser: (state, action) => {
      return {...state, isEditing:true, ...action.payload}
    }
  },
  extraReducers: {
    [fetchAsyncTable.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncTable.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    },
    [fetchAsyncTable.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteRow.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.users.unshift(action.payload);
      state.isLoading = false;
    },
    [createUser.rejected]: (state,action) => {
      state.isLoading = false;
      toast.error(action.payload)
    },
    [editUser.pending]: (state) => {
      state.isLoading = true
    },
    [editUser.fulfilled]: (state) => {
      state.isLoading = false
    },
  },
});

export const { handleChange, clearValues, removeRow,updateUser } = tableSlice.actions;
export default tableSlice.reducer;