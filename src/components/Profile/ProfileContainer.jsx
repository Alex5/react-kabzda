import React from 'react';
import styles from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../State/Redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileInfo(response.data);
            });
    }

    render() {
        return (
            <div className={styles.content}>
                <ProfileHeader/>
                <ProfileInfo {...this.props} profile={this.props.profile} key={this.props.userId}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile
})

export default connect(mapStateToProps, {setProfileInfo})(ProfileContainer);