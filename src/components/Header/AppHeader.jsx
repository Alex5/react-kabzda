import React from 'react';
import style from './Header.module.css'
import { Typography } from 'antd';
import Title from "antd/lib/typography/Title";


const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.header__area}>
                <div className={style.header__logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/>

                </div>
                <Title style={{color: 'white', margin: '0'}} level={4}>React Social Network</Title>
            </div>
        </header>
    );
}

export default AppHeader;