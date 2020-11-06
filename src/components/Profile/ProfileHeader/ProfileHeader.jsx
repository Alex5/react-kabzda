import React from 'react';
import s from './ProfileHeader.module.css'

const ProfileHeader = () => {
    return (
        <div className={s.content}>
            <div className={s.content__header}>
                <img
                    src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt=""/>
            </div>
        </div>
    )
}

export default ProfileHeader;