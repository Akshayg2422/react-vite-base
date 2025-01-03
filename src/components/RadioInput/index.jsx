import React from "react";
import { Radio, FormControlLabel, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomRadio = styled(Radio)(({ theme }) => ({
  "&.MuiRadio-root": {
    color: "#204d89",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSvgIcon-root": {
    width: 16,
    height: 16,
  },
  "& .MuiRadio-root": {
    position: "relative",
    borderRadius: "50%",
    marginRight: 5,
    cursor: "pointer",
    border: "1.4px solid #204d89",
    "&::before": {
      content: '""',
      display: "block",
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "transparent",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  "&.Mui-checked": {
    color: "#204d89",
    "& .MuiSvgIcon-root": {
      width: 16,
      height: 16,
    },
    "& .MuiRadio-root::before": {
      backgroundColor: "#204d89",
    },
  },
}));

const RadioButton = ({ label, checked, onChange, value, disabled = false }) => {
  return (
    <FormControlLabel
      control={
        <CustomRadio
          checked={checked}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      }
      label={
        <Box sx={{ fontSize: "13px", color: "var(--secondary)" }}>{label}</Box>
      }
    />
  );
};

export default RadioButton;
