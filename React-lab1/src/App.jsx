import React from 'react';
import HamburgerMenu from './components/HamburgerMenu.jsx';

const App = () => {
    const menuItems = [
        { label: "Title", key: "title" },
        { label: "Home", key: "home" },
        { label: "About", key: "about" },
        { label: "Contact", key: "contact" },
    ];

    return (
        <div>
            <HamburgerMenu menuItems={menuItems} />
        </div>
    );
};

export default App;