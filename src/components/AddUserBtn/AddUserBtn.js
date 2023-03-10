import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import tableSlice, {
  handleChange,
  clearValues,
  addNewRow,
  fetchAsyncTable,
} from "../../features/tableSlice/tableSlice";
import { toast } from "react-toastify";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";
import { useNavigate } from "react-router-dom";



export default function AddUserBtn() {
  const [state, setState] = useState({
    right: false,
  });
  const navigate = useNavigate()
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
    dispatch(
      addNewRow({
        firstName,
        lastName,
        username,
        department,
        city,
        gender,
        title,
      })
    );
    dispatch(clearValues());
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const list = () => (
    <Box sx={{ width: 374, padding: "24px" }} title="presentation">
      <h3>{isEditing ? "edit user" : "add user"}</h3>
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
          labelText="title"
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
          <Button onClick={toggleDrawer(anchor, true)}>Add Button</Button>
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
