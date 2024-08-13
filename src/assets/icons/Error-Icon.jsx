import React from 'react';

const ErrorIcon = ({ strokeWidth = 1.5, strokeColor = 'rgb(57, 57, 57)', width = 24, height = 24 }) => {
    return (
        <svg
            data-icon-name="warning"
            data-style="line"
            icon_origin_id="3095"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="warning"
            className="icon line"
            width={width}
            height={height}
        >
            <path
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,16a1,1,0,1,1,1-1A1,1,0,0,1,12,18Zm1-5a1,1,0,0,1-2,0V7a1,1,0,0,1,2,0Z"
                style={{strokeWidth: strokeWidth, stroke: strokeColor, fill: "none" }}
            />
        </svg>
    );
};

export default ErrorIcon;
