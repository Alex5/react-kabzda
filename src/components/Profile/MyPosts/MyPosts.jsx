import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../State/Redux/profile-reducer";


const MyPosts = (props) => {

    let newPostElements = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let postText = newPostElements.current.value;
        props.dispatch(updateNewPostTextActionCreator(postText))
    };

    let postElements = props.state.profileData.postArray.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts}/>))
    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <textarea value={props.state.profileData.newPostText} onChange={onPostChange}
                          className={styles.posts__area__textarea}
                          ref={newPostElements}
                          placeholder={'Enter post message'}
                />
                <button onClick={addPost}>Add Post</button>
            </div>
            <h3>My posts:</h3>
            {postElements}
        </div>
    )
}


export default MyPosts;