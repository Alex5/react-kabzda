import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post__header}>
                <img
                    src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
                    alt=""/>
                <h3>{props.name}</h3>
            </div>

            <div className={styles.post__body}>
                <p>{props.message}</p>

            </div>
            <div className={styles.post__footer}>
                <button>Reply</button>
                <button>like: {props.like_counts}</button>
            </div>
        </div>
    )
}

export default Post;