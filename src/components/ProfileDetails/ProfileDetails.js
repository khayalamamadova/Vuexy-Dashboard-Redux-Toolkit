import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormField from "../FormField/FormField";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { updateUser } from "../../features/userSlice/userSlice";
import UserDetails from "../UserDetails/UserDetails";

const ProfileDetails = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
    lastName: user?.lastName || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill all fields");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <UserDetails userName={userData.name} userSurname={userData.lastName} />
      <Box component="form" sx={{paddingTop: '24px'}}>
        <FormField
          type="text"
          value={userData.name}
          labelName="Name"
          name="name"
          handleChange={handleChange}
        />
        <FormField
          type="text"
          value={userData.lastName}
          labelName="Last Name"
          name="lastName"
          handleChange={handleChange}
        />
        <FormField
          labelName="Email"
          type="email"
          value={userData.email}
          name="email"
          handleChange={handleChange}
        />
        <FormField
          labelName="Location"
          type="text"
          value={userData.location}
          name="location"
          handleChange={handleChange}
        />
        <Button
          sx={{
            fontSize: 16,
            border: "1px solid #7367F0",
            height: "38px",
            backgroundColor: "#7367F0",
            lineHeight: "30px",
            color: "#fff",
            minWidth: "150px",
            display: "inline-block",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "ease all 0.4s",
            width: "100%",
            "&:hover": {
              color: "#7367F0",
              backgroundColor: "transparent",
            },
          }}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <CircularProgress sx={{ color: "#fff" }} size="1.5rem" />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
