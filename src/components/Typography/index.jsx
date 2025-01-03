import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CustomTypography = styled(Typography)(
  ({
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    border,
    textAlign,
    lineHeight,
    padding,
  }) => ({
    fontSize: fontSize || "1rem",
    fontWeight: fontWeight || "normal",
    color: color || "inherit",
    backgroundColor: backgroundColor || "transparent",
    border: border || "none",
    textAlign: textAlign || "left",
    lineHeight: lineHeight || "normal",
    padding: padding || "0",
    display: "flex",
    alignItems: "center",
  })
);

const TypographyComponent = ({
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  border,
  textAlign,
  lineHeight,
  padding,
  startIcon,
  endIcon,
  children,
  marginLeft,
  onClick,
  sx,
  ...props
}) => {
  return (
    <CustomTypography
      sx={sx}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      textAlign={textAlign}
      lineHeight={lineHeight}
      padding={padding}
      marginLeft={marginLeft}
      {...props}
    >
      {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
      {children}
      {endIcon && <span style={{ marginLeft: 8 }}>{endIcon}</span>}
    </CustomTypography>
  );
};

TypographyComponent.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default TypographyComponent;
