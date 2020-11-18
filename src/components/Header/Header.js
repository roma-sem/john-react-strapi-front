import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className="Header container">
            <header>
                <Nav />
                <Link to="/" exact>
                    <Logo />
                </Link>
            </ header>
        </div>
    );
}
