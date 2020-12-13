import React from "react";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import 'antd/dist/antd.css';
import Avatar from "antd/es/avatar";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import {Field, reduxForm} from "redux-form";

const MessagesForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} type={"TextArea"} name={"messages"} placeholder={"Enter you`re messages"}/>
                <button>Send</button>
            </form>
    )
}

const ReduxMessagesForm = reduxForm({form: 'messages'})(MessagesForm)



const Messages = (props) => {

    const addNewMessage = (formData) => {
        console.log(formData)
        props.addNewMessage(formData.messages);
    }

    let messageElements = props.messagesArray.map(m => (
        <MessageItem dispatch={props.dispatch} key={m.id} state={props.state} id={m.id} message={m.message}
                     name={m.name} date={m.date}/>))


    return (
        <div className={styles.chat}>
            <div className={styles.scrollbar__container}>
                <div className={styles.scrollbar__message__header}>
                    <div className={styles.header__message__avatar}>
                        <Avatar size="large" icon={<UserOutlined/>}/>
                        <div><h4>Anika Lyons</h4>
                            <div className="online">Online</div>
                        </div>
                    </div>
                </div>
                <div className={styles.chat__body}>
                    {messageElements}
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <ReduxMessagesForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    )
}


export default Messages;