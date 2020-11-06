import React from 'react';
import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";


const Messages = (props) => {

    return (

            <Dialogs messageData={props.state}/>

    )
}

export default Messages;