import React from "react";
import {
    addNewMessage,
    updateNewMessageTextActionCreator,
} from "../../../../State/Redux/dialogs-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addNewMessage())
    }

    debugger

    let onMessageChange = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }

    return (
        <Messages addMessage={addMessage} onMessageChange={onMessageChange}
                  messagesArray={state.messageData.messagesArray}
                  newMessageText={ state.messageData.newMessageText}
        />
    )
}

export default MessagesContainer;