import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
            <nav className={s.nav}>
                <div className={s.nav_menu}>
                    <ul>
                        <li><a className={`${s.item} ${s.active}`} href="#">Profile</a></li>
                        <li><a className={s.item} href="#">Messages</a></li>
                        <li><a className={s.item} href="#">News</a></li>
                        <li><a className={s.item} href="#">Music</a></li>
                        <li><a className={s.item} href="#">Setting</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;