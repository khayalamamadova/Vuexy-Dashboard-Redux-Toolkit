import { Box } from "@mui/material";
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
      <Box component="aside" sx={{width: sidebar ? '260px' : '76px',  position: "fixed",
  left: 0,
  top: 0,
  minHeight: "100vh",
  padding: "0 14px", bgcolor: 'secondary.main','&:hover': {
    width: '260px',

  }}}>
        <BigSidebar  toggleMenu={toggleSidebar} sidebar={sidebar}/>
        <SmallSidebar />
      </Box>
      <Box sx={{ width: sidebar ? "calc(100% - 260px)" :"calc(100% - 76px)" , background: "red",  marginLeft: sidebar ? '260px' : '76px'}}>
        <Appbar />
        <Box sx={{ marginTop: "120px", background: "pink", height: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </MainWrapper>
  );
};

export default SharedLayout;
