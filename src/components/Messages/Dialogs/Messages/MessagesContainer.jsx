import {
    addNewMessage,
    updateNewMessageText,
} from "../../../../Redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {authWithRedirect} from "../../../../hoc/withAuthRedirect";

import React from 'react';

class MessagesContainer extends React.Component {
    render() {
        return (
            <Messages {...this.props} />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        messagesArray: state.messageData.messagesArray,
        newMessageText: state.messageData.newMessageText,
        isAuth: state.authData.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage, updateNewMessageText}),
    authWithRedirect
)(MessagesContainer)

/*let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessage())
        },
        onMessageChange: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        }
    }
}*/
// export default compose(authWithRedirect, connect(mapStateToProps, mapDispatchToProps)(MessagesContainer))




/*const authWithRedirectWrapper = authWithRedirect(MessagesContainer)

export default connect(mapStateToProps, {addNewMessage, updateNewMessageText})(authWithRedirectWrapper)*/
