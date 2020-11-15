import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friends";

const Navbar = (props) => {


    let menuItemElement = props.state.sideBar.menuItemsArray.map( menuItems => (<li>{menuItems.menuItemName}</li>))


    return (
        <nav className={styles.nav}>
            <div className={styles.nav_menu}>
                <ul>
                    <li><NavLink activeClassName={styles.active} className={styles.item} to="/profile">Profile</NavLink>
                    </li>
                    <li><NavLink activeClassName={styles.active} className={styles.item}
                                 to="/messages">Messages</NavLink></li>
                    <li><NavLink activeClassName={styles.active} className={styles.item} to="/news">News</NavLink></li>
                    <li><NavLink activeClassName={styles.active} className={styles.item} to="/music">Music</NavLink>
                    </li>
                    <li><NavLink activeClassName={styles.active} className={styles.item} to="/setting">Setting</NavLink>
                    </li>
                </ul>
            </div>
            <Friend/>
        </nav>
    )
}

export default Navbar;