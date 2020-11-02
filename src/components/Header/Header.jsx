import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png" alt=""/>
            </div>

        </header>
    );
}

export default Header;