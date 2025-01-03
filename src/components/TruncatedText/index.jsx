import React from "react";
import { Tooltip, Box } from "@mui/material";

const TruncatedText = ({ text, maxLength, fontSize, fontWeight }) => {
  // Ensure text is a string or provide a fallback
  const safeText = text || "";
  const truncatedText =
    safeText.length > maxLength
      ? safeText.substring(0, maxLength).trim() + "..."
      : safeText;

  return (
    <Tooltip
      title={safeText}
      disableHoverListener={safeText.length <= maxLength}
    >
      <Box
        component="span"
        sx={{
          cursor: safeText.length > maxLength ? "pointer" : "default",
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
      >
        {truncatedText}
      </Box>
    </Tooltip>
  );
};

export default TruncatedText;
