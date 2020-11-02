import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>New Post</button>
            </div>
            <Post message="Hi world im programmer!" like_counts="10 liked"/>
            <Post message="How are you?" like_counts="20 liked"/>
        </div>
    )
}

export default MyPosts;