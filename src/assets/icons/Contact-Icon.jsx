import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ fillColor = 'var(--dark-950)', strokeColor = 'transparent', size = 18, strokeWidth = 1.5 }) => {
    return (
        <svg
            data-icon-name="user-10"
            data-style="line"
            icon_origin_id="24291"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="user-10"
            className="icon line"
            width={size}
            height={size}
        >
            <path
                style={{ fill: fillColor, stroke: strokeColor, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth }}
                d="M16.66,12.77A5.93,5.93,0,0,0,17.92,8,6,6,0,0,0,6,9a5.94,5.94,0,0,0,1.34,3.77,1,1,0,0,1-.28,1.45A7,7,0,0,0,4,20a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1,7,7,0,0,0-3.06-5.78A1,1,0,0,1,16.66,12.77Z"
                id="primary"
            />
        </svg>
    );
};

ContactIcon.propTypes = {
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string,
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
};

export default ContactIcon;
