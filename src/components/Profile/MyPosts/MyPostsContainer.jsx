import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../State/Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewMessage} from "../../../State/Redux/dialogs-reducer";


/*const MyPostsContainer = (props) => {

    return (
        <Provider>
            {(store) => {
                let state = store.getState()

                debugger

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                debugger

                let onPostChange = (postText) => {
                    store.dispatch(updateNewPostTextActionCreator(postText))
                };

                return (
                    <MyPosts addPost={addPost} updateNewPostText={onPostChange} postArray={state.profileData.postArray}
                             newPostText={state.profileData.newPostText}/>
                )
            }}
        </Provider>

    )
}*/


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
        updateNewPostText: () => {
            dispatch(updateNewPostTextActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;