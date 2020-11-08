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
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;