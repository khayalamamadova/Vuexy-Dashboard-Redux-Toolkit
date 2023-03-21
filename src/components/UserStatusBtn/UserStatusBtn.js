import { Box } from "@mui/material";
import React from "react";

const UserStatusBtn = ({name}) => {
  return (
    <>
      <Box
        sx={{
          padding: "0 10px",
          bgcolor: "rgba(75,70,92,0.12)",
          borderRadius: "4px",
          color: "rgb(168,170,174)",
          fontSize: "13px",
          lineHeight: "26px",
          mt: "16px",
          fontWeight: 400,
          minWidth: "40px",
          height: "26px",
          textTransform: "capitalize",
        }}
      >{name}
      </Box>
    </>
  );
};

export default UserStatusBtn;
