import React from "react";
import styles from "./Messages.module.css";

const Messages = (props) => {

    return (
        <div className={styles.messages__message}>{props.message}</div>
    )
}

export default Messages;