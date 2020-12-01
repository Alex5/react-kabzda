import {
    addNewMessage,
    updateNewMessageTextActionCreator,
} from "../../../../State/Redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesArray: state.messageData.messagesArray,
        newMessageText: state.messageData.newMessageText,
        isAuth: state.authData.isAuth
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