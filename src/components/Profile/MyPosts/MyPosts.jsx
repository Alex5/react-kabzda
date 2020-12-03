import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";
import {Button, Input} from 'antd';


const MyPosts = (props) => {

    const {TextArea} = Input;

    let newPostElements = React.createRef()

    let onPostChange = () => {
        let postText = newPostElements.current.value;
        props.updateNewPostTextActionCreator(postText);
    };

    let postElements = props.postArray.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts} key={p.id}/>))

    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <TextArea
                    rows={4}
                    value={props.newPostText} onChange={onPostChange}
                    ref={newPostElements}
                    placeholder={'Enter post message'}
                />
                <Button onClick={props.addPostActionCreator}>Add Post</Button>
            </div>
            <h3>My posts:</h3>
            {postElements}
        </div>
    )
}


export default MyPosts;