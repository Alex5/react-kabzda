import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Menu, Switch} from "antd";


const Navbar = () => {

    return (

        <Menu style={{marginTop: '70px'}} className={styles.nav}>
            <Menu.Item><NavLink activeClassName={styles.active} className={styles.item} to="/profile">Profile</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName={styles.active} className={styles.item}
                                to="/messages">Messages</NavLink></Menu.Item>
            <Menu.Item><NavLink to={'/users'}>Users</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName={styles.active} className={styles.item}
                                to="/news">News</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName={styles.active} className={styles.item}
                                to="/music">Music</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName={styles.active} className={styles.item} to="/setting">Setting</NavLink></Menu.Item>

            <div className={styles.nav_menu}>
            </div>
        </Menu>
    )
}


export default Navbar;
