import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Styled Skeleton Component
const StyledSkeleton = styled('div')(({ theme, customStyles }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    ...customStyles,
}));

// CustomSkeleton Component
const CustomSkeleton = ({ height, width, customStyles }) => {
    return (
        <StyledSkeleton
            customStyles={{
                height,
                width: width || '100%',
                ...customStyles,
            }}
        />
    );
};

// Prop Types
CustomSkeleton.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    customStyles: PropTypes.object,
};

CustomSkeleton.defaultProps = {
    width: '100%',
    customStyles: {},
};

export default CustomSkeleton;
