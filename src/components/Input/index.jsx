import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";

const Input = ({
  className,
  placeholder,
  type,
  value,
  onChange,
  label,
  backgroundColor,
  showAsterisk = false,
  startIcon,
  endIcon,
  disabled = false,
  min,
  inputPadding,
  maxLength,
  borderColor,
  accept,
}) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;

    // File type validation for PDF
    if (type === "file") {
      const file = e.target.files[0];
      if (file && file.type !== "application/pdf") {
        alert("Only PDF files are allowed");
        return;
      }
      onChange(e); // Pass the event to the parent component
      return;
    }

    // Regex to remove emojis
    inputValue = inputValue.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u26FF]|\uD83C[\uDDE6-\uDDFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEF6]|\uD83E[\uDD00-\uDDFF])/g,
      ""
    );

    if (maxLength && inputValue.length > maxLength) return;

    switch (type) {
      case "mobileNumber":
        if (/^\d{0,10}$/.test(inputValue)) {
          onChange({ ...e, target: { ...e.target, value: inputValue } });
        }
        return;

      case "decimal":
        if (/^\d*$/.test(inputValue)) {
          onChange({ ...e, target: { ...e.target, value: inputValue } });
        }
        return;

      case "number":
        if (/^\d*\.?\d*$/.test(inputValue)) {
          if (maxLength && parseFloat(inputValue) > 100) return;
          onChange({ ...e, target: { ...e.target, value: inputValue } });
        }
        return;

      case "textWithSymbols":
        if (/^[^\d]*$/.test(inputValue)) {
          onChange({ ...e, target: { ...e.target, value: inputValue } });
        }
        return;

      case "text":
        if (/^[a-zA-Z\s]*$/.test(inputValue)) {
          onChange({ ...e, target: { ...e.target, value: inputValue } });
        }
        return;

      case "location":
        inputValue = inputValue.replace(/[^a-zA-Z0-9,/\s]/g, "");
        break;

      case "panNo":
        inputValue = inputValue.toUpperCase().slice(0, 10);
        if (!/^[A-Z0-9]*$/.test(inputValue)) return;
        break;

      case "gstNo":
        inputValue = inputValue.toUpperCase().slice(0, 15);
        if (!/^[A-Z0-9]*$/.test(inputValue)) return;
        break;

      case "address":
        if (!/^[a-zA-Z0-9\s,.\-/]*$/.test(inputValue)) return;
        inputValue = inputValue.slice(0, 200);
        break;

      case "postalCode":
        if (!/^\d*$/.test(inputValue)) return;
        inputValue = inputValue.slice(0, 10);
        break;

      case "telephone":
      case "fax":
        if (!/^[0-9+\-()\s]*$/.test(inputValue)) return;
        inputValue = inputValue.slice(0, 15);
        break;

      case "website":
        if (!/^[a-zA-Z0-9\s\-._~:/?#@!$&'()*+,;=]*$/.test(inputValue)) return;
        inputValue = inputValue.slice(0, 100);
        break;

      case "subjectMail":
        if (!/^[a-zA-Z0-9\s\-.,]*$/.test(inputValue)) return;
        inputValue = inputValue.slice(0, 100);
        break;

      default:
        break;
    }

    // Call onChange with sanitized input
    onChange({ ...e, target: { ...e.target, value: inputValue } });
  };

  const handleFocus = (e) => {
    if (type === "date" || type === "time") {
      e.target.showPicker();
    }
  };

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          fontWeight: 500,
          color: "var(--secondary)",
        }}
      >
        {label}
        {showAsterisk && (
          <span style={{ color: "var(--custom-primary)" }}> *</span>
        )}
      </Typography>
      <Box>
        <TextField
          disabled={disabled}
          className={className}
          placeholder={placeholder}
          type={type === "mobileNumber" || type === "number" ? "text" : type}
          value={value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          maxLength={maxLength}
          InputProps={{
            inputMode: type === "mobileNumber" ? "numeric" : undefined,
            pattern: type === "mobileNumber" ? "\\d{0,10}" : undefined,
            startAdornment: startIcon ? (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : null,
            endAdornment: endIcon ? (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : null,
            sx: {
              padding: 0.8,
              fontSize: "13px",
              fontWeight: 400,
              color: "var(--secondary)",
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderRadius: "4px",
              outline: 0,
              "&:hover": {
                borderColor: borderColor,
              },
              "& .MuiInputBase-input": {
                padding: "0",
                paddingRight: inputPadding ? inputPadding : "0",
                "&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button":
                {
                  display: "none",
                },
                "&[type=number]": {
                  MozAppearance: "textfield",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: borderColor,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: borderColor,
              },
              "& .MuiInputBase-input:focus": {
                outline: "none",
              },
              "&::placeholder": {
                color: "#707070",
                opacity: 0.7,
                fontSize: "13px",
              },
            },
          }}
          inputProps={{
            min: min,
            accept: type === "file" ? accept : undefined,
            onKeyDown:
              type === "date" || type === "time"
                ? (e) => e.preventDefault()
                : undefined,
            onPaste:
              type === "date" || type === "time"
                ? (e) => e.preventDefault()
                : undefined,
            onFocus: handleFocus,
          }}
        />
      </Box>
    </Box>
  );
};

export default Input;