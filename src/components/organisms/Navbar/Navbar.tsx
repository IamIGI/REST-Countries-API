import React from 'react';
import './Navbar.css';
import { BsMoonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navBar">
            <NavLink to="/" className="navBar__title pointer">
                <h1>Where is the world?</h1>
            </NavLink>

            <div className="navBar__darkMode pointer">
                <BsMoonFill />
                <p>Dark Mode</p>
            </div>
        </div>
    );
};

export default Navbar;
