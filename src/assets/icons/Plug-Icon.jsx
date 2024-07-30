import React from 'react';
import PropTypes from 'prop-types';

const PlugIcon = ({
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
      d="M20.41,11.37l-3.53,3.54-1.42-1.42-1.41-1.41,3.54-3.54a2,2,0,0,1,2.82,0h0A2,2,0,0,1,20.41,11.37Z"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      d="M6,7.39,9.81,3.58a2,2,0,0,1,2.83,0h0a2,2,0,0,1,0,2.83L4,15a3.49,3.49,0,0,0,0,5H4a3.49,3.49,0,0,0,5,0l.82-.83"
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      d="M9.81,19.15h0a3,3,0,0,0,4.24,0l2.83-2.83a1,1,0,0,0,0-1.41l-2.83-2.83a1,1,0,0,0-1.42,0L9.81,14.91A3,3,0,0,0,9.81,19.15Z"
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

PlugIcon.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default PlugIcon;
