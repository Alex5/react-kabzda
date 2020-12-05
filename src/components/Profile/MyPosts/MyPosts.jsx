import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts} key={p.id}/>))

    let newPostElements = React.createRef()

    let onAddPost = () => {
        props.addPostActionCreator();
    }

    let onPostChange = () => {
        let text = newPostElements.current.value;
        props.updateNewPostTextActionCreator(text);
    };

    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <textarea
                    value={props.newPostText} onChange={onPostChange}
                    ref={newPostElements}
                    placeholder={'Enter post message'}
                />
                <Button variant="contained" onClick={onAddPost}>Add post</Button>
            </div>
            <h3>My posts:</h3>
            <div>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts;