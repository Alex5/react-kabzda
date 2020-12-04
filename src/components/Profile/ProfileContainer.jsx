import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../Redux/profile-reducer";
import Preloader from "../common/preloader/Preloader";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileData.profile
});

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileThunkCreator})(ProfileContainerWithRouter);