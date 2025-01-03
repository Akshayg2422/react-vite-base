import React from "react";
import { Snackbar, Alert } from "@mui/material";

const ShowToast = ({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 3000,
  anchorOrigin,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ShowToast;
