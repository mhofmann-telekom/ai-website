import React from 'react';
import PropTypes from 'prop-types';

const ExpertiseIcon = ({ fillColorPrimary = 'white', fillColorSecondary = 'var(--magenta)', fillColorTertiary = 'transparent', size = 18 }) => {
    return (
        <svg
            data-icon-name="trophy-2"
            data-style="flat-color"
            icon_origin_id="22532"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
        >
            <path
                style={{ fill: fillColorTertiary }}
                d="M20,4H17a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1,5,5,0,0,0,5-5V6A2,2,0,0,0,20,4Zm0,3a3,3,0,0,1-2,2.83V6h2ZM7,4H4A2,2,0,0,0,2,6V7a5,5,0,0,0,5,5,1,1,0,0,0,1-1V5A1,1,0,0,0,7,4ZM6,9.83A3,3,0,0,1,4,7V6H6ZM18,21.29A1,1,0,0,1,17,22H7a1,1,0,0,1-.55-1.83A5.74,5.74,0,0,0,9,15.55a1,1,0,0,1,.46-.81,1,1,0,0,1,.94-.08,4,4,0,0,0,3.2,0,1,1,0,0,1,.94.07,1,1,0,0,1,.46.82,5.74,5.74,0,0,0,2.55,4.62A1,1,0,0,1,18,21.29Z"
                id="secondary"
            />
            <path
                style={{ fill: fillColorPrimary }}
                d="M18,3v8A6,6,0,0,1,6,11V3A1,1,0,0,1,7,2H17A1,1,0,0,1,18,3Zm1,18a1,1,0,0,0-1-1H6a1,1,0,0,0,0,2H18A1,1,0,0,0,19,21Z"
                id="primary"
            />
            <path
                style={{ fill: fillColorSecondary }}
                d="M13.24,11.25a1,1,0,0,1-.44-.1l-.8-.39-.8.39a1,1,0,0,1-1-.11,1,1,0,0,1-.38-1l.13-.72-.58-.52A1,1,0,0,1,9.87,7.1L10.74,7l.38-.7a1,1,0,0,1,1.76,0l.38.7.87.12a1,1,0,0,1,.54,1.73l-.58.52.13.72a1,1,0,0,1-.38,1A1,1,0,0,1,13.24,11.25Z"
            />
        </svg>
    );
};

ExpertiseIcon.propTypes = {
    fillColorPrimary: PropTypes.string,
    fillColorSecondary: PropTypes.string,
    fillColorTertiary: PropTypes.string,
    size: PropTypes.number,
};

export default ExpertiseIcon;
