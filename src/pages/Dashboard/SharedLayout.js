import { Box,Container } from "@mui/material";
import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import BigSidebar from "../../components/BigSidebar/BigSidebar";
import { styled } from '@mui/material/styles';
import Appbar from "../../components/Appbar/Appbar";
import Footer from "../../components/Footer/Footer";

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
      </Box>
      <Box sx={{ width: sidebar ? "calc(100% - 260px)" :"calc(100% - 76px)" , background:'#F8F7FA',  marginLeft: sidebar ? '260px' : '76px', overflow: 'auto'}}>
        <Appbar sidebar={sidebar}/>
        <Container sx={{marginTop: "120px", height: "100%" ,}}>
          <Outlet/>
          <Box sx={{padding: '36px 0'}}>
            <Footer/>
          </Box>
        </Container>
      </Box>
    </MainWrapper>
  );
};

export default SharedLayout;
