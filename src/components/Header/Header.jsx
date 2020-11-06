import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__area}>
                <div className={style.header__logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""/>

                </div>
                <div><h3>React Social Network</h3></div>
            </div>
        </header>
    );
}

export default Header;