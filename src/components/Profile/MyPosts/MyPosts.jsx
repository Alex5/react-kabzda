import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <div>
                <h3>New posts</h3>
                <textarea value='Print the description here!'></textarea>
                <button>New Post</button>
            </div>
            <h3>My posts:</h3>
            <Post name="John Week" message="Hi world im programmer!" like_counts="10 liked"/>
            <Post name="Axel Rose" message="How are you?" like_counts="20 liked"/>
        </div>
    )
}

export default MyPosts;