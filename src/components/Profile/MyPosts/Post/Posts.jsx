import React from 'react';
import {Avatar, Button, Card} from "antd";
import Meta from "antd/lib/card/Meta";

const Post = (props) => {
    return (
        /*<div className={styles.item}>
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
        </div>*/
        <Card
            style={{marginTop: 16}}
            loading={``}
            actions={[
                  <Button>Like: {props.like_counts}</Button>,
            ]}
        >

            <Meta
                avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                }
                title={props.name}
            />
            <p>{props.message}</p>
        </Card>
    )
}

export default Post;