import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormField from "../../components/FormField/FormField";
import FormSelect from "../../components/FormSelect/FormSelect";
import { PrimaryButton } from "../../components/styles/button";
import {
  clearValues,
  editUser,
  handleChange,
} from "../../features/tableSlice/tableSlice";


const Single = () => {
  const {
    isLoading,
    firstName,
    lastName,
    username,
    departmentOptions,
    department,
    cityOptions,
    city,
    genderOptions,
    gender,
    editJobId,
    isEditing,
    title,
    titleOptions,
  } = useSelector((store) => store.tableSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username) {
      toast.error("Please fill all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editUser({
          id: editJobId,
          navigate,
          user: {
            firstName,
            lastName,
            title,
            department,
            gender,
            username,
          },
        })
      );
      return;
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Box>
      <Typography component="h3" sx={{ textTransform: "uppercase" }}>
        edit user
      </Typography>
      <Box component="form" onClick={(e) => e.preventDefault()}>
        <FormField
          type="text"
          labelName="First Name"
          name="firstName"
          value={firstName}
          handleChange={handleInput}
        />
        <FormField
          type="text"
          labelName="Last Name"
          name="lastName"
          value={lastName}
          handleChange={handleInput}
        />
        <FormField
          type="text"
          labelName="User Name"
          name="username"
          value={username}
          handleChange={handleInput}
        />
        <FormSelect
          name="department"
          labelText="Department"
          value={department}
          handleChange={handleInput}
          list={departmentOptions}
        />
        <FormSelect
          name="title"
          labelText="Title"
          value={title}
          handleChange={handleInput}
          list={titleOptions}
        />
        <FormSelect
          name="city"
          labelText="City"
          value={city}
          handleChange={handleInput}
          list={cityOptions}
        />
        <FormSelect
          name="gender"
          labelText="Gender"
          value={gender}
          handleChange={handleInput}
          list={genderOptions}
        />
        <PrimaryButton sx={{textTransform: 'uppercase'}} type="submit" disabled={isLoading} onClick={handleSubmit}>
          save
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default Single;
