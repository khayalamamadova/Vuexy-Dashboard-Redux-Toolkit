import React from "react";
import {
  Box,
  Button,
  Paper,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FormSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: "16px" }}>
      <InputLabel id={name}>{labelText || name}</InputLabel>
      <Select
        labelId={name}
        value={value}
        onChange={handleChange}
        label={labelText || name}
        name={name}
      >
        {list.map((select, id) => (
          <MenuItem key={id} value={select}>
            {select}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
