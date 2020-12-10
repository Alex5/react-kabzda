import React from 'react';
import style from './Header.module.css'
import Title from "antd/lib/typography/Title";
import {NavLink} from "react-router-dom";
import {Popover, Button, Avatar} from 'antd';
import {connect} from "react-redux";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

export let IfLoggedIn = (props) => {

    const content = (
        <div className={style.login__popup__content}>
            <strong>{props.login}</strong>
            <hr/>
            <p>Settings</p>
            <p>Help</p>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );

    return (
        <Popover content={content}>
            <div className={style.login__area}>

                <Avatar icon={<UserOutlined/>}/>
                <p>{props.login}</p>
            </div>
        </Popover>
    )
}

export let IfNotLoggedIn = () => {
    return (
        <NavLink to={'/login'}>
            <Title style={{color: 'white', margin: '0'}} level={5}>sing up</Title>
        </NavLink>
    )
}

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.header__area}>
                <div className={style.header__logo}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        alt=""/>
                </div>
                <Title style={{color: 'white', margin: '0'}} level={5}>React Social Network</Title>
            </div>
            <div>
                {props.isAuth
                    ? <IfLoggedIn login={props.login} logout={props.logout}/>
                    : <IfNotLoggedIn/>}
            </div>
        </header>
    );
}


const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile
    }
}


export default connect(mapStateToProps)(Header);