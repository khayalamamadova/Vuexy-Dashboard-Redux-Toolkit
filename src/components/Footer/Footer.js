import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Footer = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontSize: "16px",
            lineHeight: "24px",
            color: "textColor.main",
          }}
        >
          © 2023 Made{" "}
          <FavoriteBorderIcon
            sx={{
              color: "red",
              fontSize: "20px",
              display: "inline-block",
              margin: "0 4px",
            }}
          />{" "}
          With By{" "}
          <Typography
            component="a"
            href="https://pixinvent.com/"
            target="_blank"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              display: "inline-block",
              marginLeft: "4px",
            }}
          >
            {" "}
            Pixinvent
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
