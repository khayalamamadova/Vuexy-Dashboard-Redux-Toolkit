import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <>
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
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
