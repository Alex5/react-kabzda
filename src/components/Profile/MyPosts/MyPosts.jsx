import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";


const MyPosts = (props) => {

    let newPostElements = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let postText = newPostElements.current.value;
        props.updateNewPostText(postText);
    };

    let postElements = props.postArray.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts} key={p.id}/>))

    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <textarea value={props.newPostText} onChange={onPostChange}
                          className={styles.posts__area__textarea}
                          ref={newPostElements}
                          placeholder={'Enter post message'}
                />
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <h3>My posts:</h3>
            {postElements}
        </div>
    )
}


export default MyPosts;