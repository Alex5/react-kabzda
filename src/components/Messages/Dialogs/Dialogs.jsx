import React from "react";
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {


    let dialogsElements = props.state.messageData.dialogsArray.map(d => (<DialogsItem key={d.id} id={d.id} name={d.name}/>))


    return (

        <div className={styles.dialogs__area}>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <MessagesContainer />
            </div>
        </div>

    )
}


export default Dialogs;