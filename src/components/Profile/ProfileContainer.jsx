import React from 'react';
import styles from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {setProfileInfo} from "../../State/Redux/profile-reducer";
import {withRouter} from "react-router";
import {setAuthUserData} from "../../State/Redux/auth-reducer";
import {profileApi} from "../../Api/Api";


class ProfileContainer extends React.Component {



    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) { userId = 12885}
            profileApi.setProfileInfo(userId).then(data => {
                this.props.setProfileInfo(data);
                this.props.setAuthUserData(data);
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
    profile: state.profileData.profile,
    isAuth: state.authData.isAuth,
})

let withUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo, setAuthUserData})(withUrlDataContainerComponent);