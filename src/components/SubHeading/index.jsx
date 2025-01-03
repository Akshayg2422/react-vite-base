import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeading = ({
  text,
  subText,
  marginTop,
  color = "var(--custom-primary)",
  showAsterisk = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.6,
        marginTop: marginTop,
      }}
    >
      <Typography
        sx={{
          color: color,
          fontSize: "15px",
          fontWeight: 550,
        }}
      >
        {text}{" "}
        {showAsterisk && (
          <span
            style={{
              color: "var(--custom-primary)",
              fontSize: "14px",
              lineHeight: "24px",
              fontWeight: 500,
            }}
          >
            {" "}
            *
          </span>
        )}
      </Typography>
      <Typography
        sx={{
          color: "var(--addLead)",
          fontSize: "11px",
          fontWeight: 450,
        }}
      >
        {subText}
      </Typography>
    </Box>
  );
};

export default SubHeading;
