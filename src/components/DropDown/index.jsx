import React from "react";
import {
  Box,
  FormControl,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import downArrow from "../../assets/svg/downArrow.svg";

const Dropdown = ({
  className,
  label,
  placeholder,
  value,
  onChange,
  options = [],
  backgroundColor,
  showAsterisk = false,
  disabled = false,
  highlightSelectedValue = false,
}) => {
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
        <FormControl
          fullWidth
          variant="outlined"
          className={className}
          sx={{ backgroundColor: backgroundColor, borderRadius: "4px" }}
        >
          <Autocomplete
            value={options.find((option) => option.value === value) || null}
            onChange={(event, newValue) =>
              onChange(newValue ? newValue.value : "")
            }
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder={placeholder}
                sx={{
                  fontWeight: 400,
                  color: "var(--secondary)",
                  "& .MuiOutlinedInput-root": {
                    padding: "0 !important",
                    "& .MuiAutocomplete-input": {
                      padding: "6.3px 10px",
                      fontSize: "small",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DCDCDE",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DCDCDE",
                    },
                    "& .MuiInputBase-input:focus": {
                      outline: "none",
                    },
                    ...(highlightSelectedValue && value
                      ? {
                          color: "var(--custom-primary)",
                          fontWeight: "bold",
                        }
                      : {}),
                  },
                }}
              />
            )}
            ListboxProps={{
              className: "custom-scrollbar",
              style: {
                backgroundColor: backgroundColor,
                borderRadius: "4px",
              },
            }}
            renderOption={(props, option, { selected }) => (
              <Box
                {...props}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: selected ? "bold" : "normal",
                  color:
                    selected && highlightSelectedValue
                      ? "var(--custom-primary)"
                      : "inherit",
                }}
              >
                {option.label}
              </Box>
            )}
            disableClearable
            noOptionsText="No options"
            popupIcon={
              <img
                src={downArrow}
                alt="down arrow"
                style={{ width: "16px", height: "16px", pointerEvents: "none" }}
              />
            }
            disabled={disabled}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Dropdown;
