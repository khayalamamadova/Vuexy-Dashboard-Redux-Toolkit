import React from "react";
import { TextField } from "@mui/material";

const FormField = ({name,labelName,type,placeholder,value,handleChange}) => {
  return (
    <>
      <TextField
        label={labelName}
        type={type}
        value={value}
        variant="outlined"
        fullWidth
        size="small"
        placeholder={placeholder}
        sx={{ m: "16px 0" }}
        onChange={handleChange}
        name={name}
      />
    </>
  );
};

export default FormField;
