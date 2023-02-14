import React, { useState,useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Container, Paper, Button, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormField from "../components/FormField/FormField";
import { Wrapper } from "../components/styles/wrapper";
import Logo from "../components/Logo/Logo";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

export const PasswordBtn = styled(Button)({
  position: "absolute",
  right: "0",
  top: "25%",
  "&.focus": {
    backgroundColor: "transparent",
  },
});

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [ values, setValues ] = useState(initialState);
  const [ incognito, setIncognito ] = useState(true);
  const { user, isLoading } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleIncognito = () => {
    setIncognito(!incognito);
  };


  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate('/')
      })
    }
  },[user,navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill the required fields");
      return
    }
    if(isMember){
      dispatch(loginUser({ email: email, password: password }));
      return
    }
    dispatch(registerUser({ name, email, password }));
  
    
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Box bgcolor="rgba(45,40,94,0.1)">
      <Container>
        <Wrapper>
          <Paper
            elevation={3}
            sx={{ padding: "24px", width: "400px", paddingTop: "32px" }}
          >
            <Logo />
            <Typography
              component="p"
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                m: "16px 0",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {values.isMember ? 'Login' : 'Register'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              {/* name-input */}
              {!values.isMember && (
                <FormField
                type="text"
                value={values.name}
                labelName="Name"
                placeholder="Your name"
                name="name"
                handleChange={handleChange}
              />
        )}
              {/* email-input */}
              <FormField
                labelName="Email"
                type="email"
                value={values.email}
                placeholder="admin@demo.com"
                name="email"
                handleChange={handleChange}
              />
              {/* password input */}
              <Box sx={{ position: "relative" }}>
                <FormField
                  labelName="Password"
                  type={incognito ? "password" : "text"}
                  value={values.password}
                  placeholder="*****"
                  handleChange={handleChange}
                  name="password"
                />
                <PasswordBtn type="button" onClick={handleIncognito}>
                  {incognito ? (
                    <VisibilityOffIcon />
                  ) : (
                    <RemoveRedEyeOutlinedIcon />
                  )}
                </PasswordBtn>
              </Box>
              <Button
                type="submit"
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
                  mt: "16px",
                  "&:hover": {
                    color: "#7367F0",
                    backgroundColor: "transparent",
                  },
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </Button>
              <Typography align="center" marginTop={3}>
              {values.isMember ? 'Not a member?' : 'Already a member?'} 
                <Button type="button" onClick={toggleMember}>
                {values.isMember ? 'Register' : 'Login'}
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Register;
