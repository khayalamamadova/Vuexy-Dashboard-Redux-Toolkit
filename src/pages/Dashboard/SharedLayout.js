import { Box,Container } from "@mui/material";
import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import BigSidebar from "../../components/BigSidebar/BigSidebar";
import SmallSidebar from "../../components/SmallSidebar/SmallSidebar";
import { styled } from "@mui/system";
import Appbar from "../../components/Appbar/Appbar";

const MainWrapper = styled("main")({
  display: "flex",
  height: "100vh",
  overflow: "auto",
});

const SharedLayout = () => {
  const [sidebar, setSidebar] = useState(true)
  const toggleSidebar = () => setSidebar(!sidebar)


  return (
    <MainWrapper component="main">
      <Box component="aside" sx={{width: sidebar ? '260px' : '82px',  position: "fixed",
  left: 0,
  top: 0,
  zIndex: '9999',
  minHeight: "100vh",
  padding: "0 14px", bgcolor: 'secondary.main','&:hover': {
    width: '260px',

  }}}>
        <BigSidebar  toggleMenu={toggleSidebar} sidebar={sidebar}/>
        <SmallSidebar />
      </Box>
      <Box sx={{ width: sidebar ? "calc(100% - 260px)" :"calc(100% - 76px)" , background:'#F8F7FA',  marginLeft: sidebar ? '260px' : '76px'}}>
        <Appbar sidebar={sidebar}/>
        <Container sx={{marginTop: "120px", height: "100%" }}>
          <Outlet/>
        </Container>

      </Box>
    </MainWrapper>
  );
};

export default SharedLayout;
