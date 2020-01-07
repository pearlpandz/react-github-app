import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <header className="bg-primary p-15 ">
            <div className="container">
                <div className="flex justify-between">
                    <a href="/" className="color-primary"><i className={icon}></i> {title}</a>
                    <ul className="menu-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
