import React from 'react';
import Dialogs from "./Dialogs/Dialogs";


const MessagesArea = (props) => {

    let state = props.store.getState()

    return (
        <Dialogs store={props.store} state={state} /*dispatch={props.dispatch} *//>
        )
}

export default MessagesArea;