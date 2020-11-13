import React from 'react';
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {
    return (
        <Dialogs dispatch={props.dispatch} state={props.state}/>
        )
}

export default Messages;