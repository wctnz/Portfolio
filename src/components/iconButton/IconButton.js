import React from 'react';
import "./IconButton.css"

const IconButton = ({ direction, disable, onClick }) => {

    let cls = "icon-button"

    if (direction === "left") cls += " left"
    if (direction === "right") cls += " right"
    if (disable) cls += " disable"

    return (
        <div className={cls} onClick={onClick}>

        </div>
    );
};

export default IconButton;