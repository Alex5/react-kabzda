import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileHeader/>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;