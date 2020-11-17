import React from "react";
import styles from "../Messages.module.css";
import Avatar from "antd/es/avatar";
import {UserOutlined} from "@ant-design/icons";

let MessageItem = (props) => {

    return (
        <div className={styles.messages__message}>
            <div className={styles.message__outgoing__item}>
                <div className={styles.message__avatar}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div>
                        <div>{props.name}</div>
                        <div className="date">{props.date}</div>
                    </div>
                </div>
                <div className="message-content">{props.message}</div>
            </div>
        </div>
    )
}

export default MessageItem;