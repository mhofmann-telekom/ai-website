import React from 'react';
import PropTypes from 'prop-types';

const RessourcesIcon = ({ fillColorPrimary = 'white', fillColorSecondary = 'var(--magenta)', size = 20 }) => {
    return (
        <svg
            data-icon-name="brickwall"
            data-style="flat-color"
            icon_origin_id="20061"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Flat Color"
            width={size}
            height={size}
        >
            <path
                style={{
                    fill: fillColorPrimary
                }}
                d="M7,6V8H5A1,1,0,0,0,4,9v4H3a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6Z"
                id="primary"
            />
            <path
                style={{
                    fill: fillColorSecondary
                }}
                d="M14,10v3h8v2H17v3H15V15H9v3H7V15H2V14a1,1,0,0,1,1-1h9V10H4V9A1,1,0,0,1,5,8H15V5h2V8h5v2Z"
                id="secondary"
            />
        </svg>
    );
};

RessourcesIcon.propTypes = {
    fillColorPrimary: PropTypes.string,
    fillColorSecondary: PropTypes.string,
    size: PropTypes.number,
};

export default RessourcesIcon;
