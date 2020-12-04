import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from 'react';

class MyPostsContainer extends React.Component {

    render() {
        return (
            <MyPosts
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                addPostActionCreator={this.props.addPostActionCreator}
                updateNewPostTextActionCreator={this.props.updateNewPostTextActionCreator}
            />

        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        newPostText: state.profileData.newPostText
    }
}


export default connect(mapStateToProps, {addPostActionCreator, updateNewPostTextActionCreator})(MyPostsContainer)
