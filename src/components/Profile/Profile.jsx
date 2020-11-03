import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content__header}>
                <img
                    src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt=""/>
            </div>
            <div>
                <div>ava + decription</div>
                <div>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGIkAU6e850KKzbf932ii0-lrbOnPFjBDiwA&usqp=CAU'}
                        alt=""/>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;