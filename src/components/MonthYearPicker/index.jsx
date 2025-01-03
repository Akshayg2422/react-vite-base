import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import downArrow from "../../assets/svg/downArrow.svg";

const MonthYearPicker = ({
  label,
  value,
  onChange,
  showAsterisk = false,
  placeholder = "Choose Month",
}) => {
  // Ensure the value is a Day.js object
  const dayjsValue = value ? dayjs(value) : null;

  const shouldDisableMonth = (month) => {
    const currentMonth = dayjs().startOf("month");
    return dayjs(month).isBefore(currentMonth);
  };

  const shouldDisableYear = (year) => {
    const currentYear = dayjs().year();
    return dayjs(year).year() < currentYear;
  };

  const handlePaste = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <DatePicker
          sx={{
            fontWeight: 400,
            width: "100%",
            color: "var(--secondary)",
            "& .MuiOutlinedInput-root": {
              // padding: "0 !important",
              "& .MuiInputBase-input": {
                padding: "6.3px 10px",
                fontSize: "13px",
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
              "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                color: "#707070",
                //   opacity: 0.7,
                fontSize: "small",
              },
            },
          }}
          value={dayjsValue}
          // shouldDisableMonth={shouldDisableMonth}
          // shouldDisableYear={shouldDisableYear}
          onChange={onChange}
          views={["month", "year"]}
          slots={{
            openPickerIcon: () => <img src={downArrow} alt="down arrow" />,
          }}
          slotProps={{
            popper: {
              sx: {
                ".MuiPaper-root": { borderRadius: "10px" },
                ".css-1q04gal-MuiDateCalendar-root": {
                  maxHeight: "270px",
                  pb: 2,
                },
                "& .css-bw88rr-MuiPickersMonth-monthButton.Mui-selected": {
                  backgroundColor: "var(--custom-primary)",
                },
                "& .css-innj4t-MuiPickersYear-yearButton.Mui-selected": {
                  backgroundColor: "var(--custom-primary)",
                },
              },
            },
            textField: {
              placeholder: placeholder,
              onPaste: handlePaste,
              onKeyDown: handleKeyDown,
              readOnly: true,
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              helperText={null}
              fullWidth
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default MonthYearPicker;
