import { Box, Divider } from "@mui/material";
import React from "react";

const HorizontalLine = ({ marginBottom, marginTop }) => {
  return (
    <Box>
      <Divider
        orientation="horizontal"
        sx={{
          height: "1px",
          borderColor: "#DADADA",
          borderBottomWidth: "1.5px",
          marginBottom: marginBottom,
          marginTop: marginTop,
        }}
      />
    </Box>
  );
};

export default HorizontalLine;
