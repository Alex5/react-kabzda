import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className={s.nav}>
                <div className={s.nav_menu}>
                    <ul>
                        <li><NavLink activeClassName={s.active} className={s.item} to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName={s.active} className={s.item} to="/messages">Messages</NavLink></li>
                        <li><NavLink activeClassName={s.active} className={s.item} to="/news">News</NavLink></li>
                        <li><NavLink activeClassName={s.active} className={s.item} to="/music">Music</NavLink></li>
                        <li><NavLink activeClassName={s.active} className={s.item} to="/setting">Setting</NavLink></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;