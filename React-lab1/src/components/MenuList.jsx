import React from "react";
import MenuItem from './MenuItem';

const MenuList = (props) => {
    return (
        <ul className="menu-list">
            {props.items.map((item) => (
                <MenuItem key={item.key} label={item.label} onClick={props.closeMenu} />
            ))}
        </ul>
    );
};

export default MenuList;