import React from "react";
import { Chip } from "@mui/material";

const CustomChip = ({
  label,
  size = "small",
  backgroundColor = "#fcf3f3",
  color = "#E12B1D",
  fontSize = "11px",
  fontWeight = 400,
  marginLeft = "8px",
  borderRadius = 8,
}) => {
  return (
    <Chip
      label={label}
      size={size}
      style={{
        marginLeft,
        borderRadius,
        backgroundColor,
        color,
        fontSize,
        fontWeight,
        padding: 3,
      }}
    />
  );
};

export default CustomChip;
