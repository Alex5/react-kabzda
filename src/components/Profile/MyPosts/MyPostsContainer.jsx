import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../State/Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (postText) => {
        props.store.dispatch(updateNewPostTextActionCreator(postText))
    };

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} postArray={state.profileData.postArray}
                 newPostText={state.profileData.newPostText}/>
    )
}


export default MyPostsContainer;