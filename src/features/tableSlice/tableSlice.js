import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


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
  department: "Product Management",
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
  title: "Operator",
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
  city: "Washington",
  genderOptions: ["female", "male"],
  gender: "female",
  isEditing: false,
  editJobId: "",
};

export const fetchAsyncTable = createAsyncThunk(
  "users/fetchAsyncTable",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/users");
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRow = createAsyncThunk(
  "users/deleteRow",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.");
      }

      dispatch(removeRow({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createRow = createAsyncThunk(
  "users/createRow",
  async (
    { id, firstName, lastName, username, department, title, gender, city },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const newUser = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        username: username,
        department: department,
        title: title,
        city: city,
        gender: gender,
      };
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error('Can"t add new user');
      }
      const data = await response.json();
      dispatch(addNewRow(data));
      toast.success("Added Successfully");


    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      state.gender = "female";
      state.city = "Washington";
      state.title = "Operator";
      state.department = "Product Management";
    },
    addNewRow: (state, { payload }) => {
      state.users.unshift(payload);
      toast.success('User added successfully')
    },
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
    [createRow.pending]: (state) => {
      state.isLoading = true;
    },
    [createRow.fulfilled]: (state, action) => {
      state.users = [action.payload];
    },
    [createRow.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { removeRow, handleChange, clearValues, addNewRow } = tableSlice.actions;
export default tableSlice.reducer;
