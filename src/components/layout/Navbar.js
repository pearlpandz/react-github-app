import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <header className="bg-primary p-15 ">
                <div className="container">
                    <div className="flex">
                        <a href="/" className="color-secondary"><i className={this.props.icon}></i> {this.props.title}</a>
                        <ul className="menu-items">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
