import React from 'react';
import Dialogs from "./Dialogs/Dialogs";



const MessagesArea = (props) => {
    return (
        <Dialogs state={props.state} />
        )
}

export default MessagesArea;