import React from "react";

const MenuButton = (props) => {
    return (
        <button className="menu-button" onClick={props.toggleMenu} >
            <span className={`hamburger ${props.isOpen ? "open" : ""}`} />
        </button>
    );
};

export default MenuButton;
