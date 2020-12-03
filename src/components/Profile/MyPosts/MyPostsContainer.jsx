import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../State/Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from 'react';

class MyPostsContainer extends React.Component {

    render() {
        return (
            <MyPosts
                postArray={this.props.postArray}
                onAddPost={this.onAddPost}
                newPostText={this.props.newPostText}
                addPostActionCreator={this.props.addPostActionCreator}
                updateNewPostTextActionCreator={this.props.updateNewPostTextActionCreator}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        postArray: state.profileData.postArray,
        newPostText: state.profileData.newPostText
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator())},
        updateNewPostText: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText))
        }
    }
}*/


export default  connect(mapStateToProps, {addPostActionCreator, updateNewPostTextActionCreator})(MyPostsContainer)
