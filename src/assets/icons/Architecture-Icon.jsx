import React from 'react';
import PropTypes from 'prop-types';

const ArchitectureIcon = ({ fillColor = 'white', size = 18, strokeColor = 'white', strokeWidth = '1' }) => {
    return (
        <svg
            data-icon-name="triangle-ruler-pencil"
            data-style="flat-color"
            icon_origin_id="14805"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Line Color"
            width={size}
            height={size}
        >
            <path
                style={{
                    fill: fillColor,
                    stroke: strokeColor,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: strokeWidth
                }}
                d="M14.69,3.29l-1.4,1.4a1,1,0,0,0,0,1.4L18.2,11H21V8.2L16.09,3.29A1,1,0,0,0,14.69,3.29Z"
                id="secondary"
            />
            <polygon
                style={{
                    fill: fillColor,
                    stroke: 'transparent',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2'
                }}
                points="19 21 3 21 3 5 19 21"
                id="primary"
            />
        </svg>
    );
};

ArchitectureIcon.propTypes = {
    fillColor: PropTypes.string,
    size: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.string,
};

export default ArchitectureIcon;
