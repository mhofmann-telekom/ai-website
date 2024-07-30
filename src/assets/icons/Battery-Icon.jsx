import React from 'react';
import PropTypes from 'prop-types';

const BatteryIcon = ({
  strokeColor = 'rgb(57, 57, 57)',
  strokeWidth = 1.5,
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      d="M12,15l1-2H11l1-2m5,9V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6V20a1,1,0,0,0,1,1h8A1,1,0,0,0,17,20ZM14,3H10V5h4Z"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
  </svg>
);

BatteryIcon.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default BatteryIcon;
