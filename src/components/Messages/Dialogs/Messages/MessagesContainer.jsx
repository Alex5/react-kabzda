import {addNewMessage} from "../../../../Redux/dialogs-reducer";
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
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    authWithRedirect
)(MessagesContainer)
