import React from "react";
import { Container, Box, Typography } from "@mui/material";
import error from '../assets/images/error.gif'
import { Link } from "react-router-dom";
import { styled } from '@mui/system';


const CustomLink = styled(Link)`
    color: red;
    cursor: pointer;
    color: #212331;
    font-size: 18px;
    margin-top: 16px;
    display: inline-block;
`


const Error = () => {
  return (
    <Container maxWidth="lg" sx={{p: '24px 0'}}>
        <Box sx={{height: 350, overflow: 'hidden'}}>
          <Box
            component="img"
            src={error}
            alt="error"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      <Typography align="center" component='h3' sx={{fontSize: '24px', fontWeight: 'bold', color: 'primary.main', }}>Page Not Found</Typography>
      <Box align="center">
              <CustomLink to='/'>Back to home</CustomLink>
      </Box>
    </Container>
  );
};

export default Error;
