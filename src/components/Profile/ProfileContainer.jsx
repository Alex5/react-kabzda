import React from 'react';
import styles from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../State/Redux/profile-reducer";
import {withRouter} from "react-router";
import {setAuthUserData} from "../../State/Redux/auth-reducer";
import {profileApi, usersApi} from "../../Api/Api";
import {authWithRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AxiosInstance as axios} from "axios";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1049;
        }
        this.props.getUserProfile(userId);
    }


    render() {
        return (
            <div className={styles.content}>
                <ProfileHeader/>
                <ProfileInfo profile={this.props.profile} key={this.props.userId}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    isAuth: state.authData.isAuth
})

export default compose(
    connect(mapStateToProps, {setAuthUserData, getUserProfile, setUserProfile}),
    authWithRedirect,
    withRouter)(ProfileContainer)

/*const authWithRedirectWrapper = authWithRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter(authWithRedirectWrapper)

export default connect(mapStateToProps, {setProfileInfo, setAuthUserData})(withUrlDataContainerComponent);*/
