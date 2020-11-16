import React from 'react';
import styles from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={styles.content}>
            <ProfileHeader/>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;