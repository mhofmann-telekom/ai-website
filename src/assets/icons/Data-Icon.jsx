import React from 'react';
import PropTypes from 'prop-types';

const DataIcon = ({
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
    <polyline
      points="7 16 12 11 16 14 19.55 6.89"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <polyline
      points="3 3 3 21 21 21"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <line
      x1="19.95"
      y1="6"
      x2="20.05"
      y2="6"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: 2,  // fixed value for this line
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
  </svg>
);

DataIcon.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default DataIcon;
