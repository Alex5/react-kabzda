import React from "react";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {

    let messageElements = props.messagesArray.map(m => (
        <MessageItem dispatch={props.dispatch} message={m.message}/>))

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
                        <img className="avatar"
                             src="https://image.flaticon.com/icons/png/512/194/194938.png"
                             alt=""/>
                        <div><h4>Anika Lyons</h4>
                            <div className="online">Online</div>
                        </div>
                    </div>
                </div>
                <div className={styles.chat__body}>
                    {messageElements}
                </div>
                <div className={styles.messages__area__input}>
                        <textarea onChange={onMessageChange} ref={newMessage}
                                  value={props.newMessageText}
                                  placeholder={'Enter message text'}/>
                        <button onClick={onAddMessage}>Отправить</button>
                </div>
            </div>
        </div>

    )
}

export default Messages;