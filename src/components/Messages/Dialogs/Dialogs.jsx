import React from "react";
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {



    let dialogsElements = props.messageData.dialogsArray.map( d => (<DialogsItem id={d.id} name={d.name} />) )

    let messageElements = props.messageData.messagesArray.map( m => (<Messages id={m.id} message={m.message} />) )

    return (
        <div className={styles.dialogs__area}>
            <div className={styles.dialogs}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>


    )
}

export default Dialogs;