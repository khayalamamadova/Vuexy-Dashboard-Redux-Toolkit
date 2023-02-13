import React from "react";
import { Box, Grid, Container } from "@mui/material";
import { PrimaryButton } from "../components/styles/button";
import Logo from "../components/Logo/Logo";
import landing from "../assets/images/landing.png";

const Landing = () => {
  return (
    <main>
      <Box component="nav">
        <Container sx={{ margin: "42px 0"}}>
          <Grid container sx={{margin: 0}} spacing={3}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                  height: "600px",
                  overflow: "hidden",
                  background: "#F8F7FA",
                  borderRadius: "12px",
                  padding: "42px",
                }}
                component="div"
              >
                <Box
                  component="img"
                  src={landing}
                  alt="landing page"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Logo/>
                <PrimaryButton sx={{ width: "100%",mt: '16px' }} to='/register'>
                  Login/Registr
                </PrimaryButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
};

export default Landing;
