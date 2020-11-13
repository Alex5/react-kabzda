import React from "react";
import styles from "../Messages.module.css";

let MessageItem = (props) => {

    return (
        <div className={styles.messages__message}>
            <div className={styles.message__outgoing__item}>
                <div className={styles.message__avatar}>
                    <img className="avatar"
                         src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                         alt=""/>
                    <div>Mirabelle Tow
                        <div className="time">13-Nov-20</div>
                    </div>
                </div>
                <div className="message-content">{props.message}</div>
            </div>
        </div>
    )
}

export default MessageItem;