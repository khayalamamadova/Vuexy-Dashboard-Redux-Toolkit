import * as React from "react";
import Box from "@mui/material/Box";

export default function CustomizedProgressBars({mainColor,secondaryColor, progress}) {
  return (
    <>
      <Box sx={{
position: 'relative',
minWidth: '50px',
height: '10px',
background: mainColor,
borderRadius: '6px',
'&::after': {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  background: secondaryColor,
  width: progress,
  height:'100%',
  borderRadius: '6px',
}
      }}></Box>
    </>
  );
}
