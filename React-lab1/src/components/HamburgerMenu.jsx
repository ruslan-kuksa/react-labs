import React, { useState } from "react";
import MenuButton from './MenuButton';
import MenuList from './MenuList';

const HamburgerMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="hamburger-menu">
            <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className={`menu-content ${isOpen ? 'open' : ''}`}>
                <MenuList items={props.menuItems} closeMenu={closeMenu} />
            </div>
        </nav>
    );
};

export default HamburgerMenu;
