import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.scss';
import Logo from '../../Logo/Logo';
import { Link } from 'react-router-dom';

export default function MobileNav(props) {
    return (
        <nav className="MobileNav">
            <Link to="/" exact>
                <Logo />
            </Link>

            <ul>
                {props.navItems.map((item, index) =>
                    <li key={index} onClick={props.clicked}>
                        <NavLink
                            exact
                            to={index === 0 ? "/" : `/${item.nav_title.toLowerCase()}`}
                            activeClassName="active-mob-nav-link">
                                {item.nav_title.toLowerCase()}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}
