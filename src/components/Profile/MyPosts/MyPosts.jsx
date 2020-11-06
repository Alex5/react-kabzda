import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";


const MyPosts = (props) => {


    let postElements = props.state.postArray.map( p => (<Post id={p.id} name={p.name} message={p.message} like_counts={p.like_counts} />) )

    return (
        <div className={s.posts__area}>
            <div>
                <h3>New posts</h3>
                <textarea value='Print the description here!'></textarea>
                <button>New Post</button>
            </div>
            <h3>My posts:</h3>
            { postElements }
        </div>
    )
}

export default MyPosts;