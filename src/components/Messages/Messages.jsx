import React from 'react';
import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {

    return (
        <div>
            <Dialogs messageData={props.state}/>
        </div>
    )
}

export default Messages;