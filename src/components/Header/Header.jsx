import React from 'react';
import style from './Header.module.css'
import Title from "antd/lib/typography/Title";
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={style.header}>
            <div className={style.header__area}>
                <div className={style.header__logo}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        alt=""/>

                </div>
                <Title style={{color: 'white', margin: '0'}} level={4}>React Social Network</Title>
            </div>
            <div className={style.login__area}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    <h3 style={{color: 'white'}}>sing up</h3>
                </NavLink>}


            </div>
        </header>
    );
}


export default Header;