import React from 'react';
import PropTypes from 'prop-types';

const SettingsIcon = ({ fillColor = 'black', size = 24, strokeColor = 'white', strokeWidth = '2' }) => {
    return (
        <svg
            data-icon-name="settings-alt"
            data-style="flat-color"
            icon_origin_id="4663"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
        >
            <path
                style={{ fill: fillColor }}
                d="M15,12c0,.1,0,.21,0,.31A9,9,0,0,1,10.11,20l-.72-.72a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29L10.11,4A9,9,0,0,1,15,11.69C15,11.79,15,11.9,15,12Z"
                id="secondary-fill"
            />
            <circle
                style={{ fill: fillColor }}
                r="3"
                cy="12"
                cx="12"
                id="tertiary-fill"
            />
            <path
                style={{
                    fill: 'none', // Die Strokes sind jetzt weiß, aber keine zusätzliche Füllung
                    stroke: strokeColor,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: strokeWidth
                }}
                d="M19.29,9.39l1.9,1.9a1,1,0,0,1,0,1.42l-1.9,1.9a1,1,0,0,0-.29.7V18a1,1,0,0,1-1,1H15.31a1,1,0,0,0-.7.29l-1.9,1.9a1,1,0,0,1-1.42,0l-1.9-1.9a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29l1.9-1.9a1,1,0,0,1,1.42,0l1.9,1.9a1,1,0,0,0,.7.29H18a1,1,0,0,1,1,1V8.69A1,1,0,0,0,19.29,9.39ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                id="primary-stroke"
            />
        </svg>
    );
};

SettingsIcon.propTypes = {
    fillColor: PropTypes.string,
    size: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.string,
};

export default SettingsIcon;
