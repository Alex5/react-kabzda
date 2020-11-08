import React from "react";
import styles from "./Friends.module.css";

const Friend = (props) => {

    return (
        <div className={styles.friendsArea}>
            <div className={styles.friendsArea__head}>Best Friend</div>
            <div className={styles.friendsArea__body}>
                <div className={styles.friendsArea__items}><img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/><span></span></div>
                <div><img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/></div>
                <div><img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/></div>
            </div>
        </div>
    )

}

export default Friend;

