import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <div>ava + decription</div>
                <div>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGIkAU6e850KKzbf932ii0-lrbOnPFjBDiwA&usqp=CAU'}
                        alt=""/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;