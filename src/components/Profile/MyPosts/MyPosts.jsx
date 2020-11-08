import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";


const MyPosts = (props) => {

    let newPostElements = React.createRef()

    let addPost = () => {
        debugger
        let postText = newPostElements.current.value;
        props.addPost(postText);
        newPostElements.current.value = '';
    }


    let postElements = props.state.postArray.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts}/>))

    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <textarea className={styles.posts__area__textarea} ref={newPostElements}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <h3>My posts:</h3>
            {postElements}
        </div>
    )
}

export default MyPosts;