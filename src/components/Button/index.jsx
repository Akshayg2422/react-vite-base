import React from "react";
import MuiButton from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

export const Button = ({
  startIcon,
  endIcon,
  color,
  borderColor,
  background,
  text,
  onClick,
  variant = "contained",
  size = "small",
  px,
  width,
  mt,
  loading = false,
  ...props
}) => {
  return (
    <MuiButton
      sx={{
        paddingX: px,
        background: background,
        color: color,
        border: `1.4px solid ${borderColor}`,
        cursor: "pointer",
        borderRadius: "5px",
        boxShadow: "none",
        textTransform: "none",
        fontSize: "12px",
        width: width,
        mt: mt,
        "&:hover": {
          background: background,
          color: color,
          border: `1.4px solid ${borderColor}`,
          boxShadow: "none",
        },
        "&.Mui-disabled": {
          background: "#73757A",
          borderColor: "#73757A",
          color: "#ffffff",
        },
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      size={size}
      onClick={onClick}
      {...props}
    >
      {loading ? <CircularProgress size={16} sx={{ color: color }} /> : text}
    </MuiButton>
  );
};
