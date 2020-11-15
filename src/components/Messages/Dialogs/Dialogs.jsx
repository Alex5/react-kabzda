import React from "react";
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {

    let dialogsElements = props.state.messageData.dialogsArray.map( d => (<DialogsItem id={d.id} name={d.name} />) )

    // let messageElements = props.messageData.messagesArray.map( m => (<MessagesArea id={m.id} message={m.message} />) )

    return (
        <div className={styles.dialogs__area}>
            <div className={styles.dialogs}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                <MessagesContainer store={props.store}/>
            </div>
        </div>

    )
}

export default Dialogs;