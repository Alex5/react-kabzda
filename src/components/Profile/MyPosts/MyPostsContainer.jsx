import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../State/Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postArray: state.profileData.postArray,
        newPostText: state.profileData.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator())},
        updateNewPostText: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;