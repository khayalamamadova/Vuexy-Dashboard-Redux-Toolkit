import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  clearValues,
  createUser,
} from "../../features/tableSlice/tableSlice";
import { toast } from "react-toastify";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";

export default function AddUserBtn() {
  const [state, setState] = useState({
    right: false,
  });
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username) {
      toast.error("Please fill all fields");
      return;
    }
    if(!isEditing) {
      dispatch(
        createUser({
          firstName,
          lastName,
          username,
          department,
          city,
          gender,
          title,
        })
      );
    } else {
      console.log('hello');
    }
    dispatch(clearValues());
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const list = () => (
    <Box sx={{ width: 374, padding: "24px" }} title="presentation">
      <Typography component='h4' sx={{textTransform: 'uppercase', color: '#7367F0',fontSize: '16px', fontWeight: '600', lineHeight: '24px',textAlign:'center'}}>add new user</Typography>
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
        <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
          Submit
        </Button>
        <Button type="button" onClick={() => dispatch(clearValues())}>
          Clear
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{background: '#7367F0', color: '#fff',border: '1px solid transparent', '&:hover': {
            color: '#7367F0',
            border: '1px solid #7367F0'
          }}} onClick={toggleDrawer(anchor, true)}> + Add new user</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
