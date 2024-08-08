import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({
  fillColor = 'rgb(0, 0, 0)',
  strokeWidth = 1.5,
  strokeColor = "black",
  size = 24,
}) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path 
      d="M9,18H21M3,12H21M3,6H15"
      style={{
        strokeLinecap: "round",
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
      }}
    >
    </path>
  </svg>
);

MenuIcon.propTypes = {
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default MenuIcon;
