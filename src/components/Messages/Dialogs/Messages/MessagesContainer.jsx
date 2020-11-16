import React from "react";
import {
    addNewMessage,
    updateNewMessageTextActionCreator,
} from "../../../../State/Redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


/*const MessagesContainer = () => {

    return (
        <Provider>
            {(store) => {

                let state = store.getState()


                let addMessage = () => {
                    store.dispatch(addNewMessage())
                }

                let onMessageChange = (messageText) => {
                    store.dispatch(updateNewMessageTextActionCreator(messageText))
                }

                return (
                    <Messages addMessage={addMessage} onMessageChange={onMessageChange}
                              messagesArray={state.messageData.messagesArray}
                              newMessageText={state.messageData.newMessageText}
                    />)
            }
            }
        </Provider>
    )
}*/


let mapStateToProps = (state) => {
    return {
        messagesArray: state.messageData.messagesArray,
        newMessageText: state.messageData.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessage())},
        onMessageChange: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        }
    }
}



const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;