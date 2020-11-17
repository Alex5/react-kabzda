import React from "react";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";


//antd trash
import 'antd/dist/antd.css';
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import Avatar from "antd/es/avatar";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";


const Messages = (props) => {

    let messageElements = props.messagesArray.map(m => (
        <MessageItem dispatch={props.dispatch} id={m.id} message={m.message} name={m.name} date={m.date} />))

    let newMessage = React.createRef()


    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.onMessageChange(messageText);
    }


    return (
        <div className={styles.chat}>
            <div className={styles.scrollbar__container}>
                <div className={styles.scrollbar__message__header}>
                    <div className={styles.header__message__avatar}>
                        <Avatar size="large" icon={<UserOutlined />} />
                        <div><h4>Anika Lyons</h4>
                            <div className="online">Online</div>
                        </div>
                    </div>
                </div>
                <div className={styles.chat__body}>
                    {messageElements}
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <TextArea
                        onChange={onMessageChange} ref={newMessage}
                        value={props.newMessageText}
                        placeholder="Enter message here"
                        autoSize={{minRows: 2, maxRows: 6}}
                    />
                    <Button onClick={onAddMessage} type="primary">Send</Button>
                </div>
            </div>
        </div>

    )
}



export default Messages;