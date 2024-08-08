import React from 'react';
import PropTypes from 'prop-types';

const CrossIcon = ({ fill = 'none', size = 24, strokeColor = 'rgb(57, 57, 57)', strokeWidth = 1.5 }) => {
    return (
        <svg
            data-icon-name="cross"
            data-style="line"
            icon_origin_id="20398"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
        >
            <line
                style={{
                    fill: fill,
                    stroke: strokeColor,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: strokeWidth
                }}
                y2="5"
                x2="5"
                y1="19"
                x1="19"
                id="primary"
            />
            <line
                style={{
                    fill: fill,
                    stroke: strokeColor,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: strokeWidth
                }}
                y2="19"
                x2="5"
                y1="5"
                x1="19"
                id="primary-2"
            />
        </svg>
    );
};

CrossIcon.propTypes = {
    fill: PropTypes.string,
    size: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
};

export default CrossIcon;
