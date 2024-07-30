import React from 'react';
import PropTypes from 'prop-types';

const WorldIcon = ({
  strokeColor = 'rgb(57, 57, 57)',
  strokeWidth = 1.5,
  size = '24',
}) => (
  <svg
    data-icon-name="world"
    data-style="line"
    icon_origin_id="17569"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Line Color"
    id="world"
    className="icon line"
    width={size}
    height={size}
  >
    <circle
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: strokeWidth,
      }}
      r="9"
      cy="12"
      cx="12"
      id="primary"
    />
    <ellipse
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: strokeWidth,
      }}
      ry="9"
      rx="3"
      cy="12"
      cx="12"
      id="secondary"
    />
    <path
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: strokeWidth,
      }}
      d="M19.2,17.4a9.7,9.7,0,0,0-4.42-2.1,13,13,0,0,0-5.56,0A9.7,9.7,0,0,0,4.8,17.4"
      data-name="primary"
      id="primary-2"
    />
    <path
      style={{
        fill: 'none',
        stroke: strokeColor,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: strokeWidth,
      }}
      d="M19.2,6.6a9.7,9.7,0,0,1-4.42,2.1A12.53,12.53,0,0,1,12,9a12.53,12.53,0,0,1-2.78-.3A9.7,9.7,0,0,1,4.8,6.6"
      data-name="primary"
      id="primary-3"
    />
  </svg>
);

WorldIcon.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default WorldIcon;
