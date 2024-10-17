import React from "react";

const MenuItem = (props) => {
    return (
        <li className="menu-item" onClick={props.onClick}>
            {props.label}
        </li>
    );
};

export default MenuItem;
