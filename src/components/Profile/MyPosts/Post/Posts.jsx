import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt=""/>
                    <div>
                        <h3>John</h3>
                        <p>{ props.message }</p>
                        <span> {props.like_counts}</span>
                    </div>
                </div>
    )
}

export default Post;